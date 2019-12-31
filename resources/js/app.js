import "./bootstrap";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import NProgress from "nprogress";
import Steps from "./plugins/Steps";

Vue.config.productionTip = true;
Vue.use(Steps);

// eslint-disable-next-line no-unused-vars
router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
    }
    next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
    NProgress.done();
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
