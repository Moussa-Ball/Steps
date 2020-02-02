<template>
  <div class="setupWizard bounceIn">
    <nav class="navbar navbar-custom-style fixed-top navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <ul v-if="!saving" class="navbar-nav mr-auto">
          <a
            v-if="currentSteps > 1"
            @click.prevent="previousStep"
            class="nav-link float-right"
            href="#"
          >
            <i class="fas fa-arrow-left" style="position: relative; top: 1px;"></i>
            <span class="ml-2">Return</span>
          </a>
        </ul>
        <ul v-if="!saving" class="navbar-nav">
          <a @click.prevent="cancel" class="nav-link float-right" href="#">
            <i class="fas fa-times"></i>
          </a>
        </ul>
      </div>
    </nav>
    <div class="progress">
      <div class="progress-bar" :style="{width: progression + '%'}"></div>
    </div>
    <template>
      <section class="section" v-if="currentSteps == 1">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <input
                id="startup-input"
                autocomplete="off"
                type="text"
                placeholder="What's Your Startup's Name"
                v-model="name"
              />
              <p class="lead">What are you making today ?</p>
            </div>
            <div class="col-md-3 mt-5" @click="WebsiteType('web')">
              <div class="card">
                <div class="card-body">
                  <p>
                    <img src="/images/icons/website.svg" alt="website.svg" />
                  </p>
                </div>
                <div class="card-title">
                  <h4>Web App</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 mt-5" @click="WebsiteType('iphone')">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        <img
                          style="width: 16% !important; height: 5% !important;"
                          src="/images/icons/smartphone.svg"
                          alt="smartphone.svg"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-title">
                  <h4>Iphone App</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 mt-5" @click="WebsiteType('android')">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        <img
                          style="width: 14% !important; height: 5% !important;"
                          src="/images/icons/android.svg"
                          alt="android.svg"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-title">
                  <h4>Android App</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 mt-5" @click="WebsiteType('iphone-android')">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        <img src="/images/icons/Iphone-Android.svg" alt="Iphone-Android.svg" />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-title">
                  <h4>Iphone & Android</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 mt-5" @click="WebsiteType('cross-platform')">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        <img
                          src="/images/icons/cross-platform-app.svg"
                          alt="cross-platform-app.svg"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-title">
                  <h4>Cross Platform App</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 mt-5" @click="WebsiteType('desktop')">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        <img src="/images/icons/pc.svg" alt="pc.svg" />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-title">
                  <h4>Desktop App</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 mt-5" @click="WebsiteType('responsive')">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        <img src="/images/icons/responsive-app.svg" alt="responsive-app.svg" />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-title">
                  <h4>Responsive App</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 mt-5" @click="WebsiteType('open-source-project')">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        <img src="/images/icons/open-source.svg" alt="open-source.svg" />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-title">
                  <h4>Open Source Project</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 mt-5" @click="WebsiteType('something')">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        <img src="/images/icons/something.svg" alt="something.svg" />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-title">
                  <h4>Something</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 mt-5" @click="WebsiteType('kickstar')">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        <img src="/images/icons/kickstar.svg" alt="kickstar.svg" />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-title">
                  <h4>Kickstar</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 mt-5" @click="WebsiteType('chrome-extension')">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        <img src="/images/icons/chrome-extension.svg" alt="chrome-extension.svg" />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-title">
                  <h4>Chrome Extension</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 mt-5" @click="WebsiteType('iphone-ipad')">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        <img src="/images/icons/iphone-ipad.svg" alt="iphone-ipad.svg" />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-title">
                  <h4>Ipad &amp; Iphone App</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="#steps2" v-if="currentSteps == 2" class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <input
                id="startup-input"
                autocomplete="off"
                type="text"
                placeholder="What's Your Startup's Name"
                v-model="name"
              />
              <p class="lead">What Colors Best Suites Your Startup?</p>
            </div>
            <div class="col-md-3">
              <verte display="widget" :rgbSliders="true" v-model="rgb"></verte>
            </div>
            <div class="col-md-9">
              <div class="d-flex flex-wrap jsutify-content-between color-swatch-container">
                <div>
                  <span
                    @click="selectColor(0)"
                    class="color-rounded"
                    :class="{'selected': selectedColor === 1}"
                    :style="getColor([colors[0]], true)"
                  ></span>
                  <p>Main Color</p>
                </div>
                <div>
                  <span
                    @click="selectColor(1)"
                    class="color-rounded"
                    :class="{'selected': selectedColor === 2}"
                    :style="getColor([colors[1]], true)"
                  ></span>
                  <p>Second Color</p>
                </div>
                <div>
                  <span
                    @click="selectColor(2)"
                    class="color-rounded"
                    :class="{'selected': selectedColor === 3}"
                    :style="getColor([colors[2]], true)"
                  ></span>
                  <p>Another Color</p>
                </div>
                <div>
                  <span
                    @click="selectColor(3)"
                    class="color-rounded"
                    :class="{'selected': selectedColor === 4}"
                    :style="getColor([colors[3]], true)"
                  ></span>
                  <p>Dark Text</p>
                </div>
                <div>
                  <span
                    @click="selectColor(4)"
                    class="color-rounded"
                    :class="{'selected': selectedColor === 5}"
                    :style="getColor([colors[4]], true)"
                  ></span>
                  <p>Light Text</p>
                </div>
                <div>
                  <span
                    @click="selectColor(5)"
                    class="color-rounded"
                    :class="{'selected': selectedColor === 6}"
                    :style="getColor([colors[5]], true)"
                  ></span>
                  <p>Background</p>
                </div>
              </div>
            </div>
            <div class="col-md-12 mt-5 text-center">
              <button @click="nextStep" class="btn-style btn-shdw">
                Next
                <i class="ml-2 fas fa-arrow-right" style="font-size: 13px;"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="#steps2" v-if="currentSteps == 3" class="section font-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <input
                id="startup-input"
                autocomplete="off"
                type="text"
                placeholder="What's Your Startup's Name"
                v-model="name"
              />
              <p class="lead">What Font Best Suites Your Startup?</p>
            </div>
            <div @click.prevent="WebsiteFont('cardo')" class="col-md-4 mt-5">
              <div class="card">
                <div class="card-body">
                  <h1 class="display-4 cardo">Cardo</h1>
                </div>
                <div class="card-title cardo ml-3 mr-3">
                  <p class="lead">Select Cardo if you wish to have this font on your website.</p>
                </div>
              </div>
            </div>
            <div @click.prevent="WebsiteFont('lato')" class="col-md-4 mt-5">
              <div class="card">
                <div class="card-body">
                  <h1 class="display-4 lato">Lato</h1>
                </div>
                <div class="card-title lato ml-3 mr-3">
                  <p class="lead">Select Lato if you wish to have this font on your website.</p>
                </div>
              </div>
            </div>
            <div @click.prevent="WebsiteFont('oswald')" class="col-md-4 mt-5">
              <div class="card">
                <div class="card-body">
                  <h1 class="display-4 oswald">Oswald</h1>
                </div>
                <div class="card-title oswald ml-3 mr-3">
                  <p class="lead">Select Oswald if you wish to have this font on your website.</p>
                </div>
              </div>
            </div>
            <div @click.prevent="WebsiteFont('roboto')" class="col-md-4 mt-5">
              <div class="card">
                <div class="card-body">
                  <h1 class="display-4 roboto">Roboto</h1>
                </div>
                <div class="card-title roboto ml-3 mr-3">
                  <p class="lead">Select Roboto if you wish to have this font on your website.</p>
                </div>
              </div>
            </div>
            <div @click.prevent="WebsiteFont('crimson')" class="col-md-4 mt-5">
              <div class="card">
                <div class="card-body">
                  <h1 class="display-4 crimson">Crimson</h1>
                </div>
                <div class="card-title crimson ml-3 mr-3">
                  <p class="lead">Select Crimson if you wish to have this font on your website.</p>
                </div>
              </div>
            </div>
            <div @click.prevent="WebsiteFont('abril')" class="col-md-4 mt-5">
              <div class="card">
                <div class="card-body">
                  <h1 class="display-4 abril">Abril</h1>
                </div>
                <div class="card-title abril ml-3 mr-3">
                  <p class="lead">Select Abril if you wish to have this font on your website.</p>
                </div>
              </div>
            </div>
            <div @click.prevent="WebsiteFont('opensans')" class="col-md-4 mt-5">
              <div class="card">
                <div class="card-body">
                  <h1 class="display-4 opensans">Open Sans</h1>
                </div>
                <div class="card-title opensans ml-3 mr-3">
                  <p class="lead">Select Open Sans if you wish to have this font on your website.</p>
                </div>
              </div>
            </div>
            <div @click.prevent="WebsiteFont('quicksand')" class="col-md-4 mt-5">
              <div class="card">
                <div class="card-body">
                  <h1 class="display-4 quicksand">Quicksand</h1>
                </div>
                <div class="card-title quicksand ml-3 mr-3">
                  <p class="lead">Select Quicksand if you wish to have this font on your website.</p>
                </div>
              </div>
            </div>
            <div @click.prevent="WebsiteFont('archivo')" class="col-md-4 mt-5">
              <div class="card">
                <div class="card-body">
                  <h1 class="display-6 archivo">Archivo</h1>
                </div>
                <div class="card-title archivo ml-3 mr-3">
                  <p class="lead">Select Archivo if you wish to have this font on your website.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="#steps2" v-if="currentSteps == 4" class="section">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12 mb-4">
              <p
                v-if="!saving"
                style="font-size: 24px;"
                class="lead"
              >You are sure of your settings ?</p>
              <p v-else style="font-size: 24px;" class="lead">Creating a new project...</p>
            </div>
            <div v-if="!saving" class="col-md-12 mt-5">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Project Name</th>
                    <th scope="col">Project Type</th>
                    <th scope="col">Your Colors</th>
                    <th scope="col">Chosen Font</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ name }}</td>
                    <td>{{ getProjectType }}</td>
                    <td>
                      <template v-for="color in colors">
                        <span class="color-rounded-sm" :style="getColor([color], true)"></span>
                      </template>
                    </td>
                    <td>{{ getFontName }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="saving" class="col-md-12 mt-5">
              <radar-spinner :animation-duration="2000" :size="60" color="#7619df" />
            </div>
            <div v-if="!saving" class="col-md-12 mt-5 text-center">
              <button @click="saveAndBuild" class="btn-style btn-shdw">Saves &amp; Build</button>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
import { RadarSpinner } from "epic-spinners";
const slugify = require("@sindresorhus/slugify");
export default {
  components: { RadarSpinner },
  data() {
    return {
      name: "", // The name of new website.
      type: "", // The type of website.
      rgb: "",
      saving: false,

      selectedColor: 0,
      colors: [
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff"
      ], // 5 colors of website.

      color1: "#ffffff",
      color2: "#ffffff",
      color3: "#ffffff",
      color4: "#ffffff",
      color5: "#ffffff",
      color6: "#ffffff",

      fontname: "", // The name of font.
      colors_class: null,

      steps: 4, // The number of step configuration.
      progression: 0, // The progress of wizard
      currentSteps: 1 // The current step
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    getProjectType() {
      switch (this.type) {
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
          return "Iphone & Android";
        case "android":
          return "Android Application";
        case "iphone":
          return "Iphone Application";
        case "web":
          return "Website";
      }
    },
    getFontName() {
      switch (this.fontname) {
        case "opensans":
          return "Open Sans";
        default:
          return this.fontname.charAt(0).toUpperCase() + this.fontname.slice(1);
      }
    }
  },
  methods: {
    saveAndBuild() {
      let _this = this;
      this.saving = true;
      window.onbeforeunload = null;
      let sites = this.$localStorage.get("Sites");

      let site = {
        id: this.generateId(),
        name: this.name,
        type: this.type,
        font: this.fontname,
        slug: slugify(this.name),
        colors: [
          this.color1,
          this.color2,
          this.color3,
          this.color4,
          this.color5,
          this.color6
        ],
        currentPage: 1,
        pages: [
          {
            active: true,
            sections: [
              {
                component: "Header",
                logo: {
                  text: this.name,
                  link: "#",
                  img: {
                    src: null,
                    alt: 'logo'
                  }
                },
                heading: {
                  display: true,
                  text: "Welcome to startup"
                },
                description: {
                  display: true,
                  text: "We can share, build or make for everyone with you."
                },
                button: {
                  Link: "#",
                  display: true,
                  text: "Learn More"
                },
                menu: [
                  {
                    text: "Home",
                    link: "#"
                  }
                ]
              }
            ]
          }
        ]
      };

      if (!sites) {
        this.$localStorage.set("Sites", [site]);
      } else {
        sites.push(site);
        this.$localStorage.set("Sites", sites);
      }

      setTimeout(function() {
        _this.$router.push({
          name: "builder",
          params: { slug: site.slug, id: site.id }
        });
      }, 2000);
    },
    getColor(color, ishex = false) {
      if (!ishex) {
        const [r, g, b, a] = color;
        return {
          backgroundColor: `rgba(${r},${g},${b},${a})`
        };
      } else {
        return {
          backgroundColor: `${color[0]}`
        };
      }
    },
    selectColor(item) {
      this.selectedColor = item + 1;
      this.rgb = this.colors[item];
    },
    previousStep() {
      if (this.currentSteps > 1) this.currentSteps--;
    },
    nextStep() {
      if (this.name == "") return this.animate("#startup-input", "bounce");
      this.currentSteps++;
    },
    animate(el, animation) {
      $(el)
        .removeClass()
        .addClass(animation + " animated")
        .one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function() {
            $(this).removeClass();
          }
        );
    },
    WebsiteType(type) {
      if (this.name == "") return this.animate("#startup-input", "bounce");
      this.type = type;
      this.nextStep();
    },
    WebsiteFont(fontname) {
      if (this.name == "") {
        this.animate("#startup-input", "bounce");
      } else {
        this.fontname = fontname;
        this.currentSteps = 4;
      }
    },
    cancel() {
      $("body").css("overflow", "auto");
      $(".setupWizard").hide();
      $(".navbar.main").show();
      $(".footer").show();

      this.name = "";
      this.type = "";
      this.colors = [
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff"
      ];
    }
  },
  watch: {
    rgb() {
      this.colors[this.selectedColor - 1] = this.rgb;
      switch (this.selectedColor) {
        case 1:
          this.color1 = this.rgb;
          break;
        case 2:
          this.color2 = this.rgb;
          break;
        case 3:
          this.color3 = this.rgb;
          break;
        case 4:
          this.color4 = this.rgb;
          break;
        case 5:
          this.color5 = this.rgb;
          break;
        case 6:
          this.color6 = this.rgb;
          break;
      }
    },
    name() {
      if (!name && this.currentSteps == 1) {
        this.progression = 0;
        this.currentSteps = 1;
      }
    },
    currentSteps() {
      switch (this.currentSteps) {
        case 1:
          this.progression = 0;
          this.name = "";
          this.type = "";
          break;
        case 2:
          this.progression = 30;
          break;
        case 3:
          this.progression = 60;
          break;
        case 4:
          this.progression = 100;
          break;
      }
    }
  },
  mounted() {
    $(".setupWizard").hide();
  }
};
</script>

<style lang="scss">
.radar-spinner {
  margin-left: auto;
  margin-right: auto;
}
</style>
