<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Edit E-Mail</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="E-Mail*" required v-model="email" color="grey"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
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
      email:null
      }),
    methods:{
      close(){
        this.$emit( 'closed', null )
      },
      save(){
        if(this.email != this.currentemail)
          this.$emit('save', this.email)
        else
          close();
      },
    },
    props:[
      'dialog',
      'currentemail'
    ],
    created(){
      this.email=this.currentemail
    }
  }
</script>

<style>

</style>
