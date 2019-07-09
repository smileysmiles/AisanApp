import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Toolbar from '../../src/components/Toolbar.vue';

describe('Foo', function () {
  let wrp;

  const routes = [
    {  }
  ];

  //const router = new VueRouter({ routes });

  beforeEach(() => {

    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);

    wrp = mount(Toolbar, {
      localVue: localVue,
      //router,
    });
  });

  it('does not display balance if not authenticated', () => {
    // No items to display.
    // NOTE: By default, our component has some items, but we use
    // setData() here to override it with an empty array of tiems to
    // make sure we have not items at all and our test works as
    // expected.
    wrp.setProps({ isAuthenticated:false, balance: 0 });
    expect(wrp.find('#ToolbarBalance.v-chip__content').exists()).toBe(false);
  });

  it('does display balance if authenticated', () => {
    // No items to display.
    // NOTE: By default, our component has some items, but we use
    // setData() here to override it with an empty array of tiems to
    // make sure we have not items at all and our test works as
    // expected.
    wrp.setProps({ isAuthenticated:true, balance: 99.99 });
    expect(wrp.find('#ToolbarBalance').exists()).toBe(true);
    expect(wrp.find('#ToolbarBalance').html()).toMatch(/99.99/);
  });

  it('checks if event is emitted for signout', () => {
    // No items to display.
    // NOTE: By default, our component has some items, but we use
    // setData() here to override it with an empty array of tiems to
    // make sure we have not items at all and our test works as
    // expected.
    wrp.vm.$emit('signout')

    expect (wrp.emitted().signout).toBeTruthy();

  });

  it('checks if event is emitted for toggleDrawer', () => {
    // No items to display.
    // NOTE: By default, our component has some items, but we use
    // setData() here to override it with an empty array of tiems to
    // make sure we have not items at all and our test works as
    // expected.
    wrp.vm.$emit('toggleDrawer')

    expect (wrp.emitted().toggleDrawer).toBeTruthy();

  });


});