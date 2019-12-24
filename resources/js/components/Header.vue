<template>
  <div :class="currentSite.font">
    <div class="header-theme" :style="{ background: currentSite.colors[0] }">
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
    <div
      :class="{'heading-section-one': currentSite.type == 'web', 'heading-section-two': currentSite.type != 'web'}"
      :style="{ background: currentSite.colors[0] }"
    >
      <div class="section-container">
        <div>
          <h4>Welcome to startup</h4>
          <p>We can share, build or make for everyone with you.</p>
          <a href="#" :style="{ color: currentSite.colors[0] }">Learn More</a>
        </div>
        <div v-if="currentSite.type != 'web'" class="section-media"></div>
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
          <form>
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
          </form>
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
  methods: {
    saveLogo() {
      this.name.old = this.name.new;
      this.$emit("change", this.name.old);
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
.header-theme {
  padding: 10px 0;
  .header-theme-container {
    margin: 0 auto;
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
    justify-content: space-between;
    .logo {
      color: #fff;
      font-size: 36px;
      line-height: 74px;
      text-decoration: none;
      &:hover {
        outline: 2px solid rgba(#7619df, 0.65) !important;
      }
    }
    .nav-container {
      cursor: pointer;
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
      &:hover {
        outline: 2px solid rgba(#7619df, 0.65) !important;
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
      text-align: left;
      position: relative;
      top: 40px;
    }
    a {
      padding: 15px 25px;
      background-color: #fff;
      margin-top: 50px !important;
      margin-bottom: 50px !important;
      position: relative;
      top: 80px;
      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }
    .section-media {
      background-color: #ababab;
      padding: 150px 260px;
      position: relative;
      text-align: center;
      max-height: 300px;
      max-width: 500px;
      top: 40px;
    }
  }
}
</style>
