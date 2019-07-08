<template>

<v-layout row wrap>
  <v-flex xs12>
          <v-card>
        <v-img src="./HongKong.jpg"  max-height="300px">
          <v-layout column fill-height>


            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-1 pt-5">
              <div class="display-1 pl-1 pt-2">Open Bets</div>
            </v-card-title>
          </v-layout>
      </v-img>


        <v-list two-line flat>
          
            <v-subheader v-if="openBetCount.length == 0">
              No Open Bets
            </v-subheader>

            <template v-for="(bet, index) in getOpenBets">
              <v-expansion-panel class="white" :key="`panelbetslip${index}`">
                <v-expansion-panel-content hide-actions>
                  <template slot="header">
                    <v-list-tile color="white" :key="`betslip${index}`" avatar >
                      <v-list-tile-avatar>
                        <v-avatar color="indigo">
                          <span class="white--text">{{bet.betCode[0]}}</span>
                        </v-avatar>
                      </v-list-tile-avatar>

                      <v-list-tile-content>
                        <v-list-tile-title class="caption" >{{bet.betCode}} @ {{bet.course}}</v-list-tile-title>
                        <v-list-tile-sub-title>{{`${bet.lines} lines(s) @ £${bet.unitStake}`}}</v-list-tile-sub-title>
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
          <v-btn v-if="openBetCount.length > 0" block color="success" dark @click="placebets">Place</v-btn>
        </template>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

import PlacePotBet from '../components/PlacepotBet.vue'

  export default {
    name:"OpenBets",
    data () {
      return {

        
      }
    },
    components:{
      'placepotbet': PlacePotBet
    },
    computed:{
      ...mapGetters([ 'openBetCount', 'getOpenBets' ]),
    },
    methods: {
      ...mapActions([ 'removeBet', 'placeBet', 'debit' ]),

      
    }
  }
</script>
<style>
.v-expansion-panel__header{
  padding: 0px;
}
</style>
