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
              <li class="breadcrumb-item active" aria-current="page">Website</li>
            </ol>
          </nav>
        </div>
        <div class="col-md-6 mt-5 mb-5" v-if="false">
          <div @click.prevent="launchPreview" class="website-card">
            <div class="preview-card">
              <div class="container pt-3 pb-3">
                <div class="row">
                  <div class="col-md-6">
                    <h5>Music</h5>
                    <p class="pt-2 mt-4">
                      Hey there, nice to
                      <br />meet you. I’m
                      <br />your website!
                    </p>
                    <button class="btn btn-style mt-3 mb-2" style="padding: 10px;">
                      <img src="/img/icons/apple.png" style="width: 30px; heigh: 30px;" alt="logo" />
                      <span style="position: relative; top: 3px;">Download on App Store</span>
                    </button>
                  </div>
                  <div class="col-md-6">
                    <img class="float-right mt-5 mr-5" src="/img/icons/iphone.png" alt="iphone" />
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5"></div>
            <h5 class="text-center subtitle mt-5">Music</h5>
            <h5 class="text-center subtitle" style="opacity: .75;">Unpublished</h5>
          </div>
        </div>
        <div class="col-md-6 mt-5 mb-5">
          <div class="website-card" @click.prevent="addWebsite">
            <div class="pt-5"></div>
            <div class="pt-5"></div>
            <div class="ellipse-add">+</div>
            <div class="pt-5"></div>
            <div class="pt-4"></div>
            <h5 class="text-center subtitle">Create a new website.</h5>
            <h5 class="text-center subtitle" style="opacity: .75;">Click Here</h5>
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
      websites: []
    };
  },
  components: { WebsiteWizard },
  methods: {
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
    }
  },
  created() {
    this.$localStorage.set("websites", [
      {
        projectName: "Steps"
      }
    ]);
    this.websites = this.$localStorage.get("websites");
  }
};
</script>
