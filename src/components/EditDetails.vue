<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
             firstname:"Ali",
          surname:"Connors",
          email:"aliconnors.example.com",
          mobile:"00000 0000000",
          landline:'00000 000000',
          addressline1: '28 Something Drive',
          postcode:'WNx xgg',
          city:'Wigan',
          county:'Greater Manchester',
          country:'UK'
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Fristname*" disabled v-model="details.firstname" color="grey"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Lastname*"
                  hint="example of persistent helper text"
                  disabled v-model="details.surname"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required v-model="details.email"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                  <v-menu
                          ref="menu1"
                          v-model="menu1"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          lazy
                          transition="scale-transition"
                          offset-y
                          full-width
                          max-width="290px"
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="dateFormatted"
                              label="Date Of Birth"
                              hint="DD/MM/YYYY format"
                              persistent-hint
                              prepend-icon="event"
                              @blur="date = parseDate(dateFormatted)"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                        </v-menu>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
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
    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0,10)),
       menu1: false,
      }),
    methods:{
      close(){
        this.$emit( 'closed', null )
      },
      save(){
        this.$emit('detailsupdated', 'someValue')
      },
      parseDate (date) {
        if (!date) return null
        const [day, month, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
      },
    },
    props:[
      'dialog',
      'details'
    ]
  }
</script>

<style>

</style>
