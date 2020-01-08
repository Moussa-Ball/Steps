<template>
  <div class="websitePreview">
    <nav class="navbar navbar-custom-style fixed-top navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <a class="navbar-brand" @click.prevent="closePreview" href="#">
          <router-link class="nav-link" to="/website">
            <img src="/images/Logo.png" alt="logo" />
          </router-link>
        </a>
        <div>
          <ul class="navbar-nav mr-right d-flex flex-column flex-md-row justify-content-between">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                id="nav-tooltip-font"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Changes font"
              >
                <i class="fas fa-font"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                id="nav-tooltip-preview"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Preview"
              >
                <i class="fas fa-eye"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                id="nav-tooltip-publish"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Publish"
              >
                <i class="fas fa-globe-americas"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                @click.prevent.stop="showModal('settings')"
                class="nav-link"
                href="#"
                id="nav-tooltip-settings"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Settings"
              >
                <i class="fas fa-cog"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="page__sidebar">
      <li v-for="(page, index) in site.pages" class="rounded-circle" :class="{'selected': page.active}">{{ index + 1 }}</li>
      <button
        v-tippy="{
                    arrow: true,
                    arrowType: 'round',
                    animation: 'fade',
                    placement: 'right'
                }"
        content="Add Page"
        class="add rounded-circle"
      >+</button>
    </div>
    <div class="preview">
      <div v-for="(item, index) in site.pages[site.currentPage - 1].section" :key="index" :site="site" v-model="site" :is="item.component"></div>
    </div>
    <div class="section-tags mb-5">
      <h4>What would you like to add next?</h4>
      <h5>Add your next website block. Once you're finished</h5>
      <div class="mb-5"></div>
      <div class="container">
        <div class="row text-center">
          <div class="col-md-2">
            <a @click.prevent="addPressLogo" href="#">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-newspaper"></i>
                </div>
                <div class="card-title">Press Logo</div>
              </div>
            </a>
          </div>
          <div class="col-md-2">
            <a href="#">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-users"></i>
                </div>
                <div class="card-title">Testimonials</div>
              </div>
            </a>
          </div>
          <div class="col-md-2">
            <a href="#">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-dollar-sign"></i>
                </div>
                <div class="card-title">Pricing</div>
              </div>
            </a>
          </div>
          <div class="col-md-2">
            <a href="#">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-question-circle"></i>
                </div>
                <div class="card-title">Faq</div>
              </div>
            </a>
          </div>
          <div class="col-md-2">
            <a href="#">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-stream"></i>
                </div>
                <div class="card-title">Team</div>
              </div>
            </a>
          </div>
          <div class="col-md-2">
            <a href="#">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-video"></i>
                </div>
                <div class="card-title">CTA</div>
              </div>
            </a>
          </div>
          <div class="col-md-2 mt-5">
            <a href="#">
              <div class="card">
                <div class="card-body">
                  <i class="fab fa-medium-m"></i>
                </div>
                <div class="card-title">Medium</div>
              </div>
            </a>
          </div>
          <div class="col-md-2 mt-5">
            <a href="#">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-list-alt"></i>
                </div>
                <div class="card-title">Checklist</div>
              </div>
            </a>
          </div>
          <div class="col-md-2 mt-5">
            <a href="#">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-building"></i>
                </div>
                <div class="card-title">Features</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <modal name="settings" :adaptive="true" height="auto" transition="pop-out">
      <div class="card card-custom">
        <h5 class="card-header card-header-custom d-flex justify-content-between">
          Settings
          <a @click.prevent="closeModal('settings')" href="#" style="color: #7619df;">
            <img width="15" height="15" src="/images/cross-out.svg" alt="cross" />
          </a>
        </h5>
        <div class="card-body"></div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      site: {},
      sites: [],
    };
  },
  methods: {
    addPressLogo () {
      this.site.pages[this.site.currentPage - 1].section.push({component: 'PressLogo'})
    },
    showModal(name) {
      this.$modal.show(name);
    },
    closeModal(name) {
      this.$modal.hide(name);
    }
  },
  mounted() {
    $("#nav-tooltip-font").tooltip({ boundary: "window" });
    $("#nav-tooltip-preview").tooltip({ boundary: "window" });
    $("#nav-tooltip-publish").tooltip({ boundary: "window" });
    $("#nav-tooltip-settings").tooltip({ boundary: "window" });
  },
  created() {
    let _this = this;
    let id = this.$route.params.id;
    let slug = this.$route.params.slug;
    this.sites = this.$localStorage.get("Sites");

    if (this.sites) {
      this.site = this.sites.filter(function(site) {
        return site.id == id && site.slug == slug;
      })[0];
    } else {
      _this.$router.push({ name: "404" });
    }
  }
};
</script>
