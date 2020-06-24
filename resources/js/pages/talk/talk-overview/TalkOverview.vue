<template>
    <div class="container">
      <router-link :to="{ name: 'add-talk' }">
      <b-button class="top-b" >add talk</b-button>
      </router-link>
          <!-- <pre>{{employees}}</pre> -->
          <b-row class="mt-4 table-head pl-3 ml-4">
            <b-col cols="1">
              <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
              >
              <!-- value="accepted" -->
                <!-- unchecked-value="not_accepted" -->
                </b-form-checkbox>
            </b-col>
            
            <b-col cols="3">
                <p>Host</p>
            </b-col>

            <b-col cols="3">
                <p>Guest Speaker</p>
            </b-col>

            <b-col cols="2">
                <p>Theme</p>
            </b-col>

            <b-col cols="3">
                <p>Date</p>
            </b-col>

            <!-- <b-col cols="3">
                <p>Actions</p>
            </b-col> -->
          </b-row>
         
         <!-- <div v-if="!employees">
           <b-card>
                There are no employees, Please create one by clicking the link above
           </b-card>
         </div> -->
         <div>
           <b-card class="mt-2" v-for="(talk, i) in talks" :key="i">
              <b-row>
                   <b-col cols="1">
                     {{i+1}}
                   </b-col>

                   <b-col cols="3">
                       <b-row>
                         <b-col cols="3">
                           <!-- <img src="../../assets/profile.png" alt=""> -->
                         </b-col>
                         <b-col cols="9">
                            <span class="top-tag"></span> <br>
                            <span class="bottom-tag"> <small>{{talk.host}}</small> </span>
                         </b-col>
                       </b-row>
                   </b-col>

                   <b-col cols="3">
                      <span class="top-tag"> NOK <b-badge class="badge_adj">New</b-badge></span> <br>
                      <span class="bottom-tag"> <small>{{talk.guest_speaker}}</small> </span>
                   </b-col>

                   <b-col cols="2">
                      <span class="bottom-tag"> <small>{{talk.theme}}</small> </span>
                   </b-col>

                    <b-col cols="2">
                      <b-row class="mt-2">
                        <b-col   style="border-right: 1px solid #dcdcdc">
                          <span id="edit" class="fa fa-pencil"></span>
                        </b-col>

                        <b-tooltip target="edit" triggers="hover">
                          Edit Employee
                        </b-tooltip>

                        <b-col  >
                          <!-- <img src="../../assets/delete.png" alt=""> --> 
                          <span id="delete" class="fa fa-trash-o"></span>
                        </b-col>
                        <b-tooltip target="delete" triggers="hover">
                          Delete Employee
                        </b-tooltip>
                      </b-row>
                   </b-col>


              </b-row>
          </b-card>
         </div>
          
   
    </div>
</template>

<script src="./talkOverview.js"></script>
<style lang="scss" scoped>
  @import "talkOverview";
</style>