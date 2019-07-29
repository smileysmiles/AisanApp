// import { storiesOf } from '@storybook/vue';


// storiesOf('Toolbar', module)
//   .add('with text', () => '<toolbar></toolbar>');

import { storiesOf } from '@storybook/vue';
import { wrapComponent } from './helpers/decorators'


console.log("here")
storiesOf('Button', module)
  .addDecorator(story => wrapComponent(story, 'xl', 'xs'))
  .addParameters({ viewport: { defaultViewport: 'VuetifyXs' }})
  .add('with text', () => '<toolbar></toolbar>')
  .add('with emoji', () => '<my-button>😀 😎 👍 💯</my-button>')
