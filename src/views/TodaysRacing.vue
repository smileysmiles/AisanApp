<template>
   <v-container class="pa-0">
        <div class="frame-container">
            <iframe  src="http://paulbet.paulriley.me" style="border: none;" :height="innerheight -112" width="100%" ></iframe>
        </div>
   </v-container>
</template>

<script>
import { EventBus } from '../eventbus.js';
import { mapActions } from 'vuex'

  export default {
      name:"TodaysRacing",
     data: () => ({
      timeout:20000,
      failure:false,
      windowheight: window.height,
      message:null
      }),
    computed: {
      // ...mapGetters([ 'getLoggedInUser', 'isAuthenticated', 'getCustomerDetails' ]),  
      innerheight(){
        return this.windowheight;
      }
      
    },
    methods:{
      ...mapActions([ 'addBet' ]),
      addtobetslip(value)
      {
        this.addBet(value)
      }

    },
    components: {
    },
    mounted(){

      this.$nextTick(() =>{
        window.addEventListener('resize',() => {
          this.windowheight = window.innerHeight;
        })
          this.windowheight = window.innerHeight;
      })

      EventBus.$on('add-to-betslip', this.addtobetslip);
    }
  }
</script>
<style>

.frame-container {
    width: 100vw;
    height: 100%;
    margin: 0 auto;
    margin-bottom:56px;
      
}

.element::-webkit-scrollbar { width: 0 !important }


</style>

