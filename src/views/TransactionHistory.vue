<template>
  <v-layout row>
    <v-flex xs12>
      <v-card flat>
        <v-img src="./Messages.jpg"  max-height="300px">
          <v-layout column fill-height>
            <v-spacer></v-spacer>
            <v-card-title class="white--text pl-1 pt-5">
              <div class="display-1 pl-1 pt-2">Transaction History</div>
            </v-card-title>
          </v-layout>
      </v-img>

        <v-list three-line>
          <template v-for="(item, index) in orderedTransactions">
            <v-list-tile :key="`Transaction${index}`" avatar ripple>
              <v-list-tile-content>
                <v-list-tile-title> {{ item.txtype }} ({{ item.currency }}) - {{formatdate(item.date)}}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">£{{item.amount}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
              </v-list-tile-content>

            </v-list-tile>
            <v-divider :key="`divider${index}`"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name:"TransactionHistory",
    data () {
      return {
      }  
    },
    computed:{
      ...mapGetters([ 'orderedTransactions' ]),
    },
    methods: {
      formatdate(date)
      {
        return new Date(date).toLocaleString();
      }
    }
  }
</script>