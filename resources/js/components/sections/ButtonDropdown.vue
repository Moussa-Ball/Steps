<template>
  <div class="more-action" v-click-outside="hide">
    <fade-transition>
      <div v-if="show" class="dropdown-menu-btn">
        <button v-if="currentIndex > 1">Move Up</button>
        <button
          v-if="currentIndex > 0 && currentSite.pages[currentSite.currentPage - 1].section.length > 2"
        >Move Down</button>
        <button>Edit</button>
        <button v-if="currentIndex > 0">Remove</button>
      </div>
    </fade-transition>
    <button @click="show = !show" class="btn-dropdown-action"></button>
  </div>
</template>

<script>
export default {
  props: ["site", "index"],
  data() {
    return {
      show: false
    };
  },
  computed: {
    currentSite() {
      return this.site;
    },
    currentIndex() {
      return this.index;
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    hide() {
      this.show = false;
    }
  }
};
</script>

<style lang="scss">
.more-action {
  .dropdown-menu-btn {
    background: #fff;
    transform: translate3d(0, calc(-100% - 15px), 0);
    padding: 4px;
    margin-bottom: 120px;
    position: absolute;
    right: 30px;
    z-index: 1000;
    box-shadow: 0 1px 3px rgba(#000, 0.25);
    button {
      display: block;
      background: transparent;
      width: 120px;
      padding: 4px;
      border: none;
      outline: none;
      transition: background-color 200ms;
      &:hover {
        background: #7619df;
        color: #fff;
      }
    }
  }
  .btn-dropdown-action {
    background-color: #fff;
    background-image: url(/images/icons/open-menu.png);
    background-position: 10px 10px;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    border: none;
    outline: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    text-align: center;
    font-size: 600;
    box-shadow: 0 1px 6px rgba(#404040, 0.45);
    position: absolute;
    right: 30px;
    &:hover,
    &:focus {
      border: none;
      outline: none;
    }
  }
}
</style>
