<template>

<v-layout row>
  <v-flex xs12>
          <v-card>
        <v-img src="./Race.jpg"  max-height="300px">
          <v-layout column fill-height>


            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-1 pt-5">
              <div class="display-1 pl-1 pt-2 white--text transblack">Bet History</div>
            </v-card-title>
          </v-layout>
      </v-img>


        <v-list two-line flat>
          
            <v-subheader v-if="closedBetCount.length == 0">
              No Bet History
            </v-subheader>

            <template v-for="(bet, index) in getClosedBets">
              <v-expansion-panel :key="`panelbetslip${index}`">
                <v-expansion-panel-content class="success">
                  <template slot="header">
                    <v-list-tile :class="getresultcolor(bet.result)" :key="`betslip${index}`" avatar>
                      <v-list-tile-avatar>
                        <v-avatar color="indigo">
                          <span class="white--text">{{bet.betCode[0]}}</span>
                        </v-avatar>
                      </v-list-tile-avatar>

                      <v-list-tile-content>
                        <v-list-tile-title class="caption" >{{bet.betCode}} @ {{bet.course}}</v-list-tile-title>
                        <v-list-tile-sub-title>{{bet.result}}
                          <template v-if="bet.result=='WIN'">( returns £{{bet.winnings}})</template>
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                    
                    </v-list-tile>
                  </template>

                  <placepotbet v-if="bet.betCode=='PlacePot'" :bet="bet"></placepotbet>


              </v-expansion-panel-content>           
            </v-expansion-panel>
            <v-divider :key="`dividerbetslip${index}`"></v-divider>
            
            </template>
        </v-list>
        <template>
          <v-btn v-if="closedBetCount.length > 0" block color="success" dark @click="placebets">Place</v-btn>
        </template>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

import { mapGetters } from 'vuex';

import PlacePotBet from '../components/PlacepotBet.vue'

  export default {
    name:"BetHistory",
    data () {
      return {

      }
    },
    components:{
      'placepotbet': PlacePotBet
    },
    computed:{
      ...mapGetters([ 'closedBetCount', 'getClosedBets' ]),
    },
    methods: {
      getresultcolor(result){
        if (result == "WIN")
          return "success"
        else 
          return "error"
      }
    }
  }
</script>
<style>
.v-expansion-panel__header{
  padding: 0px;
}
.transblack{
  background:rgba(0,0,0,0.5);
}
</style>
