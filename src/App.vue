<template>
  <v-app>
    <div>
        <v-toolbar flat app light color="white" clipped-left>
            <v-toolbar-side-icon color="primary lighten-1" class="white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase font-weight-medium headline pl-2">
                <span class="primary--text">Asian</span>
                <span class="accent--text">App</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="text-xs-center" v-if="isAuthenticated">
              <v-chip color="accent lighten-1" class="white--text">£{{balance}}</v-chip>
            </div>
            <v-btn icon color="primary lighten-1" @click="logout">
                <v-icon color="white">exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

<v-navigation-drawer class="white darken-3" light clipped app v-model="drawer">
  <v-card color="white" flat class="pa-1">
    <v-card-title class="primary white--text darken--3">POOLS</v-card-title>
      <v-card-text color="white">
      <v-list class="pa-0">
          <v-list-tile v-for="item in poolsitems" :key="item.title" :to="item.link">
            <v-list-tile-action>
              <v-icon color="primary">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="primary--text">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-card-text>
  </v-card>
  <v-card color="white" flat class="pa-1">
    <v-card-title class="primary white--text darken--3">
      <span>ACCOUNT</span>
    </v-card-title>
      <v-card-text color="white">
      <v-list class="pa-0">
                <v-list-tile >
            <v-list-tile-action>
              <v-icon color="primary">account_balance_wallet</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="primary--text">£{{balance}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for="item in accountitems" :key="item.title" :to="item.link">
            <v-list-tile-action>
              <v-icon color="primary">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="primary--text">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-card-text>
  </v-card>
  <v-card  color="white" flat class="pa-1">
      <v-card-title class="primary white--text darken--3">BET HISTORY</v-card-title>
      <v-card-text color="white">
      <v-list class="pa-0">

          <v-list-tile v-for="item in historyitems" :key="item.title"  :to="item.link">
            <v-list-tile-action>
              <v-icon color="primary">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="primary--text">{{ item.title }}
                <template v-if="item.title=='Open Bets'">({{openBetCount}})</template>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-card-text>
  </v-card>
  <v-card  color="white" flat class="pa-1">
      <v-card-title class="primary white--text darken--3">WALLET</v-card-title>
      <v-card-text color="white">
      <v-list class="pa-0">
          <v-list-tile v-for="item in walletitems" :key="item.title"  :to="item.link">
            <v-list-tile-action>
              <v-icon color="primary">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="primary--text">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-card-text>
  </v-card>


   
  </v-navigation-drawer>

</div>
    <v-content>
      <Signin v-if="!isAuthenticated"></Signin>
      <router-view v-if="isAuthenticated" />
    </v-content>

<v-bottom-nav :value="true" fixed app dark color="primary" >
      <v-btn color="accent" flat value="home">
        <span class="white--text">Home</span>
        <v-icon class="white--text">home</v-icon>
      </v-btn>

           
      <v-btn v-if="betCount > 0" color="accent" flat value="favorites" to="/betslip">
          <span class="accent--text">Betslip</span>        
          <v-badge color="accent">
          <template slot="badge">
            <span>{{betCount}}</span>
          </template>    
          <v-icon class="accent--text">view_list</v-icon>        
          </v-badge>
      </v-btn>
      <v-btn v-else color="white" flat value="favorites">
          <span>Betslip</span>        
          <v-icon class="white--text">view_list</v-icon>        
      </v-btn>


      <v-btn color="accent" flat value="more">
        <span class="white--text">More</span>
        <v-icon class="white--text">more_horiz</v-icon>
      </v-btn>

    </v-bottom-nav>
  </v-app>
</template>


<script>
import Signin from './components/Signin'
import Auth from '@aws-amplify/auth'
import { AmplifyEventBus } from 'aws-amplify-vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Signin
  },

  data () {
    return {

      bottomNav: 'recent',
      poolsitems: [
        { title: 'Todays Racing', icon: 'account_box', link:'/todaysracing' },
      ],
      accountitems: [
        { title: 'Account Summary', icon: 'account_box', link:'/accountsummary' },
        { title: 'Messages', icon: 'message', link:'/messages' },
        { title: 'Responsible Gambling', icon: 'warning', link:'/responsible' }
      ],
      historyitems: [
        { title: 'Open Bets', icon: 'hourglass_empty', link:'/openbets' },
        { title: 'Bet History', icon: 'history', link: '/bethistory' }
        
      ],
      walletitems: [
        { title: 'Add Funds', icon: 'attach_money', link:'/deposit' },
        { title: 'Withdraw', icon: 'money_off' }, 
        { title: 'Transactions', icon: 'credit_card', link: '/transactionhistory' }
        
      ],
      drawer:false
    }
  },
  computed:
  {
    ...mapGetters([ 'betCount', 'isAuthenticated','getBalance', 'openBetCount' ]),
    balance :function() {
      return this.getBalance.toFixed(2);
    }
  },
  methods:{
    navigate(link){
      this.$router.push(link)
    },
    opendrawer (){
      this.drawer=!this.drawer
    },
    logout() {
        Auth.signOut()
            .then(() => {


              return AmplifyEventBus.$emit('authState', 'signedOut')
            })
    },
  }
}
</script>
<style>
.Form__formSection___3tqxz
{
  min-width:300px
}

.container{
  padding:0;
}
</style>

