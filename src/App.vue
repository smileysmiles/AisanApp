<template>
  <v-app>
    <Toolbar :isAuthenticated="isAuthenticated" :balance="balance" @toggleDrawer="toggleDrawer()" @signout="signout()"></Toolbar>
    <SideMenu :toggleDrawer="drawer" :balance="balance" :openBetCount="openBetCount"></SideMenu>
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

import Toolbar from './components/Toolbar'
import SideMenu from './components/SideMenu'

export default {
  name: 'App',
  components: {
    Signin,
    Toolbar,
    SideMenu
  },

  data () {
    return {

      bottomNav: 'recent',

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
    signout() {
        Auth.signOut()
            .then(() => {
              return AmplifyEventBus.$emit('authState', 'signedOut')
            })
    },
    toggleDrawer(){
      console.log("Drawer - ", this.drawer)
      this.drawer = !this.drawer;
    }
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

