<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span v-if="depositlimit==0" class="headline">Set a Deposit Limit</span>
          <span v-else class="headline">Create a limit of £{{depositlimit}} every {{depositperiod}} is in effect.</span>
        </v-card-title>
        <v-card-text>
          <span></span>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs6>
                <v-text-field label="Amount" required v-model="depositlimit" color="grey"></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-combobox v-model="depositperiod" :items="depositperiods" label="Select a time period"></v-combobox>
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
    data: () =>  ({
        depositlimit:0,
        depositperiod:null,
        depositperiods:[
          "1 Week",
          "2 Weeks",
          "3 Weeks",
          "4 Weeks",
          "8 weeks"
        ]
        }
      ),
    methods:{
      close(){
        this.$emit( 'closed', null )
      },
      save(){
        if(this.depositlimit != this.currentdepositlimit)
          this.$emit('save', {depositlimit:this.depositlimit, depositperiod:this.depositperiod})
        else
          this.close();
      },
    },
    props:[
      'currentdepositlimit',
      'currentdepositperiod',
      'dialog'
    ],
    created(){
      this.depositlimit == this.currentdepositlimit;
      this.depositperiod == this.currentdepositperiod
    }
  }
</script>

<style>

</style>
