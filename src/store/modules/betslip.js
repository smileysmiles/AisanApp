const state= {
    bets:[],
}

const mutations = {
    'ADD_BET' ( state, bet){
        let index = state.bets.findIndex( item => item.toteBetID == bet.toteBetID);
        if ( index == -1 )
            state.bets.push(bet);
        else
        {
            state.bets.splice(index, 1, bet)
        }
    },
    'REMOVE_BET' ( state, toteBetID ){
        state.bets = state.bets.filter( bet => bet.toteBetID != toteBetID )
    }
}

const actions = {
    addBet({ commit }, bet){
        commit('ADD_BET', bet)
    },
    removeBet({ commit }, toteBetID)
    {
        commit('REMOVE_BET', toteBetID)
    }

}

const getters = {
     betCount(state) {
         return state.bets.length;
     },
     getBets(state){
         return state.bets;
     }
    // isAuthenticated(state) {
    //     return state.IsAuthenticated "4148f5d6-5d8a-42b2-b877-ab27eaaae479"
    // }

}

export default { state, mutations, actions, getters }