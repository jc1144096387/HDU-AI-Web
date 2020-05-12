import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'

Vue.config.productionTip = false

// import VueHighlightJS from 'highlight.js';
// Vue.use(VueHighlightJS)
// Vue.directive('highlight', (el) => {
//   let blocks = el.querySelectorAll('pre code')
//   blocks.forEach((block) => {
//     VueHighlightJS.highlightBlock(block)
//   })
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
