import Vue from 'vue'
import './plugins/vuetify'
import "./stylus/main.stylus"

import App from './App.vue'
import router from './router'
import { store } from './store/store'


import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin, components } from 'aws-amplify-vue'

import awsmobile from './aws-exports'


import { ValidationProvider } from 'vee-validate';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, {
  events: 'input|blur',
});

Vue.component('ValidationProvider', ValidationProvider);

Amplify.configure(awsmobile)

Vue.use(AmplifyPlugin, AmplifyModules)

Vue.config.productionTip = true



new Vue({
  router,
  store,
  components:{
    ...components,
    App
  },
  render: h => h(App)
}).$mount('#app')
