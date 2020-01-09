<template>
  <div :class="currentSite.font" class="pricing">
    <div class="pricing-container">
      <h1>Membership Plans</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
      <div class="pricing-list">
        <div class="pricing-card">
          <div class="pricing-card-header">
            <h1>Pricing Name</h1>
            <p>
              <span>$10</span> month
            </p>
          </div>
          <div class="pricing-card-body">
            <div class="pricing-card-item">One short program of item</div>
            <hr />
            <div class="pricing-card-item">One short program of item</div>
            <hr />
            <div class="pricing-card-item">One short program of item</div>
            <hr />
            <div class="pricing-card-item">One short program of item</div>
          </div>
          <div class="pricing-card-footer">
            <a href="#">Placeholder</a>
          </div>
        </div>
        <div class="pricing-card">
          <div class="pricing-card-header">
            <h1>Pricing Name</h1>
            <p>
              <span>$10</span> month
            </p>
          </div>
          <div class="pricing-card-body">
            <div class="pricing-card-item">One short program of item</div>
            <hr />
            <div class="pricing-card-item">One short program of item</div>
            <hr />
            <div class="pricing-card-item">One short program of item</div>
            <hr />
            <div class="pricing-card-item">One short program of item</div>
          </div>
          <div class="pricing-card-footer">
            <a href="#">Placeholder</a>
          </div>
        </div>
        <div class="pricing-card">
          <div class="pricing-card-header">
            <h1>Pricing Name</h1>
            <p>
              <span>$10</span> month
            </p>
          </div>
          <div class="pricing-card-body">
            <div class="pricing-card-item">One short program of item</div>
            <hr />
            <div class="pricing-card-item">One short program of item</div>
            <hr />
            <div class="pricing-card-item">One short program of item</div>
            <hr />
            <div class="pricing-card-item">One short program of item</div>
          </div>
          <div class="pricing-card-footer">
            <a href="#">Placeholder</a>
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
.pricing {
  background: #fff;
  padding-top: 90px;
  padding-bottom: 80px;
  text-align: center;
  color: #000;
  .pricing-container {
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
    .pricing-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .pricing-card {
        height: auto;
        width: 300px;
        margin-top: 40px;
        margin-right: 50px;
        text-align: center;
        padding: 40px;
        box-shadow: 0 0 1px rgba(#000, 0.65);
        &:last-child {
          margin-right: 0;
        }
        .pricing-card-header {
          text-align: center;
          h1 {
            font-size: 18px;
            font-weight: 700;
          }
          p {
            span {
              color: #000;
            }
          }
        }
        .pricing-card-body {
          text-align: center;
          .pricing-card-item {
            margin-bottom: 5px;
          }
          margin-bottom: 40px;
        }
        .pricing-card-footer {
          padding: 10px 0;
          a {
            background: #7619df;
            color: #fff;
            padding: 15px 40px;
            box-shadow: 0 0 3px rgba(#000, 0.45);
            transition: background-color 1s;
            transition: color 1s;
            &:hover {
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
</style>
