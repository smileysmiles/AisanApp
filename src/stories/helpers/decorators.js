
export function wrapComponent(story, gutter, size) {
  const WrappedComponent = story()
  return {
    components: { WrappedComponent },
    template: `<v-container grid-list-${gutter} fluid :style="{ border: borderStyle }"><v-layout row wrap align-center justify-center><v-flex ${size}><wrapped-component/></v-flex></v-layout></v-container>`,
    data() {
      return { borderStyle: 'medium solid grey' }
    }
  }
}
