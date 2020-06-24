<template>
    <div>
      <b-card class="card_adj">  
        <!-- {{editing}} -->
       <h3 v-if="editing === true">Edit Employee</h3>
       <h3 v-else>Create Talk</h3>
       <hr>
       <div class="mt-2" >
          <b-form @submit.prevent="createTalk">

             <div>
                  <label class="typo__label">Select Attendee</label>
                  <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="you can select more than one attendee" label="first_name" track-by="first_name" :preselect-first="true">
                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} attendees selected</span></template>
                  </multiselect>
                  <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
              </div>

                <b-form-group
                  id="input-group-1"
                  label="Host:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="talk.host"
                    type="text"
                    required
                    placeholder="Enter Host"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Guest Speaker:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="talk.guest_speaker"
                    type="text"
                    required
                    placeholder="Enter Guest Speaker"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Theme:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="talk.theme"
                    required
                    type="text"
                    placeholder="Enter Theme"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Date Of Event:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="talk.start_time"
                    required
                    type="date"
                  ></b-form-input>
                </b-form-group>

                
                <!-- <b-button @click="updateEmployee" v-if="editing === true" variant="primary">Update</b-button> -->
                <b-button type="submit" >Create</b-button>
                
                <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
              </b-form>
       </div>
    
      </b-card>
    
    </div>
</template>

<script src="./editTalk.js"></script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
  @import "editTalk";
</style>