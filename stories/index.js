import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Wallet from '../src/components/Wallet.vue';

storiesOf('Button', module)
  .add('with text', () => '<my-button>with text</my-button>')
  .add('with emoji', () => '<my-button>😀 😎 👍 💯</my-button>')
  .add('as a component', () => ({
    components: { Wallet },
    template: '<my-button :rounded="true">rounded</my-button>'
  }));