<template>
  <div :class="currentSite.font" class="faq">
    <div class="faq-container">
      <h1>Frequently Asked Question</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
      <div class="faq-item">
        <h1>First question?</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
      </div>
      <div class="faq-item">
        <h1>Second question?</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
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
.faq {
  background: #fff;
  padding-top: 90px;
  padding-bottom: 80px;
  text-align: center;
  color: #000;
  .faq-container {
    max-width: 1024px;
    margin: 0 auto;
    h1 {
      margin: 0 auto;
      color: #000;
      font-size: 3vw;
      margin-bottom: 20px;
    }
    p {
      margin: 0 auto;
      font-size: 1.8vw;
      color: rgba(#000, 0.45);
      margin-bottom: 40px;
    }
    .faq-item {
      h1 {
        display: block;
        font-size: 26px;
      }
      p {
        font-size: 16px;
        font-weight: 100;
        text-align: center;
      }
    }
  }
}
</style>
