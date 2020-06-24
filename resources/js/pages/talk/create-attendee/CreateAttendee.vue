<template>
    <div>
      <b-card class="card_adj">  
        <!-- {{editing}} -->
       <h3 v-if="editing === true">Edit Employee</h3>
       <h3 v-else>Create Attendee</h3>
       <hr>
       <div class="mt-2 " >
          <b-form @submit.prevent="createAttendee">
                <b-form-group
                  id="input-group-1"
                  label="First Name:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    type="text"
                    v-model="attendee.first_name"
                    required
                    placeholder="Enter first name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Last Name :" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    type="text"
                    v-model="attendee.last_name"
                    required
                    placeholder="Enter Last Name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Address:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="attendee.address"
                    required
                    type="text"
                    placeholder="Enter Address"
                  ></b-form-input>
                </b-form-group>


                <b-form-group id="input-group-2" label="phone:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="attendee.phone"
                    required
                    type="number"
                    placeholder="Enter phone number"
                  ></b-form-input>
                </b-form-group>


                <b-form-group id="input-group-2" label="Job Title:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="attendee.job_title"
                    required
                    type="text"
                    placeholder="Enter Job Title"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Reason For Attending:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="attendee.reason_for_attending"
                    required
                    type="text"
                    placeholder="Enter Reason For Attending"
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

<script src="./createAttendee.js"></script>
<style lang="scss" scoped>
  @import "createAttendee";
</style>