<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
            <v-img src="./Deposit.jpg"  max-height="200px">
          <v-layout column fill-height>


            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-1 pt-5">
              <div class="display-1 pl-1 pt-2">Deposit</div>
            </v-card-title>
          </v-layout>
      </v-img>
    
      <v-flex xs12>
        <div class="primary--text subheading ml-2">1. Choose your amount</div>
      </v-flex>
      <v-flex xs5 md4 v-for="(n, index) in amounts" :key="n" class="text-xs-center">
        <div>
        <v-chip :color="chipcolor(index)" :class="textcolor(index)" class="title pa-1" @click="selectedindex=index">
          £{{ n }}
        </v-chip>
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="primary--text subheading  ml-2">2. Checkout Using PayPal</div>
      </v-flex>
      <v-flex xs12 class="text-xs-center mt-3">
        <PayPal :amount="amount" currency="GBP" :client="paypal" env="sandbox"
          @payment-authorized="authorized"
          @payment-completed="completed"
          @payment-cancelled="cancelled"></PayPal>
      </v-flex>
      <v-flex xs12>
        <div class="primary--text subheading  ml-2">3. Enjoy</div>
      </v-flex>
      </v-card>
    </v-flex>
    </v-layout>
</template>

<script>
  import { mapActions } from 'vuex';
  import PayPal from 'vue-paypal-checkout'

  export default {
    name:"Deposit",
    data() {
      return {
        amounts:[
          5,
          10,
          20,
          50,
          100,
          200
        ],
        selectedindex:2,
        paypal: {
          sandbox: 'AVbeHn3iJDSztOQpIOTY6b_26dvopA-5OPAhh9PxBzOXdPy6v7FwnXTIKLTrDprg6Hcq43AU6s1cgqaq',
          production: ''
        },
        creditsuccess: false
      }
    },
    computed:{
      amount(){
        return this.amounts[this.selectedindex].toString();
      }
    },
    methods:{
      ...mapActions([ 'deposit' ]),
      chipcolor( index ){
        if( index == this.selectedindex)
          return "accent"
        else
          return "primary"
      },
      textcolor( index ){
        if( index == this.selectedindex)
          return "primary--text"
        else
          return "white--text"
      },
      authorized(data){
        if (data)
          this.creditsuccess = true;
      },
      completed(data){
        if(data)
        {
          this.creditsuccess = true;
          let value = parseFloat(this.amount);
          this.deposit({amount:value});
        }
      },
      cancelled(){
          this.creditsuccess = false;
      }
    },
    components:{
      PayPal
    }
  }
</script>
<style scoped>
</style>
