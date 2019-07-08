const state= {
    authenticatedUser: null,
    IsAuthenticated: false
}

const mutations = {
    SET_USER ( state, user){
        state.authenticatedUser = user;
    },
    SET_AUTHENTICATED ( state, authed ){
        state.IsAuthenticated = authed;
    }
}

const actions = {
    signIn({ commit }, user){
        commit('SET_USER', user)
        commit('SET_AUTHENTICATED', true)
        //Add event hooks for event sourcing
    },
    signOut({ commit })
    {
        commit('SET_USER', null)
        commit('SET_AUTHENTICATED', false)
    }

}

const getters = {
    getLoggedInUser(state) {
        return state.authenticatedUser;
    },
    isAuthenticated(state) {
        return state.IsAuthenticated
    }

}

export default { state, mutations, actions, getters }