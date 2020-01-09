<template>
  <div :class="currentSite.font" class="team">
    <div class="team-container">
      <h1>Our team</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
      <div class="team-list">
        <div class="team-card">
          <div class="team-card-header">
            <img src="/images/avatar.png" alt="avatar1" />
            <h1>James Ambert</h1>
            <p>Web Developer</p>
          </div>
          <div class="team-card-body">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos
            </p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-card-header">
            <img src="/images/avatar.png" alt="avatar1" />
            <h1>James Ambert</h1>
            <p>Web Developer</p>
          </div>
          <div class="team-card-body">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos
            </p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-card-header">
            <img src="/images/avatar.png" alt="avatar1" />
            <h1>James Ambert</h1>
            <p>Web Developer</p>
          </div>
          <div class="team-card-body">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos
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
.team {
  background: #fff;
  padding-top: 90px;
  padding-bottom: 80px;
  text-align: center;
  color: #000;
  .team-container {
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
    .team-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 80px !important;
      .team-card {
        background: #fff;
        margin-right: 50px;
        margin-bottom: 60px;
        padding: 20px 20px 0 20px;
        width: 300px;
        box-shadow: 0 0 5px rgba(#000, 0.1);
        &:last-child {
          margin-right: 0;
        }
        .team-card-header {
          display: block;
          text-align: center;
          img {
            margin: 20px 0;
            height: 70px;
            width: 70px;
            border-radius: 50%;
          }
          h1 {
            font-size: 18px;
          }
          p {
            margin-top: -15px;
            font-size: 16px;
          }
        }
        .team-card-body {
          p {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
