<template>
  <v-card class="headline">
    <v-card-title pb-1 class="primary" >
      <span class="cyan--text text--lighten-4">tote</span>
      <span class="cyan--text text--lighten-1">PlacePot</span>
      <span class="accent--text px-2 text--lighten-1">@</span>
      <span class="white--text ">{{bet.course}}</span>
      
    </v-card-title>
    <v-card-text pb-1>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 md6 d-flex>
                    <v-layout row wrap align-center justify-space-around >
                    <v-flex xs1 md2>
                        <span>{{bet.lines}}</span>
                    </v-flex>
                    <v-flex xs1 md2>
                        <span>X</span>
                    </v-flex>
                    <v-flex xs4 md4 class="accent--text">
                        <v-text-field
                            class="accent--text"
                            readonly
                            :value="bet.unitStake"
                            label="Unit stake"
                            prefix="£"
                            type="number"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs2 md1></v-flex>
                    <v-flex xs4 md3>
                        <v-text-field
                          class="accent--text"
                            :value="bet.totalStake"
                            label="Total stake"
                            prefix="£"
                            type="number"
                            readonly
                        ></v-text-field>
                    </v-flex>
                    </v-layout>
                </v-flex> 
            </v-layout>
        </v-container>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 md6 d-flex v-for="index in 6" :key="`leg_${index}`">
                    <v-layout row wrap>
                            <v-flex xs12 sm12 md12>
                                <span class="secondary--text">LEG {{ index }} :</span>
                                <span class="accent--text body-2 pl-2"> ({{legTime(bet, index)}})</span>
                            </v-flex>
                              <v-flex xs12 sm12 md12 v-for="selection in legSelections(bet, index)" :key="selection.UID">                          
                                  <v-layout row wrap>
                                      <v-flex xs1>
                                      </v-flex>
                                      <v-flex xs2 class="caption">
                                          ({{selection.horseNumber}})
                                      </v-flex>
                                      <v-flex xs6 class="body-1">
                                          {{selection.horse}}
                                      </v-flex>                                                         
                                  </v-layout>
                              </v-flex>

                    </v-layout>
                </v-flex>
                
            </v-layout>
        </v-container>
    </v-card-text>
  </v-card>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'PlacepotBet',
    data: () => ({
      
    }),
    props:[
      'bet'
    ],
    computed: {
      ...mapGetters([  ]),
      
     
    },
    methods:{
      ...mapActions([  ]),
      legTime(bet, index)
      {
        let selection = bet.selections.find( selection => selection.leg == index);
        return selection.raceTime
      },
      legSelections(bet, index)
      {
        let selections = bet.selections.filter( selection => selection.leg == index);
        return selections;
      },
      
    },
    mounted(){


    }
  }
</script>

<style>

</style>
