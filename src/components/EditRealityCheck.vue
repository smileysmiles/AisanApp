<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Set Reality Check</span>
        </v-card-title>
        <v-card-text>
          <span></span>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-combobox v-model="realitycheck" :items="realitychecklookup" label="Select a reminder period in Hours"></v-combobox>
              </v-flex>
            </v-layout>
          </v-container>
          <small>Choose an amount and the period</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="close()">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="save()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  
  export default{
    data: () => ({
      realitycheck: 0,
      realitychecklookup:[
        0,
        1,
        2,
        4,
        8
      ]
      }),
    computed:{
    },
    methods:{
      close(){
        this.$emit( 'closed', null )
      },
      save(){
        if(this.realitycheck != this.currentrealitycheck)
        {
          this.$emit('save', { realitycheck: this.realitycheck, remainingtimeminutes: this.currentrealitycheck==0 ? (this.realitycheck*60) : this.remainingtimeminutes })
        }
        else
          this.close();
      },
    },
    props:[
      'remainingtimeminutes',
      'currentrealitycheck',
      'dialog'
    ],
    created(){
      this.realitycheck == this.currentrealitycheck;
    }
  }
</script>

<style>

</style>
