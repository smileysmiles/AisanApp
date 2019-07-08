<template>

<v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line flat>
          
            <v-subheader v-if="bets.length == 0">
              No bets in your betslip
            </v-subheader>

            <template v-for="(bet, index) in bets">
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
                    
                      <v-list-tile-action :key="`betslip${index}`">
                        <v-icon @click='removeBet(bet.toteBetID)' large>close</v-icon>
                      </v-list-tile-action>
                    </v-list-tile>
                  </template>

                  <placepotbet v-if="bet.betCode=='PlacePot'" :bet="bet"></placepotbet>


              </v-expansion-panel-content>           
            </v-expansion-panel>
            <v-divider :key="`dividerbetslip${index}`"></v-divider>
            
            </template>
        </v-list>
        <template>
          <v-btn v-if="bets.length > 0" block color="success" dark @click="placebets">Place</v-btn>
        </template>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

import PlacePotBet from '../components/PlacepotBet.vue'

  export default {
    name:"Betslip",
    data () {
      return {
        rules:{
          minstake: value => value >= 0.1 || "Minimum bet is £0.10",
          mintotalstake: value => value >= 2 || "Minimum Total Stake is £2.00",
          maxtotalstake: value => value <= 100000 || "Maximum Total Stake is £100,000"
        },
        
      }
    },
    components:{
      'placepotbet': PlacePotBet
    },
    computed:{
      ...mapGetters([ 'betCount', 'getBets' ]),
      bets:function(){
        return this.getBets;
      }
    },
    methods: {
      ...mapActions([ 'removeBet', 'placeBet', 'debit' ]),
      legSelections(bet, index)
      {
        let selections = bet.selections.filter( selection => selection.leg == index);
        return selections;
      },
      legTime(bet, index)
      {
        let selection = bet.selections.find( selection => selection.leg == index);
        return selection.raceTime
      },
      placebets(){
        //This should really be server side but for DEMO
          let bet = this.bets[0];
          this.placeBet(bet);
          this.debit({amount:bet.totalStake})
          this.removeBet(bet.toteBetID);
      }
      
    }
  }
</script>
<style>
.v-expansion-panel__header{
  padding: 0px;
}
</style>
