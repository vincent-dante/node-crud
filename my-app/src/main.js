import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'



/* import VueRouter from 'vue-router' */
/* import Employee from './components/Employee.vue' */
/* const routes = [
  { path: '/employee', component: Employee }
]
const router = new VueRouter({
  routes // short for `routes: routes`
}) */

createApp(App).
  /* use(router). */
  mount('#app');

App.config.devtools = true
