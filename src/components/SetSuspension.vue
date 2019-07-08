<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Set Temporary Suspension</span>
        </v-card-title>
        <v-card-text>
          <span></span>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-combobox v-model="suspension" :items="suspensionlookup" label="Select a suspension period in days"></v-combobox>
              </v-flex>
            </v-layout>
          </v-container>
          <small> </small>
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
      suspension: 0,
      suspensionlookup:[
        0,
        1,
        7,
        28
      ]
      }),
    computed:{
    },
    methods:{
      close(){
        this.$emit( 'closed', null )
      },
      save(){
        if(this.suspension != this.currentsuspension)
        {
          var today = new Date();
          this.$emit('save', { suspension: this.suspension, startdate: today  })
        }
        else
          this.close();
      },
    },
    props:[
      'currentstartdate',
      'currentsuspension',
      'dialog'
    ],
    created(){
      this.suspension == this.currentsuspension;
    }
  }
</script>

<style>

</style>
