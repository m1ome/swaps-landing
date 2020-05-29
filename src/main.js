import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './components/Index.vue'
import Terms from './components/Terms.vue'
import Limits from './components/Limits.vue'
import Privacy from './components/Privacy.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index },
  { path: '/terms/', component: Terms},
  { path: '/limits/', component: Limits},
  { path: '/privacy/', component: Privacy},
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
