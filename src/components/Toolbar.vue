<template>
  <v-toolbar flat app light color="white" clipped-left>
    <v-toolbar-side-icon color="primary lighten-1" class="white--text" @click="toggleDrawer()"></v-toolbar-side-icon>
    <v-toolbar-title class="text-uppercase font-weight-medium headline pl-2">
        <span class="primary--text">Asian</span>
        <span class="accent--text">App</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div id="ToolbarBalance" class="text-xs-center" v-if="isAuthenticated">
      <v-chip color="accent lighten-1" class="white--text">£{{balance}}</v-chip>
    </div>
    <v-btn icon color="primary lighten-1" @click="signout">
        <v-icon color="white">exit_to_app</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
export default {
  name:"Toolbar",
  data:() => (
    {

    }
  ),
  methods:{
    toggleDrawer(){
      console.log("Toggle Drawer")
      this.$emit( 'toggleDrawer', null )
    },
    signout(){
      this.$emit( 'signout', null )
    }
  },
  props:[
    'isAuthenticated',
    'balance'
  ]
}
</script>
