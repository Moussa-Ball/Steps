import "animate.css";
import verte from "verte";
import axios from 'axios';
import VueAxios from 'vue-axios';
import "../registerServiceWorker";
import VModal from "vue-js-modal";
import VueOffline from "vue-offline";
import Storage from "vue-web-storage";
import VueScrollTo from "vue-scrollto";
import VueSilentbox from 'vue-silentbox'
import VueTippy, { TippyComponent } from "vue-tippy";

/**
* ----------------------------------------------------------------
* IMPORT ALL COMPONENTS FOR EACH SECTION IN THE WEBSITE BUILDER.
* ----------------------------------------------------------------
*/
import Header from '../components/sections/Header'
import PressLogo from '../components/sections/PressLogo'

export default {
  install(Vue) {
  /**
   * ------------------------------------
   * Global Using.
   * ------------------------------------
   */
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
    
    Vue.use(Storage, {
      prefix: "",
      drivers: ["local"]
    });
    
    Vue.use(VueAxios, axios);
    Vue.use(VueSilentbox);
    Vue.use(VueOffline);
    Vue.use(VueTippy);
    Vue.use(VModal);
    Vue.use(verte);

    /**
     * ------------------------------------
     * Global Components.
     * ------------------------------------
     */
    Vue.component("tippy", TippyComponent);


    /**
    * ----------------------------------------------------------------
    * REGISTER ALL COMPONENTS FOR EACH SECTION IN THE WEBSITE BUILDER.
    * ----------------------------------------------------------------
    */
    Vue.component("Header", Header);
    Vue.component("PressLogo", PressLogo);
  }
};
