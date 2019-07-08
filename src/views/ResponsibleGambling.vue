<template>
  <v-layout row align-center>
    <v-flex xs12>
      <v-card>

      <v-img src="./AsianResponsible.jpg"  max-height="300px">
          <v-layout column fill-height>


            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-1 pt-5">
              <div class="display-1 pl-1 pt-2">Responsible Gambling</div>
            </v-card-title>
          </v-layout>
      </v-img>

        <v-list two-line>
          <v-list-tile @click="editdeposit=true">
            <v-list-tile-action>
              <v-icon color="indigo">vertical_align_bottom</v-icon>
            </v-list-tile-action>

            <v-list-tile-content v-if="customersettings.depositlimit.depositlimit == 0">
              <v-list-tile-title>Deposit Limit</v-list-tile-title>
              <v-list-tile-sub-title >You have no limit set.</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-content v-else>
              <v-list-tile-title>Deposit Limit Set</v-list-tile-title>
              <v-list-tile-sub-title>You may bet £{{customersettings.depositlimit.depositlimit}} in any {{customersettings.depositlimit.depositperiod}} </v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>edit</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          
          <v-divider inset></v-divider>

          <v-list-tile @click="editrealitycheck=true" >
            <v-list-tile-action>
              <v-icon color="indigo" v-if="customersettings.realitycheck.realitycheckperiod==0">alarm_off</v-icon>
              <v-icon color="red" v-else>alarm_on</v-icon>
            </v-list-tile-action>

            <v-list-tile-content v-if="customersettings.realitycheck.realitycheckperiod==0">
              <v-list-tile-title>Reality Check</v-list-tile-title>
              <v-list-tile-sub-title>Currently set to OFF.</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-content v-else>
              <v-list-tile-title>Reality Check ON</v-list-tile-title>
              <v-list-tile-sub-title>{{ customersettings.realitycheck.remainingtimeminutes }} minutes till next checkpoint.</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>edit</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="setsuspension=true">
            <v-list-tile-action>
              <v-icon color="indigo">person_add_disabled</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Temporary Suspension</v-list-tile-title>
              <v-list-tile-sub-title>No suspension active</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>edit</v-icon>
            </v-list-tile-action>
          </v-list-tile>


          <v-divider inset></v-divider>

          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">verified_user</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Self Exclusion</v-list-tile-title>
              <v-list-tile-sub-title>Account is not currently excluded.</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>edit</v-icon>
            </v-list-tile-action>
          </v-list-tile>


        </v-list>
      </v-card>
    </v-flex>
    
  <editdeposit :dialog="editdeposit" 
    :currentdepositlimit="customersettings.depositlimit.depositlimit" 
    :currentdepositperiod="customersettings.depositlimit.depositperiod" 
    @closed="editdeposit=false"
    @save ="updatedepositlimit"></editdeposit>

    <editrealitycheck :dialog="editrealitycheck" 
    :remainingtimeminutes="customersettings.realitycheck.remainingtimeminutes" 
    :currentrealitycheck="customersettings.realitycheck.realitycheckperiod" 
    @closed="editrealitycheck=false"
    @save ="updaterealitycheck"></editrealitycheck>

    <setsuspension :dialog="setsuspension" 
    :currentstartdate="customersettings.suspension.startdate" 
    :currentsuspension="customersettings.suspension.suspension" 
    @closed="setsuspension=false"
    @save ="setsuspensionvalues"></setsuspension>
  </v-layout>


</template>
<script>

import EditDeposit from '../components/EditDepositLimit.vue'
import EditRealityCheck from '../components/EditRealityCheck.vue'
import SetSuspension from '../components/SetSuspension.vue'

  export default {
    name:"AccountSummary",
    data(){
      return{
        setsuspension:false,
        editdeposit:false,
        editrealitycheck:false,
        editemail:false,
        customersettings:{
          depositlimit:{
            depositlimit:0,
            depositperiod:null
          },
          realitycheck:{
            realitycheckperiod: 0,
            remainingtimeminutes: 0
          },
          suspension:{
            startdate: null,
            suspension:0
          }

        },

      }
    },
    computed:{
    },
    methods:{
      updatedepositlimit(value)
      {
        this.customersettings.depositlimit.depositlimit = value.depositlimit;
        this.customersettings.depositlimit.depositperiod = value.depositperiod;
        this.editdeposit=false;
      },
      updaterealitycheck(value)
      {
        this.customersettings.realitycheck.remainingtimeminutes = value.remainingtimeminutes;
        this.customersettings.realitycheck.realitycheckperiod = value.realitycheck;
        this.editrealitycheck=false        
      },
      setsuspensionvalues(value)
      {
        this.customersettings.suspension.suspension = value.suspension;
        this.customersettings.suspension.startdate = value.startdate;
        this.setsuspension=false        
      }
    },
    components: {
      'editdeposit' : EditDeposit,
      'editrealitycheck' : EditRealityCheck,
      'setsuspension' : SetSuspension
    
    }
  }
</script>
