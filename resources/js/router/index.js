import Vue from "vue";
import VueRouter from "vue-router";

// Pages
import Home from "../views/Home";
import Terms from "../views/Terms";
import Privacy from "../views/Privacy";
import NotFound from "../views/404.vue";
import Website from "../views/Website.vue";
import WebsiteBuilder from "../views/WebsiteBuilder.vue";

// Layouts
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import HomeFooter from "../layouts/HomeFooter";
import HomeHeader from "../layouts/HomeHeader";

Vue.use(VueRouter);

const routes = [
    {
        path: "*",
        name: "404",
        component: NotFound
    },
    {
        path: "/",
        name: "home",
        components: {
            header: HomeHeader,
            default: Home,
            footer: HomeFooter
        }
    },
    {
        path: "/privacy",
        name: "privacy",
        components: {
            header: Header,
            default: Privacy,
            footer: Footer
        }
    },
    {
        path: "/terms",
        name: "terms",
        components: {
            header: Header,
            default: Terms,
            footer: Footer
        }
    },
    {
        path: "/website",
        name: "website",
        components: {
            header: Header,
            default: Website,
            footer: Footer
        }
    },
    {
        path: "/website/:name",
        name: "builder",
        components: {
            header: false,
            default: WebsiteBuilder,
            footer: false
        }
    }
];

const router = new VueRouter({
    mode: "history",
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    routes
});

export default router;
