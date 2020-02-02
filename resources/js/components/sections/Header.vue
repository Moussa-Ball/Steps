<template>
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
                    @click.prevent="showModal('Header')"
                    class="logo selected-item"
                >
                    <img :src="currentSection.logo.img.src" alt="logo" />
                </a>
                <a
                    v-else
                    href="#"
                    @click.prevent="showModal('Header')"
                    class="logo selected-item"
                    >{{ currentSection.logo.text }}</a
                >
                <div
                    @click.prevent="showModal('Header')"
                    class="nav-container selected-item"
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
                    @click.prevent="showModal('Header')"
                    class="heading-subheading"
                >
                    <h4 class="selected-item">Welcome to startup</h4>
                    <p class="selected-item">
                        We can share, build or make for everyone with you.
                    </p>
                    <a
                        href="#"
                        class="btn-header selected-item"
                        @click.prevent="showModal('Header')"
                        :style="{ color: currentSite.colors[0] }"
                        >Learn More</a
                    >
                </div>
                <div v-if="currentSite.type != 'web'" class="section-media">
                    <img
                        src="https://via.placeholder.com/468x60?text=Visit+Blogging.com+NowC/O https://placeholder.com/"
                        alt="Gallery"
                    />
                </div>
            </div>
        </div>
        <modal
            name="Header"
            :adaptive="true"
            height="auto"
            :scrollable="true"
            transition="pop-out"
        >
            <div class="card card-custom">
                <h5
                    class="card-header card-header-custom d-flex justify-content-between"
                >
                    Header
                    <a
                        @click.prevent="closeModal('Header')"
                        href="#"
                        style="color: #7619df;"
                    >
                        <img
                            width="15"
                            height="15"
                            src="/images/cross-out.svg"
                            alt="cross"
                        />
                    </a>
                </h5>
                <div class="card-body">
                    <HeaderSetup :site="site" :section="section"></HeaderSetup>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
export default {
    props: ["site", "section"],
    data() {
        return {
            currentSite: this.site,
            currentSection: this.section,
            name: {
                old: null,
                new: null
            }
        };
    },
    model: {
        event: "change"
    },
    computed: {
        getCls() {
            if (this.currentSite.type == "web") {
                return ["heading-section-one", this.currentSite.font];
            } else {
                return ["heading-section-two", this.currentSite.font];
            }
        }
    },
    methods: {
        saveLogo() {
            // Set configuration & saves.
            this.name.old = this.name.new;
            this.currentSection.logo.text = this.name.old;
            let pageIndex = this.currentSite.currentPage - 1;
            this.saveSectionComponent(
                this.currentSite,
                pageIndex,
                this.currentSection
            );
            this.closeModal("logoSetup");
        },
        showModal(name) {
            this.$modal.show(name);
        },
        closeModal(name) {
            this.$modal.hide(name);
        },
        saves() {}
    },
    mounted() {
        this.name.old = this.currentSite.name;
        this.name.new = this.currentSite.name;
    }
};
</script>

<style lang="scss">
.header-builder {
    .header-theme {
        padding: 10px 0;
        .header-theme-container {
            max-width: 1024px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            .logo {
                color: #fff;
                font-size: 36px;
                line-height: 74px;
                text-decoration: none;
            }
            .nav-container {
                a {
                    color: #fff;
                    font-size: 1.4rem;
                    margin-left: 20px;
                    line-height: 74px;
                    text-decoration: none;
                    &:first-child {
                        margin-left: 0;
                    }
                }
            }
        }
    }
    .heading-section-one {
        text-align: center;
        padding-bottom: 120px;
        h4 {
            color: #fff;
            padding-top: 40px;
            font-size: 3.2rem;
            font-weight: 100;
            text-align: center;
        }
        p {
            color: #fff;
            font-size: 1.5rem;
            text-align: center;
        }
        a {
            padding: 15px 25px;
            background-color: #fff;
            margin-top: 50px !important;
            margin-bottom: 50px !important;
            position: relative;
            top: 40px;
            &:hover {
                color: #fff;
                text-decoration: none;
            }
        }
    }
    .heading-section-two {
        text-align: center;
        padding-bottom: 120px;
        .section-container {
            padding-left: 80px;
            padding-right: 80px;
            margin: 0 auto;
            text-align: left;
            display: flex;
            justify-content: space-between;
            h4 {
                color: #fff;
                padding-top: 40px;
                font-size: 3.2rem;
                font-weight: 100;
                text-align: left;
                position: relative;
                top: 40px;
            }
            p {
                color: #fff;
                font-size: 1.5rem;
                margin-bottom: 80px !important;
                text-align: left;
                position: relative;
                top: 40px;
            }
            a.btn-header {
                padding: 15px 25px;
                background-color: #fff;
                &:hover {
                    color: #fff;
                    text-decoration: none;
                }
            }
            .section-media {
                background-color: transparent;
                padding: 150px 260px;
                max-height: 300px;
                max-width: 500px;
                top: 40px;
                &:hover {
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>
