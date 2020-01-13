<template>
  <div :class="currentSite.font" class="cta">
    <div class="cta-container">
      <h1>Don't let your chance now!</h1>
      <p>We don't need to know how to code because we will manage all of them for you.</p>
      <div class="cta-group-button">
        <a href="#" class="cta-btn" :style="{ color: currentSite.colors[0] }">Get Started</a>
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
.cta {
  background: #fff;
  padding-top: 90px;
  padding-bottom: 80px;
  text-align: center;
  color: #000;
  .cta-container {
    max-width: 1024px;
    margin: 0 auto;
    h1 {
      color: #000;
      font-size: 4.5vw;
      font-weight: 100;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.8vw;
      color: rgba(#000, 0.45);
      margin-bottom: 40px;
    }
    .cta-group-button {
      margin-top: 60px;
      .cta-btn {
        font-weight: 600;
        padding: 15px 25px;
        background-color: #fff;
        box-shadow: 0 1px 6px rgba(#000000, 0.25);
        transition: box-shadow 300ms;
        &:hover {
          text-decoration: none;
          box-shadow: 0 1px 7px rgba(#000000, 0.45);
        }
      }
    }
  }
}
</style>
