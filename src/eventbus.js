import Vue from 'vue';
export const EventBus = new Vue();
window.addEventListener('message', function (e) {
  if (e.data.event === 'ADD-TO-BETSLIP') {
      EventBus.$emit('add-to-betslip', e.data.data);
  }
});