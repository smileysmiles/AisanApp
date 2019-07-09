<template>
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
</template>
<script>
export default {
  name:"SideMenu",
  data:() => (
    {
      drawer:false,
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
        { title: 'Withdraw', icon: 'money_off', link: '/transactionhistory' }, 
        { title: 'Transactions', icon: 'credit_card', link: '/transactionhistory' }
        
      ],
    }
  ),
  props:[
    //using toggleDrawer as a trigger rather than a value.
    'toggleDrawer',
    'balance',
    'openBetCount'
  ],
  watch:{
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  },
  mounted(){
    this.drawer = this.toggleDrawer;
  }
}
</script>
