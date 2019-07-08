import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import customer from './modules/customer'
import betslip from './modules/betslip'
import openBets from './modules/openBets'
import wallet from './modules/wallet'

import bethistory from './modules/closedBets'

Vue.use(Vuex)

export const store =  new Vuex.Store({
  modules:{
    authentication,
    customer,
    betslip,
    openBets,
    wallet,
    bethistory
  }
})
