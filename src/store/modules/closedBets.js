const state= {
    closedBets:[
        {
            toteBetID:"aglkfdhgfdhgjhkfgjhfdkg",
            betCode:"PlacePot",
            betOption:"No Option",
            unitStake: 1,
            totalStake: 1,
            lines: 1,
            result: "WIN",
            winnings: "5.50",
            selections: [{
                    isBanker:0,
                    raceNumber:1,
                    leg:1,
                    raceTime: "12:00",
                    horseNumber: "-",
                    horse: "Unnamed Favorite"
                },
                {
                    isBanker:0,
                    raceNumber:2,
                    leg:2,
                    raceTime: "12:15",
                    horseNumber: "-",
                    horse: "Unnamed Favorite"
                },
                {
                    isBanker:0,
                    raceNumber:3,
                    leg:3,
                    raceTime: "12:30",
                    horseNumber: "-",
                    horse: "Unnamed Favorite"
                },
                {
                    isBanker:0,
                    raceNumber:4,
                    leg:4,
                    raceTime: "12:45",
                    horseNumber: "-",
                    horse: "Unnamed Favorite"
                },
                {
                    isBanker:0,
                    raceNumber:5,
                    leg:5,
                    raceTime: "13:00",
                    horseNumber: "-",
                    horse: "Unnamed Favorite"
                },
                {
                    isBanker:0,
                    raceNumber:6,
                    leg:6,
                    raceTime: "13:15",
                    horseNumber: "-",
                    horse: "Unnamed Favorite"
                },
            ],
            course: "Happy Valley"
        }
    ],
}

const mutations = {
    'ADD_CLOSED_BET' ( state, bet){
        let index = state.openbets.findIndex( item => item.toteBetID == bet.toteBetID);
        if ( index == -1 )
            state.closedBets.push(bet);
        else
        {
            state.closedBets.splice(index, 1, bet)
        }
    },
}

const actions = {
    closeBet({ commit }, bet){
        commit('ADD_CLOSED_BET', bet)
    },
}

const getters = {
     closedBetCount(state) {
         return state.closedBets.length;
     },
     getClosedBets(state){
         return state.closedBets;
     }

}

export default { state, mutations, actions, getters }