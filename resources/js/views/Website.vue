<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-5 title-secion">
                    <h2 class="d-inline-block">Website</h2>
                    <nav aria-label="breadcrumb" class="float-right">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/">Home</router-link>
                            </li>
                            <li
                                class="breadcrumb-item active"
                                aria-current="page"
                            >
                                Website
                            </li>
                        </ol>
                    </nav>
                </div>
                <template v-for="site in sites">
                    <div class="col-md-6 mt-5 mb-5">
                        <div @click="editWebsite(site.slug, site.id)" style="height: 264px;" class="website-card header-preview">
                            <div :class="site.font" class="header-theme" :style="{ background: site.colors[0] }">
                                <div class="header-theme-container">
                                    <a class="logo">
                                        {{ site.name }}
                                    </a>
                                    <div @click.prevent="showModal('menuSetup')" class="nav-container">
                                        <a href="#">Accueil</a>
                                    </div>
                                </div>
                            </div>
                            <div :class="getCls(site)" :style="{ background: site.colors[0], font: site.font }">
                                <div class="section-container">
                                    <div class="heading-subheading">
                                        <h4>Welcome to startup</h4>
                                        <p>We can share, build or make for everyone with you.</p>
                                        <a href="#" class="btn-header" :style="{ color: site.colors[0] }">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <div class="col-md-6 mt-5 mb-5">
                    <div class="website-card" @click.prevent="addWebsite">
                        <div class="pt-5"></div>
                        <div class="ellipse-add"><span>+</span></div>
                        <div class="pt-5"></div>
                        <h5 class="text-center subtitle">
                            Create a new website.
                        </h5>
                        <h5 class="text-center subtitle" style="opacity: .75;">
                            Click Here
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        <WebsiteWizard></WebsiteWizard>
    </div>
</template>

<script>
import WebsiteWizard from "../components/WebsiteWizard";
export default {
    data() {
        return {
            sites: []
        };
    },
    components: { 
        WebsiteWizard 
    },
    methods: {
        getCls(site) {
            if (site.type == "web") {
                return ["heading-section-one", site.font];
            } else {
                return ["heading-section-two", site.font];
            }
        },
        editWebsite(slug, id) {
            this.$router.push({
                name: "builder",
                params: { slug: slug, id: id }
            });
        },
        addWebsite() {
            $(".footer").hide();
            $(".navbar.main").hide();
            $(".setupWizard").show();
            $("body").css("overflow", "hidden");
        },
        launchPreview() {
            $(".footer").hide();
            $(".navbar.main").hide();
            $(".websitePreview").show();
        },
        // eslint-disable-next-line vue/return-in-computed-property
        getProjectType(value) {
            switch (value) {
                case "iphone-ipad":
                    return "Ipad & Iphone Application";
                case "chrome-extension":
                    return "Chrome Extension";
                case "kickstar":
                    return "Kickstar";
                case "something":
                    return "Something";
                case "open-source-project":
                    return "Open Source Project";
                case "responsive":
                    return "Responsive Application";
                case "desktop":
                    return "Desktop Application";
                case "cross-platform":
                    return "Cross Platform";
                case "iphone-android":
                    return "Iphone & Android Application";
                case "android":
                    return "Android Application";
                case "iphone":
                    return "Iphone Application";
                case "web":
                    return "Website";
            }
        }
    },
    async created() {
        this.sites = this.$localStorage.get("Sites");
    }
};
</script>
