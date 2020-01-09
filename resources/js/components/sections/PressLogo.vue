<template>
  <div :class="currentSite.font" class="press-logo">
    <div class="press-logo-container">
      <h1>Nice to meet these companies</h1>
      <p>Some description or other for your favoritees companies!</p>
      <div class="logo-companies">
        <img src="/images/icons/hovereable-logo.png" alt="logo" />
        <img src="/images/icons/hovereable-logo.png" alt="logo" />
        <img src="/images/icons/hovereable-logo.png" alt="logo" />
        <img src="/images/icons/hovereable-logo.png" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["site"],
  data() {
    return {
      currentSite: this.site
    };
  }
};
</script>

<style lang="scss">
.press-logo {
  background: #fff;
  padding-top: 90px;
  padding-bottom: 80px;
  text-align: center;
  color: #000;
  .press-logo-container {
    max-width: 1024px;
    margin: 0 auto;
    h1 {
      color: #000;
      font-size: 3vw;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.8vw;
      color: rgba(#000, 0.45);
      margin-bottom: 40px;
    }
    .logo-companies {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      img {
        margin: 20px 80px;
        height: 80px;
        width: 80px;
      }
    }
  }
}
</style>
