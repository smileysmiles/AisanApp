<template>
  <v-container class="pa-0">
    <v-layout text-xs-center wrap>
        <v-snackbar v-model="snackbar" :timeout="timeout" top vertical color="success">
          Verification Successful
        </v-snackbar>
      <v-flex xs12>

                <!-- <v-card color="primary" dark>
          <v-card-title>
            <v-icon
              large
              left
              color="accent"
            >
              settings_cell
            </v-icon>
            <span class="headline">Contact Preferences</span>
            </v-card-title>
          <v-checkbox class="mx-4" right label="I would like to recieve offers and communications from x"></v-checkbox>
          <v-checkbox  class="mx-4" label="I allow my customer profile to be used by x to provide me with relevent offers and communications"></v-checkbox>
        </v-card> -->

<!-- 
        <amplify-authenticator v-if="!isAuthenticated"></amplify-authenticator>
         <amplify-sign-out v-if="isAuthenticated"></amplify-sign-out>  -->
        <!-- <amplify-set-mfa></amplify-set-mfa>
        <amplify-confirm-sign-in></amplify-confirm-sign-in> -->
        <div class="frame-container">
            <iframe  src="http://localhost:8080" style="border: none;" :height="innerheight -112" width="100%" ></iframe>
        </div>

        <template v-if="isAuthenticated && !getCustomerDetails">
          <v-stepper  dark v-model="e1" vertical class="primary darken-1 rounded-card">


              <v-stepper-items>
                <v-stepper-step class="indigo--text text--darken-4" color="accent" :complete="e1 > 1" step="1"><span>Customer Details</span></v-stepper-step>  
                <v-stepper-content step="1">
                  <v-card
                    class="mb-5 rounded-card"
                    color="white lighten-1"
                    light
                  >
                  <form class="pa-3 indigo--text text--darken-4">
                    <v-container >
                      <v-layout row wrap light>
                      
                      <v-flex xs12 md2 pa-1>
                        <v-select
                          v-model="title"
                          v-validate="'required'"
                          :items="items"
                          :error-messages="errors.collect('title')"
                          label="Title"
                          data-vv-name="title"
                          required
                        ></v-select>
                      </v-flex>
                      <v-flex xs12 md5 pa-1>
                        <v-text-field
                          v-model="firstname"
                          v-validate="'required'"
                          :error-messages="errors.collect('firstname')"
                          label="First Name"
                          data-vv-name="firstname"
                          required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md5 pa-1>
                        <v-text-field
                          v-model="surname"
                          v-validate="'required'"
                          :error-messages="errors.collect('surname')"
                          label="Last Name"
                          data-vv-name="surname"
                          required
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12 md6 pa-1>
                        <v-text-field
                          v-model="address1"
                          v-validate="'required'"
                          :error-messages="errors.collect('address1')"
                          label="Address Line 1"
                          data-vv-name="address1"
                          required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md2 pa-1>
                        <v-text-field
                          v-model="postcode"
                          v-validate="'required'"
                          :error-messages="errors.collect('postcode')"
                          label="Postcode"
                          data-vv-name="postcode"
                          required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md4 pa-1>
                        <v-text-field
                          v-model="city"
                          v-validate="'required'"
                          :error-messages="errors.collect('city')"
                          label="City / Area"
                          data-vv-name="city"
                          required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md6 pa-1>
                        <v-text-field
                          v-model="county"
                          v-validate="'required'"
                          :error-messages="errors.collect('county')"
                          label="County"
                          data-vv-name="county"
                          required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md6 pa-1>
                        <v-select
                          v-model="country"
                          v-validate="'required'"
                          :items="countryitems"
                          :error-messages="errors.collect('country')"
                          label="Country"
                          data-vv-name="country"
                          required
                        ></v-select>
                      </v-flex>
                      <v-flex xs12 md6 pa-1>
                        <v-text-field
                          v-model="mobile"
                          v-validate="'required'"
                          :error-messages="errors.collect('mobile')"
                          label="Mobile"
                          data-vv-name="mobile"
                          required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md6 pa-1>
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
                       
                      
                      </v-layout>
                    </v-container>
                    </form>
                  </v-card>

                  <v-btn
                    color="accent"
                    @click="e1 = 2"
                    class="rounded-button"
                  >
                    Continue
                  </v-btn>

                  <v-btn flat>Cancel</v-btn>
                </v-stepper-content>
                <v-stepper-step color="accent"  :complete="e1 > 2" step="2">2. Complete Customer Verification</v-stepper-step>
                <v-stepper-content step="2">
                  <v-btn v-if="!failure" color="accent" @click="completekyc" class="rounded-button" >
                    Verify
                  </v-btn>
                  <v-alert :value="failure" type="error">
                    Verification Failed please try again later or call customer support on nnnnnnnnnnnn.
                  </v-alert>
                </v-stepper-content>
                <v-stepper-step class="indigo--text text--darken-4" color="accent" :complete="e1 > 3" step="3">3. Setup Payment Method</v-stepper-step>
                <v-stepper-content step="3">
                  <v-card
                    class="mb-5 primary darken-1"
                    dark
                    flat
                  >
                  <v-card-title >Please select an amount for initial deposit.</v-card-title>
                  <!-- <v-slider v-model="fruits" :tick-labels="ticksLabels" :max="100" thumb-label="always" step="10" ticks="always" tick-size="1" class="px-4"></v-slider>
                  
                  <v-text-field
                          v-model="fruits"
                          v-validate="'required'"
                          :error-messages="errors.collect('fruits')"
                          label="Deposit Amount"
                          data-vv-name="fruits"
                          required
                          class="ma-4"
                        ></v-text-field> -->
                  
                    <v-btn fab dark large color="accent">
                      £5
                    </v-btn>
                    <v-btn fab dark large @click="e1 = 4" color="accent">
                      £10
                    </v-btn>
                    <v-btn fab dark large @click="e1 = 4" color="accent">
                      £25
                    </v-btn>
                    <v-btn fab dark large @click="e1 = 4" color="accent">
                      £50
                    </v-btn>
                    <v-btn fab dark large @click="e1 = 4" color="accent">
                      £100
                    </v-btn>

                  </v-card>

                  <v-btn color="accent" flat>Cancel</v-btn>
                </v-stepper-content>
                
                <v-stepper-step color="accent" :complete="e1 > 4" step="4">4. Congratulations</v-stepper-step>
                <v-stepper-content step="4">
                  <v-card
                    class="mb-5 primary darken-1"
                    dark
                    flat
                  >
                  <v-card-title >Congratulations you are now ready to place bets.</v-card-title>
                  </v-card>

                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { AmplifyEventBus } from 'aws-amplify-vue';
  import Auth from '@aws-amplify/auth'

  

  export default {
     $_veeValidate: {
      validator: 'new'
    },
    name: 'Authentication',
    data: vm => ({
      timeout:20000,
      failure:false,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0,10)),
      dob: null,
      user: null,
      e1:0,
      firstname: '',
      surname: '',
      email: '',
      address1: '',
      postcode: '',
      city:'',
      county:'',
      country:'',
      mobile:'',
      title: null,
      snackbar:false,
      items: [
        'Dr',
        'Mr',
        'Mrs',
        'Ms',
        'Miss'
      ],
      countryitems: [
        'United Kingdom',
        'United States',
      ],
      
      menu1: false,
      checkbox: null,
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => '*',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      },
      value: 0,
        fruits: 0,
        ticksLabels: [
          '0',
          '10',
          '20',
          '30',
          '40',
          '50',
          '60',
          '70',
          '80',
          '90',
          '100',
        ],
        alert: true,
        registration: false,
        windowheight: window.height
    }),
    computed: {
      ...mapGetters([ 'getLoggedInUser', 'isAuthenticated', 'getCustomerDetails' ]),  
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
      innerheight(){
        return this.windowheight;
      }
      
    },
    methods:{
      ...mapActions([ 'signIn', 'signOut', 'fetchCustomerDetails' ]),
      dismissalert(){
        this.alert = false;
      },
      completekyc(){
        this.snackbar = true;
        this.e1 = 3;
      },
      completedetails(){

      },
      async findUser(){
        try{
          const user = await Auth.currentAuthenticatedUser();
          if(user)
          {
            this.signIn( user );
            const customerDetails = this.fetchCustomerDetails(user.attributes.sub);
            if(!customerDetails && this.alert)
              return true
            else
              return false
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
      }
    },
    watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date);
      },

    },
    mounted(){
      this.findUser();

      this.$nextTick(() =>{
        window.addEventListener('resize',() => {
          this.windowheight = window.innerHeight;
        })
          this.windowheight = window.innerHeight;
      })


      // this.$validator.localize('en', this.dictionary)

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

.v-stepper--vertical .v-stepper__step{
  padding: 12px 12px 8px
}

.v-stepper--vertical .v-stepper__content{
  margin: -4px -18px -8px 18px;
  padding: 16px 35px 16px 13px
}


</style>
