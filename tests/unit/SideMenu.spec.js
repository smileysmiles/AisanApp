import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import SideMenu from '../../src/components/SideMenu.vue';

describe('Foo', function () {
  let wrp;

  const routes = [
    { path:"/todaysracing", name:"home" },
    { path:"/accountsummary", name:"Account Summary" },
    { path:"/messages", name:"Messages" },
    { path:"/responsible", name:"Responsible Gambling" },
    { path:"/openbets", name:"OpenBets" },
    { path:"/bethistory", name:"BetHistory" },
    { path:"/deposit", name:"Deposit" },
    { path:"/transactionhistory", name:"TransactionHistory" }
  ];

  const router = new VueRouter({ routes });

  beforeEach(() => {

    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);

    wrp = mount(SideMenu, {
      localVue: localVue,
      router,
    });
  });

  it('Navigation Draw open when toggleDrawer passed first time', () => {
    // No items to display.
    // NOTE: By default, our component has some items, but we use
    // setData() here to override it with an empty array of tiems to
    // make sure we have not items at all and our test works as
    // expected.
    wrp.setProps({ toggleDrawer:true, balance: 0, openBetCount:0 });
    expect(wrp.find('.v-navigation-drawer--open').exists()).toBe(true);
  });

  it('Navigation Draw open when toggleDrawer passed second time', () => {
    // No items to display.
    // NOTE: By default, our component has some items, but we use
    // setData() here to override it with an empty array of tiems to
    // make sure we have not items at all and our test works as
    // expected.
    wrp.setProps({ toggleDrawer:true, balance: 0, openBetCount:0 });
    wrp.setProps({ toggleDrawer:false, balance: 0, openBetCount:0 });
    expect(wrp.find('.v-navigation-drawer--open').exists()).toBe(false);
  });

  it('Navigation Draw closed when data drawer set to false', () => {
    // No items to display.
    // NOTE: By default, our component has some items, but we use
    // setData() here to override it with an empty array of tiems to
    // make sure we have not items at all and our test works as
    // expected.
    wrp.setData({ drawer: false });
    expect(wrp.find('.v-navigation-drawer--close').exists()).toBe(true);
  });

  it('Navigation Draw open when data drawer set to open', () => {
    // No items to display.
    // NOTE: By default, our component has some items, but we use
    // setData() here to override it with an empty array of tiems to
    // make sure we have not items at all and our test works as
    // expected.
    wrp.setData({ drawer: true });
    expect(wrp.find('.v-navigation-drawer--open').exists()).toBe(true);
  });

});