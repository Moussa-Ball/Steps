import "animate.css";
import verte from "verte";
import axios from "axios";
import VueAxios from "vue-axios";
import "../registerServiceWorker";
import VModal from "vue-js-modal";
import VueOffline from "vue-offline";
import Storage from "vue-web-storage";
import VueScrollTo from "vue-scrollto";
import VueSilentbox from "vue-silentbox";
import Transitions from "vue2-transitions";
import VueTippy, { TippyComponent } from "vue-tippy";

/**
 * ----------------------------------------------------------------
 * IMPORT ALL COMPONENTS FOR EACH SECTION IN THE WEBSITE BUILDER.
 * ----------------------------------------------------------------
 */
import Team from "../components/sections/Team";
import Header from "../components/sections/Header";
import Pricing from "../components/sections/Pricing";
import PressLogo from "../components/sections/PressLogo";
import Checklist from "../components/sections/Checklist";
import Testimonial from "../components/sections/Testimonial";
import ButtonDropdown from "../components/sections/ButtonDropdown";

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
        Vue.use(Transitions);
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
        Vue.component("Team", Team);
        Vue.component("Header", Header);
        Vue.component("Pricing", Pricing);
        Vue.component("Checklist", Checklist);
        Vue.component("PressLogo", PressLogo);
        Vue.component("Testimonial", Testimonial);
        Vue.component("ButtonDropdown", ButtonDropdown);
    }
};
