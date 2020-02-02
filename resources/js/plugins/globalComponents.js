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
import CTA from "../components/sections/CTA";
import Faq from "../components/sections/Faq";
import Team from "../components/sections/Team";
import Footer from "../components/sections/Footer";
import Medium from "../components/sections/Medium";
import Header from "../components/sections/Header";
import Pricing from "../components/sections/Pricing";
import Features from "../components/sections/Features";
import PressLogo from "../components/sections/PressLogo";
import Checklist from "../components/sections/Checklist";
import Testimonial from "../components/sections/Testimonial";
import ButtonDropdown from "../components/sections/ButtonDropdown";

/**
 * ----------------------------------------------------------------
 * IMPORT ALL SETUP FOR EACH SECTION IN THE WEBSITE BUILDER.
 * ----------------------------------------------------------------
 */
import HeaderSetup from "../components/setups/HeaderSetup";

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
        Vue.component("CTA", CTA);
        Vue.component("Faq", Faq);
        Vue.component("Team", Team);
        Vue.component("Footer", Footer);
        Vue.component("Medium", Medium);
        Vue.component("Header", Header);
        Vue.component("Pricing", Pricing);
        Vue.component("Features", Features);
        Vue.component("Checklist", Checklist);
        Vue.component("PressLogo", PressLogo);
        Vue.component("Testimonial", Testimonial);
        Vue.component("ButtonDropdown", ButtonDropdown);

        /**
         * ----------------------------------------
         * REGISTER ALL COMPONENTS FOR EACH SETUPS.
         * ----------------------------------------
         */
        Vue.component("HeaderSetup", HeaderSetup);
    }
};
