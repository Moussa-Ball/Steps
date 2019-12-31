<template>
  <div>
    <div v-if="isOnline">
      <router-view name="header"></router-view>
      <main>
        <fade-transition origin="center" mode="out-in" :duration="250">
          <router-view />
        </fade-transition>
      </main>
      <BackToTop></BackToTop>
      <router-view name="footer"></router-view>
    </div>
    <div class="text-center mt-5" v-show="isOffline">
      <img class="offline-svg" src="./assets/svg/offline.svg" alt="Offline" />
      <h1 class="display-2">Ho oops!</h1>
      <h1 class="display-4">You lost your internet connection.</h1>
    </div>
  </div>
</template>
<script>
import BackToTop from "./components/BackToTop"
import { FadeTransition } from "vue2-transitions";
export default {
  components: {
    FadeTransition, BackToTop
  }
};
</script>

<style lang="scss">
.offline-svg {
  width: 100px;
  height: 100px;
}
</style>
