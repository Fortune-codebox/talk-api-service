<template>
    <div>
      <b-card class="card_adj"> 

         <h4>Talk Attendees</h4>

         <div>
             <span class="font-weight-bold">Talk Theme:</span>  {{talk.theme}} <br>
             <span class="font-weight-bold">Host: </span> {{talk.host}}    <br>
             <span class="font-weight-bold">Guest Speaker: </span> {{talk.guest_speaker}}
         </div>

         <div v-for="(attendee, i) in attendees" :key="i">
             <b-card class="mt-3 shadow">
                <b-row>
                    <b-col> <small style="font-weight: bold">name</small>: {{attendee.first_name}} {{attendee.last_name}}</b-col>
                    <b-col> <small style="font-weight: bold"> Reason For Attending</small>: {{attendee.reason_for_attending}}</b-col>
                </b-row>
             </b-card>
         </div>


      </b-card>
      </div>

</template>

<script src="./talkAttendees.js"></script>
<style lang="scss" scoped>
  @import "talkAttendees";
</style>