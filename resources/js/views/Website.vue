<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-5 title-secion">
                    <h2 class="d-inline-block">Website</h2>
                    <nav aria-label="breadcrumb" class="float-right">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
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
                        <div
                            @click="editWebsite(site.slug, site.id)"
                            class="website-card"
                        >
                            <div class="preview-card">
                                <div class="container pt-3 pb-3">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h5>{{ site.name }}</h5>
                                            <p class="pt-2 mt-4">
                                                Hey there, nice to
                                                <br />meet you. I’m <br />your
                                                website!
                                            </p>
                                            <button
                                                class="btn btn-style mt-3 mb-2"
                                                style="padding: 10px;"
                                            >
                                                <span
                                                    >Download on App Store</span
                                                >
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5"></div>
                            <h5 class="text-center subtitle mt-5">
                                {{ getProjectType(site.type) }}
                            </h5>
                            <h5
                                class="text-center subtitle"
                                style="opacity: .75;"
                            >
                                Unpublished
                            </h5>
                        </div>
                    </div>
                </template>
                <div
                    class="mt-5 mb-5"
                    :class="{ 'col-md-12': !sites, 'col-md-6': sites }"
                >
                    <div class="website-card" @click.prevent="addWebsite">
                        <div class="pt-5"></div>
                        <div class="pt-5"></div>
                        <div class="ellipse-add">+</div>
                        <div class="pt-5"></div>
                        <div class="pt-4"></div>
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
    components: { WebsiteWizard },
    methods: {
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
    created() {
        this.sites = this.$localStorage.get("Sites");
    }
};
</script>
