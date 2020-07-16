import Vue from 'vue'
import Route from 'vue-router'
import Login from './components/login.vue'

Vue.use(Route)
const routes = [{
  path: '/login',
  component: Login
}]
const router = new Route({
  routes
})
router.beforeEach((to,from,next)=>{
  console.log(to);
  console.log(from);
  console.log(next);

})
export default router