<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <amplify-authenticator></amplify-authenticator>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { AmplifyEventBus } from 'aws-amplify-vue';
  import Auth from '@aws-amplify/auth'

  export default {
    name: 'Signin',
    data(){
      return {}
    },
    computed: {
      ...mapGetters([ 'getLoggedInUser', 'isAuthenticated', 'getCustomerDetails' ]),  
      computedDateFormatted () {
        return this.formatDate(this.date)
      }  
    },
    methods:{
      ...mapActions([ 'signIn', 'signOut', 'fetchCustomerDetails' ]),
      
      async findUser(){
        try{
          const user = await Auth.currentAuthenticatedUser();
          if(user)
          {
            this.signIn( user );
            this.fetchCustomerDetails(user.attributes.sub);
          }
        }
        catch{
          this.signOut();
        }
      },
      async loggedOut(){
          this.signOut();
      },
      async processNewSignUp(){
        this.isNewSignUp = true;
      },
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
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
    watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date);
      }
    },
    mounted(){
      this.findUser();
      AmplifyEventBus.$on('authState', info => {
        switch(info)
        {
          case "signedIn":
            this.findUser();
            break;
          default:
            this.loggedOut();   
            break;
        }
      })

    }
  }
</script>

<style>
.rounded-card{
    border-radius:5px;
}

.rounded-button{
  border-radius:5px;
}
</style>
