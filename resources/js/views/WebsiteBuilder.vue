<template>
  <div class="websitePreview">
    <!-- BEGIN NAVBAR SETTINGS -->
    <nav class="navbar navbar-custom-style fixed-top navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <router-link class="nav-link" to="/website">
            <img src="/images/Logo.png" alt="logo" />
          </router-link>
        </a>
        <div>
          <ul
            class="navbar-nav navbar-nav-settings mr-right d-flex flex-column flex-md-row justify-content-between"
          >
            <li class="nav-item">
              <a
                class="nav-link"
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
    <!-- END NAVBAR SETTINGS -->

    <!-- BEGIN NUMBER OF PAGE AND ADD PAGE -->
    <div class="page__sidebar">
      <li
        v-for="(page, index) in site.pages"
        class="rounded-circle"
        :key="index"
        :class="{'selected': page.active}"
      >{{ index + 1 }}</li>
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
    <!-- END NUMBER OF PAGE AND ADD PAGE -->

    <!-- BEGIN LIST OF COMPONENTS -->
    <div class="preview">
      <template v-for="(item, index) in pages[currentPage].sections">
        <component :key="index" :site="site" :index="index" v-model="site" :is="item.component"></component>
      </template>
    </div>
    <!-- END LIST OF COMPONENTS -->

    <!-- BEGIN SECTION TAG -->
    <div class="section-tags mb-5">
      <h4>What would you like to add next?</h4>
      <h5>Add your next website block. Once you're finished</h5>
      <div class="mb-5"></div>
      <div class="container">
        <div class="row text-center">
          <div class="col-md-2">
            <a @click.prevent="addComponent(site, {component: 'PressLogo'})">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-newspaper"></i>
                </div>
                <div class="card-title">Press Logo</div>
              </div>
            </a>
          </div>
          <div class="col-md-2">
            <a @click.prevent="addComponent(site, {component: 'Testimonial'})">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-users"></i>
                </div>
                <div class="card-title">Testimonials</div>
              </div>
            </a>
          </div>
          <div class="col-md-2">
            <a @click.prevent="addComponent(site, {component: 'Pricing'})">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-dollar-sign"></i>
                </div>
                <div class="card-title">Pricing</div>
              </div>
            </a>
          </div>
          <div class="col-md-2">
            <a @click.prevent="addComponent(site, {component: 'Faq'})">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-question-circle"></i>
                </div>
                <div class="card-title">Faq</div>
              </div>
            </a>
          </div>
          <div class="col-md-2">
            <a @click.prevent="addComponent(site, {component: 'Team'})">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-stream"></i>
                </div>
                <div class="card-title">Team</div>
              </div>
            </a>
          </div>
          <div class="col-md-2">
            <a @click.prevent="addComponent(site, {component: 'CTA'})">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-video"></i>
                </div>
                <div class="card-title">CTA</div>
              </div>
            </a>
          </div>
          <div class="col-md-2 mt-5">
            <a @click.prevent="addComponent(site, {component: 'Medium'})">
              <div class="card">
                <div class="card-body">
                  <i class="fab fa-medium-m"></i>
                </div>
                <div class="card-title">Medium</div>
              </div>
            </a>
          </div>
          <div class="col-md-2 mt-5">
            <a @click.prevent="addComponent(site, {component: 'Checklist'})">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-list-alt"></i>
                </div>
                <div class="card-title">Checklist</div>
              </div>
            </a>
          </div>
          <div class="col-md-2 mt-5">
            <a @click.prevent="addComponent(site, {component: 'Features'})">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-building"></i>
                </div>
                <div class="card-title">Features</div>
              </div>
            </a>
          </div>
          <div class="col-md-2 mt-5">
            <a @click.prevent="addComponent(site, {component: 'Footer'})">
              <div class="card">
                <div class="card-body">
                  <i class="fas fa-shoe-prints"></i>
                </div>
                <div class="card-title">Footer</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- END SECTION TAG -->

    <modal name="settings" :adaptive="true" height="auto" transition="pop-out">
      <div class="card card-custom">
        <h5 class="card-header card-header-custom d-flex justify-content-between">
          Settings
          <a
            @click.prevent="closeModal('settings')"
            style="color: #7619df; cursor: pointer;"
          >
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
      sites: []
    };
  },
  computed: {
    pages() {
      return this.site.pages;
    },
    currentPage() {
      return this.site.currentPage - 1;
    }
  },
  watch: {
    site() {
      if (this.site) {
        this.saveWebsite(this.site);
      }
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

    if (this.sites === undefined) {
      this.sites = this.$localStorage.remove("Sites");
      _this.$router.push({ name: "404" });
    }

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
