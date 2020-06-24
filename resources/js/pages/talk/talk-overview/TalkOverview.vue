<template>
    <div class="container">
      <div class="d-flex justify-content-between">
     <h3 class="ml-2 pt-5">All Talks</h3>
      <router-link :to="{ name: 'add-talk' }">
      <b-button class="top-b mt-5" >create talk</b-button>
      </router-link>
      </div>
     
          <b-row class="mt-4 table-head pl-3 ml-4 col-offset-1">
            <b-col cols="1">
              <p>#</p>
            </b-col>
            
            <b-col cols="2">
                <p>Host</p>
            </b-col>

            <b-col cols="2">
                <p>Guest Speaker</p>
            </b-col>

            <b-col cols="2">
                <p>Theme</p>
            </b-col>

            <b-col cols="2">
                <p>Date</p>
            </b-col>

            <b-col cols="1">
                <p>Actions</p>
            </b-col>
          </b-row>

         <div class="container" v-if="talks">
           <b-card class="mt-2 text-center" v-for="(talk, i) in talks" :key="i">
              <b-row class="ml-2">
                   <b-col cols="1">
                     {{i+1}}
                   </b-col>

                   <b-col cols="2">
                            <span class="bottom-tag"> <small>{{talk.host}}</small> </span>
                       </b-col>

                   <b-col cols="2">
                      <!-- <span class="top-tag"> NOK <b-badge class="badge_adj">New</b-badge></span> <br> -->
                      <span class="bottom-tag"> <small>{{talk.guest_speaker}}</small> </span>
                   </b-col>

                   <b-col cols="2">
                      <span class="bottom-tag"> <small>{{talk.theme}}</small> </span>
                   </b-col>

                   <b-col cols="2">
                      <span class="bottom-tag"> <small>{{talk.start_time}}</small> </span>
                   </b-col>

                    <b-col cols="1">
                      <b-row class="mt-2">
                        <b-col  @click="deleteTalk(talk.id, talk.theme)">
                          <!-- <img src="../../assets/delete.png" alt=""> --> 
                          <span id="delete" class="fa fa-trash-o"></span>
                        </b-col>
                        <b-tooltip target="delete" triggers="hover">
                          Delete Talk
                        </b-tooltip>
                      </b-row>
                   </b-col>


              </b-row>
          </b-card>
         </div>
          
          <div v-if="talks.length === 0">
           <b-card class="text-center mt-4">
                There are no talk available, Please create one by clicking the link above
           </b-card>
         </div>
   
    </div>
</template>

<script src="./talkOverview.js"></script>
<style lang="scss" scoped>
  @import "talkOverview";
</style>