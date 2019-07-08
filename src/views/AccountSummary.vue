<template>
  <v-layout row align-center>
    <v-flex xs12>
      <v-card>
        <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png"  height="300px"
        >
          <v-layout column fill-height>
            <v-card-title>
              <v-btn dark icon>
                <v-icon>chevron_left</v-icon>
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn dark icon class="mr-3" @click="editdetails=true">
                <v-icon>edit</v-icon>
              </v-btn>

              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>

            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">{{customername}}</div>
            </v-card-title>
          </v-layout>
        </v-img>

        <v-list two-line>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">cake</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{customerdetails.dob}}</v-list-tile-title>
              <v-list-tile-sub-title>DOB</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="editnumber('Mobile')">
            <v-list-tile-action>
              <v-icon color="indigo">phone</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{customerdetails.mobile}}</v-list-tile-title>
              <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>edit</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile @click="editnumber('Landline')">
            <v-list-tile-action></v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{customerdetails.landline}}</v-list-tile-title>
              <v-list-tile-sub-title>Landline</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>edit</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="editemail=true">
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{customerdetails.email}}</v-list-tile-title>
              <v-list-tile-sub-title>E=Mail</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>edit</v-icon>
            </v-list-tile-action>
          </v-list-tile>


          <v-divider inset></v-divider>

          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{customerdetails.addressline1}}</v-list-tile-title>
              <v-list-tile-sub-title>{{addressline2}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    
  <editdetails :dialog="editdetails" :details="customerdetails" @closed="editdetails=false"></editdetails>
  <editmobile :dialog="editmobile" 
    :currentnumber="number" 
    :numbertype="numbertype"
    @closed="editmobile=false" 
    @save="savemobile(event)"></editmobile>
  <editemail :dialog="editemail" :currentemail="customerdetails.email" @closed="editemail=false"></editemail>
  </v-layout>


</template>

<script>

import EditDetails from '../components/EditDetails.vue'
import EditMobile from '../components/EditMobile.vue'
import EditEMail from '../components/EditEMail.vue'

  export default {
    name:"AccountSummary",
    data(){
      return{
        editdetails:false,
        editmobile:false,
        editemail:false,
        customerdetails:{
          firstname:"Ali",
          surname:"Connors",
          dob:"07-07-2010",
          email:"aliconnors.example.com",
          mobile:"00000 0000000",
          landline:'00000 000000',
          addressline1: '28 Something Drive',
          postcode:'WNx xgg',
          city:'Wigan',
          county:'Greater Manchester',
          country:'UK'
        },
        numbertype:"landline"

      }
    },
    computed:{
      customername: function(){
        return `${this.customerdetails.firstname} ${this.customerdetails.surname}`
      },
      addressline2:function(){
        return `${this.customerdetails.city},${this.customerdetails.county},${this.customerdetails.country},${this.customerdetails.postcode}`
      },
      number:function(){
        if(this.numbertype=="Mobile")
          return this.customerdetails.mobile;
        else
          return this.customerdetails.landline
      }
    },
    methods:{
      editnumber(field)
      {
        this.numbertype=field;
        this.editmobile=true;
      },
      savemobile(event)
      {
        return event;
      }
    },
    components: {
      'editdetails' : EditDetails,
      'editmobile' : EditMobile,
      'editemail' : EditEMail
    }
  }
</script>
