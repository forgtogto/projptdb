import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Header from './views/layout/Header'
import Footer from './views/layout/Footer'
import About from './views/About.vue'
import Dealership from "./views/Dealership.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes: [
    { path: "/", name: "home", components: { header: Header, default: Home, footer: Footer }},
    { path: "/about", name: "about", components: { header: Header, default: About, footer: Footer }},
    {
      path: "/dealership",
      name: "dealership",
      components: {
        header: Header,
        default: Dealership,
        footer: Footer
      }
    }
  ]
})
