<template>
    <div>
        <div class="preview-layout">
            <div class="preview-layout-topbar">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="preview-layout-content">
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
                                class="logo"
                            >
                                <img
                                    :src="currentSection.logo.img.src"
                                    alt="logo"
                                />
                            </a>
                            <a v-else href="#" class="logo">{{
                                currentSection.logo.text
                            }}</a>
                            <div class="nav-container">
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
                            <div class="heading-subheading">
                                <h4>{{ currentSection.heading.text }}</h4>
                                <p>{{ currentSection.description.text }}</p>
                                <a
                                    href="#"
                                    class="btn-header"
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
        <hr />
        <!--
        <div class="form-group">
            <div class="custom-file">
                <input
                    type="file"
                    class="custom-file-input"
                    id="customFileLangHTML"
                />
                <label
                    class="custom-file-label"
                    for="customFileLangHTML"
                    data-browse="Browse"
                    >Choose a logo.</label
                >
            </div>
        </div>
        <div class="form-group">
            <div class="custom-control custom-radio">
                <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio1"
                    >Use name</label
                >
            </div>
            <div class="custom-control custom-radio">
                <input
                    type="radio"
                    id="customRadio2"
                    name="customRadio"
                    class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio2"
                    >Use logo image</label
                >
            </div>
        </div>
        <div class="form-group">
            <label for="name">Heading</label>
            <input
                type="text"
                class="form-control"
                :class="{ invalid: !currentSection.heading.text }"
                id="name"
                v-model="currentSection.heading.text"
            />
        </div>
        <div class="form-group">
            <label for="name">Subheading</label>
            <input
                type="text"
                class="form-control"
                :class="{ invalid: !currentSection.description.text }"
                id="name"
                v-model="currentSection.description.text"
            />
        </div>

        <hr />

        <div class="form-group">
            <div class="row">
                <div class="col">
                    <label for="name">Menu</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="col">
                    <label for="name">Menu</label>
                    <input type="text" class="form-control" />
                </div>
            </div>
            <a href="#" class="text-info pt-1">Add Link</a>
        </div>-->

        <vs-collapse :type="'default'">
            <vs-collapse-item>
                <div slot="header">
                    Name or Logo
                </div>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input
                        type="text"
                        class="form-control"
                        :class="{ invalid: !currentSection.logo.text }"
                        id="name"
                        v-model="currentSection.logo.text"
                    />
                </div>

                <vs-divider position="center">
                    Or
                </vs-divider>

                <div class="form-group">
                    <label for="customFileLangHTML">Logo</label>
                    <div class="custom-file">
                        <input
                            type="file"
                            class="custom-file-input"
                            id="customFileLangHTML"
                        />
                        <label
                            class="custom-file-label"
                            for="customFileLangHTML"
                            data-browse="Browse"
                            >Choose a logo.</label
                        >
                    </div>
                </div>

                <vs-divider position="center">
                    Change the logo color
                </vs-divider>

                <div class="form-group">
                    <label for="customFileLangHTML"
                        >Change the color of your logo text.</label
                    >
                    <verte
                        display="widget"
                        :rgbSliders="true"
                        v-model="logoRgb"
                    ></verte>
                </div>
            </vs-collapse-item>
        </vs-collapse>

        <br />

        <button
            type="button"
            class="btn btn-primary float-right btn-style btn-shdw rounded-0 btn-modal"
            @click.prevent="saveLogo"
        >
            Saves
        </button>
    </div>
</template>

<script>
export default {
    props: ["site", "section"],
    data() {
        return {
            logoRgb: "",
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
    },
    mounted() {
        this.$vs.theme({
            primary: "rgb(5, 173, 88)" // my new color
        });
    }
};
</script>

<style lang="scss">
.preview-layout {
    border-radius: 5px;
    box-shadow: 0 0 19px rgba(#000, 0.45);
    .preview-layout-topbar {
        background: #fff;
        padding: 0 10px;
        border-radius: 5px 5px 0 0;
        span {
            display: inline-block;
            background: #e4e2e2;
            height: 9px;
            width: 9px;
            border-radius: 50%;
            margin: 0 2px;
        }
    }
    .preview-layout-content {
        height: 310px;
        overflow-y: auto;
        overflow-x: hidden;
    }
}
</style>
