<template>
    <div class="setup-layout">
        <div class="setup-layout-topbar">
            <i></i>
            <i></i>
            <i></i>
        </div>
        <div class="setup-layout-preview">
            <div class="header-builder">
                <div
                    :class="currentSite.font"
                    class="header-theme"
                    :style="{ background: currentSite.colors[0] }"
                >
                    <div class="header-theme-container">
                        <a
                            v-if="currentSection.logo.img.src"
                            :href="currentSection.logo.link"
                            @click.prevent="showModal('logoSetup')"
                            class="logo"
                        >
                            <img
                                :src="currentSection.logo.img.src"
                                alt="logo"
                            />
                        </a>
                        <a
                            v-else
                            href="#"
                            @click.prevent="showModal('logoSetup')"
                            class="logo"
                            >{{ currentSection.logo.text }}</a
                        >
                        <div
                            @click.prevent="showModal('menuSetup')"
                            class="nav-container"
                        >
                            <a href="#">Accueil</a>
                        </div>
                    </div>
                </div>
                <div
                    :class="getCls"
                    :style="{
                        background: currentSite.colors[0],
                        font: currentSite.font
                    }"
                >
                    <div class="section-container">
                        <div
                            @click.prevent="showModal('headingSetup')"
                            class="heading-subheading"
                        >
                            <h4>Welcome to startup</h4>
                            <p>
                                We can share, build or make for everyone with
                                you.
                            </p>
                            <a
                                href="#"
                                class="btn-header"
                                @click.prevent="showModal('headingSetup')"
                                :style="{ color: currentSite.colors[0] }"
                                >Learn More</a
                            >
                        </div>
                        <div
                            v-if="currentSite.type != 'web'"
                            class="section-media"
                        >
                            <img
                                src="https://via.placeholder.com/468x60?text=Visit+Blogging.com+NowC/O https://placeholder.com/"
                                alt="Gallery"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["site", "section"],
    data() {
        return {
            currentSite: this.site,
            currentSection: this.section
        };
    },
    computed: {
        getCls() {
            if (this.currentSite.type == "web") {
                return ["heading-section-one", this.currentSite.font];
            } else {
                return ["heading-section-two", this.currentSite.font];
            }
        }
    }
};
</script>

<style lang="scss">
.setup-layout {
    .header-theme-container {
        .logo {
            font-size: 19px !important;
        }
        .header-theme-container .nav-container {
            font-size: 16px !important;
        }
    }
}
</style>
