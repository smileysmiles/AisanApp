const state= {
    openbets:[],
}

const mutations = {
    'PLACE_BET' ( state, bet){
        let index = state.openbets.findIndex( item => item.toteBetID == bet.toteBetID);
        if ( index == -1 )
            state.openbets.push(bet);
        else
        {
            state.openbets.splice(index, 1, bet)
        }
    },
}

const actions = {
    placeBet({ commit }, bet){
        commit('PLACE_BET', bet)
    },
}

const getters = {
     openBetCount(state) {
         return state.openbets.length;
     },
     getOpenBets(state){
         return state.openbets;
     }

}

export default { state, mutations, actions, getters }