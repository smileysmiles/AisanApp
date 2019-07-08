<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >


<v-list two-line subheader>
          <v-subheader inset>Accounts</v-subheader>

          <v-list-tile v-for="item in items" :key="item.title" avatar>
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider inset></v-divider>
          
          <v-list-tile v-for="item in items" :key="item.title" avatar>
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>

    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'Wallet',
    data: () => ({
      items:{icon:'currency'}
    }),
    computed: {
      ...mapGetters([  ]),  
      computedDateFormatted () {
        return this.formatDate(this.date)
      }  
    },
    methods:{
      ...mapActions([  ]),
      completekyc(){

      }
    },
    mounted(){


    }
  }
</script>

<style>
.rounded-card{
    border-radius:5px;
}

.rounded-button{
  border-radius:5px;
}
</style>
