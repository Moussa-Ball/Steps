<template>
  <div :class="currentSite.font" class="feature">
    <div class="feature-item">
      <img src="/images/icons/hovereable-logo.png" alt="logo" />
      <h1>Title of this feature</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
    </div>
    <div class="feature-item">
      <img src="/images/icons/hovereable-logo.png" alt="logo" />
      <h1>Title of this feature</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
    </div>
    <div class="feature-item">
      <img src="/images/icons/hovereable-logo.png" alt="logo" />
      <h1>Title of this feature</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
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
.feature {
  background: #fff;
  padding-top: 90px;
  padding-bottom: 80px;
  text-align: center;
  color: #000;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .feature-item {
    img {
      margin: 20px 80px;
      height: 80px;
      width: 80px;
    }
    h1 {
      font-size: 26px;
      margin: 20px 0;
    }
    p {
      width: 300px;
      font-size: 17px;
      margin-top: 10px;
      font-weight: 100;
      text-align: center;
      color: rgba(#000, 0.65);
    }
  }
}
</style>
