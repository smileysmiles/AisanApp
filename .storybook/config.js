/* eslint-disable import/no-extraneous-dependencies */
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { configure, addDecorator } from "@storybook/vue";
import 'vuetify/dist/vuetify.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import Toolbar from '../src/components/Toolbar.vue';

import colors from 'vuetify/es5/util/colors'
import 'material-design-icons-iconfont/dist/material-design-icons.css'



Vue.use(Vuetify,{
  theme: {
    primary: colors.blue.darken3,
    secondary: colors.blue.lighten4,
    accent: colors.amber.accent4
  }
})


const vuetifyViewports = {
  VuetifyLg: {
    name: 'Vuetify LG',
    styles: {
      width: '1904px'
    },
    type: 'desktop'
  },
  VuetifyXs: {
    name: 'Vuetify XS',
    styles: {
      width: '600px'
    },
    type: 'mobile'
  },
  VuetifySm: {
    name: 'Vuetify SM',
    styles: {
      width: '960px'
    },
    type: 'mobile'
  },
  VuetifyMd: {
    name: 'Vuetify MD',
    styles: {
      width: '1264px'
    },
    type: 'tablet'
  },
  VuetifyXl: {
    name: 'Vuetify XL',
    styles: {
      width: '4096px'
    },
    type: 'desktop'
  }
}

configureViewport({
  defaultViewport: 'VuetifyXs',
  viewports: {
    ...vuetifyViewports,
    ...INITIAL_VIEWPORTS
  }
})

// Ensures every story is wrapped in a v-app tag
addDecorator(() => ({
  template: '<v-app style="background-color: transparent;"><story/></v-app>',
  style: '.theme--light.application { background-color: transparent; }'
}))


Vue.component('toolbar', Toolbar)

const req = require.context("../src/stories", true, /.js$/);

console.log(req)
function loadStories() {
  req.keys().forEach(filename => req(filename));
  //require('../src/stories/index.js');
}

configure(loadStories, module);