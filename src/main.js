import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./App.vue";
import Skill from "./components/Skill";
import home from "./components/home";
import cat from "./components/cat";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: "/skill", component: Skill },
  { path: "/contact", component: home },
  { path: "/cat", component: cat }
];
const router = new VueRouter({
  routes // raccourci pour `routes: routes`
});

const store = new Vuex.Store({
  state: {
    url: null
  },
  mutations: {
    setUrl(state, url) {
      state.url = url;
    }
  }
});
store.commit('increment')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



//console.log(store.state.count) 
