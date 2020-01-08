<template>
  <div class="header-builder">
    <div
      :class="currentSite.font"
      class="header-theme"
      :style="{ background: currentSite.colors[0] }"
    >
      <div class="header-theme-container">
        <a href="#" @click.prevent="showModal('logoSetup')" class="logo">
          {{
          name.old
          }}
        </a>
        <div @click.prevent="showModal('menuSetup')" class="nav-container">
          <a href="#">Accueil</a>
        </div>
      </div>
    </div>
    <div :class="getCls" :style="{ background: currentSite.colors[0], font: currentSite.font }">
      <div class="section-container">
        <div @click.prevent="showModal('headingSetup')" class="heading-subheading">
          <h4>Welcome to startup</h4>
          <p>We can share, build or make for everyone with you.</p>
          <a
            href="#"
            class="btn-header"
            @click.prevent="showModal('headingSetup')"
            :style="{ color: currentSite.colors[0] }"
          >Learn More</a>
        </div>
        <div v-if="currentSite.type != 'web'" class="section-media">
          <img
            src="https://via.placeholder.com/468x60?text=Visit+Blogging.com+NowC/O https://placeholder.com/"
            alt="Gallery"
          />
        </div>
      </div>
    </div>
    <modal name="logoSetup" :adaptive="true" height="auto" transition="pop-out">
      <div class="card card-custom">
        <h5 class="card-header card-header-custom d-flex justify-content-between">
          Logo
          <a @click.prevent="closeModal('logoSetup')" href="#" style="color: #7619df;">
            <img width="15" height="15" src="/images/cross-out.svg" alt="cross" />
          </a>
        </h5>
        <div class="card-body">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !currentSite.name }"
              id="name"
              v-model="name.new"
            />
          </div>
          <div class="form-group">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFileLangHTML" />
              <label
                class="custom-file-label"
                for="customFileLangHTML"
                data-browse="Browse"
              >Choose a logo.</label>
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
              <label class="custom-control-label" for="customRadio1">Use name</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio2">Use logo image</label>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-primary float-right btn-style btn-shdw rounded-0 btn-modal"
            @click.prevent="saveLogo"
          >Saves</button>
        </div>
      </div>
    </modal>
    <modal name="menuSetup" :adaptive="true" height="auto" transition="pop-out">
      <div class="card card-custom">
        <h5 class="card-header card-header-custom d-flex justify-content-between">
          Menu
          <a @click.prevent="closeModal('menuSetup')" href="#" style="color: #7619df;">
            <img width="15" height="15" src="/images/cross-out.svg" alt="cross" />
          </a>
        </h5>
        <div class="card-body"></div>
      </div>
    </modal>
    <modal name="headingSetup" :adaptive="true" height="auto" transition="pop-out">
      <div class="card card-custom">
        <h5 class="card-header card-header-custom d-flex justify-content-between">
          Headers
          <a @click.prevent="closeModal('headingSetup')" href="#" style="color: #7619df;">
            <img width="15" height="15" src="/images/cross-out.svg" alt="cross" />
          </a>
        </h5>
        <div class="card-body"></div>
      </div>
    </modal>
    <modal name="buttonSetup" :adaptive="true" height="auto" transition="pop-out">
      <div class="card card-custom">
        <h5 class="card-header card-header-custom d-flex justify-content-between">
          Button
          <a @click.prevent="closeModal('buttonSetup')" href="#" style="color: #7619df;">
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
  props: ["site"],
  data() {
    return {
      currentSite: this.site,
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
      this.name.old = this.name.new;
      this.currentSite.name = this.name.old
      this.$emit("change", this.currentSite);
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

</style>
