<template>
  <div :class="currentSite.font" class="medium">
    <div class="medium-container">
      <h1>Our medium</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
      <div class="medium-list">
        <div class="medium-card">
          <div class="medium-img">
            <img src="https://via.placeholder.com/350x200?text=350x200" alt="medium-blog" />
          </div>
          <div class="medium-body">
            <h1>Blog Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </p>
          </div>
        </div>
        <div class="medium-card">
          <div class="medium-img">
            <img src="https://via.placeholder.com/350x200?text=350x200" alt="medium-blog" />
          </div>
          <div class="medium-body">
            <h1>Blog Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </p>
          </div>
        </div>
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
.medium {
  background: #fff;
  padding-top: 90px;
  padding-bottom: 80px;
  text-align: center;
  color: #000;
  .medium-container {
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
    .medium-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .medium-card {
        width: 350px;
        margin-top: 40px;
        margin-right: 30px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(#000, 0.15);
        &:last-child {
          margin-right: 0;
        }
        .medium-img {
          img {
            width: 350px;
            height: 200px;
            border-radius: 4px 4px 0 0;
          }
        }
        .medium-body {
          h1 {
            font-size: 24px;
            text-align: left;
            margin-top: 25px;
            margin-right: 25px;
            margin-left: 25px;
          }
          p {
            font-size: 17px;
            text-align: left;
            margin-left: 25px;
            margin-right: 25px;
            margin-bottom: 25px;
          }
        }
      }
    }
  }
}
</style>
