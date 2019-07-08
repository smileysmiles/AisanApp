import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Foo from '../../src/Foo.vue';

describe('Foo', function () {
  let wrp;

  const routes = [
    { path: '/items/:item_id/edit', name: 'item-edit' }
  ];

  const router = new VueRouter({ routes });

  beforeEach(() => {

    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);

    wrp = mount(Foo, {
      localVue: localVue,
      router,
    });
  });

  it('does not display element if there are no items', () => {
    // No items to display.
    // NOTE: By default, our component has some items, but we use
    // setData() here to override it with an empty array of tiems to
    // make sure we have not items at all and our test works as
    // expected.
    wrp.setData({ items: [] });
    expect(wrp.find('.item-index-row').exists()).toBe(false);
  });

  test('displays element when there are items', () => {
    // Some items to display.
    // NOTE: By default our component has some items, but we use
    // setData() here providing an array with at least one item so
    // we can be sure we have items and therefore our UI _should_
    // indeed display that .item-index-row element.
    wrp.setData({ items: [{ id: 1, name: 'My Item' }] });
    expect(wrp.find('.item-index-row').exists()).toBe(true);
  
    // And we also expect to see the text 'My Item' in there.
    expect(wrp.find('.item-index-row').html()).toMatch(/My Item/);
  });

  it('displays N rows when there are N items', () => {
    wrp.setData({
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ]
    });
  
    // findAll returns an array, and an array has the length property.
    expect(wrp.findAll('.item-index-row').length).toBe(3);
  });

  // `it' and `expect's ready to go now.
});