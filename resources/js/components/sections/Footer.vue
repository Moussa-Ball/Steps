<template>
  <div :class="currentSite.font" class="footer-component">
    <div class="footer-container">
      <div class="footer-social-section">
        <h1>Follow Square</h1>
        <a href="#">
          <img src="/images/facebook.png" alt="facebook" />
        </a>
        <a href="#">
          <img src="/images/linkedin.png" alt="linkedin" />
        </a>
        <a href="#">
          <img src="/images/twitter.png" alt="twitter" />
        </a>
      </div>
      <div
        class="footer-copyright-section"
        :style="{ background: currentSite.colors[0],  color: currentSite.colors[5]}"
      >
        <h1>Copyright © 2019 Steps.</h1>
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
.footer-component {
  background: #fff;
  padding-top: 90px;
  padding-bottom: 80px;
  text-align: center;
  color: #000;
  border-top: 0.5px solid rgba(#000, 0.25);
  .footer-container {
    margin: 0 auto;
    .footer-social-section {
      h1 {
        font-size: 18px;
        margin-bottom: 30px;
      }
      a {
        margin-left: 10px;
        margin-right: 10px;
        img {
          height: 40px;
          width: 40px;
        }
      }
    }
    .footer-copyright-section {
      margin-top: 60px;
      h1 {
        padding: 40px 0;
        font-size: 22px;
        font-size: 18px !important;
      }
    }
  }
}
</style>
