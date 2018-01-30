
import Vue from 'vue'
import Rating from './componentens/Rating.vue'

new Vue({
  el: '#app',
  template: '<Rating :grade="2"/>',
  components: { Rating }
})
