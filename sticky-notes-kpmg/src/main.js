import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ReviewNotes from './components/ReviewNotes'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/review-notes', component: ReviewNotes}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
