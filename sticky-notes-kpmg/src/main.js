import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ReviewNotes from './components/ReviewNotes'
import vuetify from './plugins/vuetify'

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
  vuetify,
  render: h => h(App)
}).$mount('#app')
