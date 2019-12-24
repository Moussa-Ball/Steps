import "animate.css";
import "./bootstrap";
import Vue from "vue";
import verte from "verte";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./registerServiceWorker";
import VModal from "vue-js-modal";
import NProgress from "nprogress";
import Steps from "./plugins/Steps";
import VueOffline from "vue-offline";
import Storage from "vue-web-storage";
import VueScrollTo from "vue-scrollto";
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.config.productionTip = true;
Vue.use(VueScrollTo, {
    container: "body",
    duration: 1000,
    easing: "ease",
    offset: -150,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});
Vue.use(verte);
Vue.use(VModal);
Vue.use(VueOffline);
Vue.use(Storage, {
    prefix: "",
    drivers: ["local"]
});
Vue.use(Steps);
Vue.use(VueTippy);
Vue.component("tippy", TippyComponent);

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
