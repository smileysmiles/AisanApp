<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-img src="./Messages.jpg"  max-height="300px">
          <v-layout column fill-height>


            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-1 pt-5">
              <div class="display-1 pl-1 pt-2">Messages</div>
            </v-card-title>
          </v-layout>
      </v-img>

        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-list-tile :key="index" avatar ripple @click="toggle(index)">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                <v-icon
                  v-if="selected.indexOf(index) < 0"
                  color="grey lighten-1"
                >
                  star_border
                </v-icon>

                <v-icon
                  v-else
                  color="yellow darken-2"
                >
                  star
                </v-icon>
              </v-list-tile-action>

            </v-list-tile>
            <v-divider
              v-if="index + 1 < items.length"
              :key="`divider${index}`"
            ></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        selected: [2],
        items: [
          {
            action: '14 min',
            headline: 'Balance change',
            title: 'Wallet',
            subtitle: "£100 has been added to your wallet. Your current balance is £100"
          },
          {
            action: '15 min',
            headline: 'Deposit',
            title: 'Asian App',
            subtitle: "You have deposited £100"
          },
          {
            action: '2 hr',
            headline: 'Registration Complete',
            title: 'Asian App',
            subtitle: "You have now fully registered."
          },
          {
            action: '6 hr',
            headline: 'Registered',
            title: 'Asian App',
            subtitle: 'Thankyou for registering. Please now complete your registration to begin betting.'
          }
        ]
      }
    },

    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      }
    }
  }
</script>