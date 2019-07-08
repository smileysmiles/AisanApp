import axios from 'axios'

const customerEndpoint = "https://hlrukn1k7b.execute-api.eu-west-2.amazonaws.com/dev/customer/";

const state= {
    customer: null,
}

const mutations = {
    'SET_CUSTOMER' ( state, customer){
        state.customer = customer;
    }
}

const actions = {
    fetchCustomerDetails({commit}, sub){
      let customer = {
        sub: sub,
        details:{
          dob: new Date('1995-12-17T03:24:00'),
          firstname: 'Ali',
          surname: 'Carter',
          email: 'Ali@example.me',
          address1: '11 Example Road',
          postcode: 'WA44 XG0',
          city:'Manchester',
          county:'Greater Manchester',
          country:'UK',
          mobile:'00000000000000',
          title: 'Mr'
        },
        balance:100,
        email:"Ali@example.me",
        state:"COMPLETE"
      }
      commit('SET_CUSTOMER', customer)
    },
    newSignUp({commit}, user){
        
        const url = customerEndpoint + user.attributes.sub;

        const data ={
            email: user.attributes.email,
            details: null,
            state: "pending_details"
        }

        axios.post(url, data)
          .then(function (response) {
            commit('', response.data.data)
          })
          //.catch(function (error) {
            //console.log(error);
          //});
    }
}

const getters = {
    getCustomerDetails(state){
        return state.customer;
    }

}


export default { state, mutations, actions, getters }