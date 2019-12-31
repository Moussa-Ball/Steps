<template>
  <nav class="navbar main fixed-top navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link class="nav-link" to="/">
          <img src="/images/Logo.png" alt="logo" />
        </router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" tag="li" to="/website">
            <a class="nav-link">Website</a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/logo">
            <a class="nav-link">Logo</a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/name">
            <a class="nav-link">Name</a>
          </router-link>
        </ul>
        <ul class="navbar-nav" v-if="connected == false">
          <li class="nav-item">
            <a href="/login" id="login" class="nav-link">Login</a>
          </li>
          <li class="nav-item">
            <a href="/register" id="register" class="nav-link">Register</a>
          </li>
        </ul>
        <ul class="navbar-nav" v-if="connected == true">
          <li class="nav-item dropdown">
              <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{ user.name }}
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Upgrade</a>
                  <a class="dropdown-item" href="#">Settings</a>
                  <div class="dropdown-divider"></div>
                  <a id="#logout" class="dropdown-item" href="/logout"
                      onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                      Logout
                  </a>
                  <form id="logout-form" action="/logout" method="POST" style="display: none;">
                      <input type="hidden" name="_token" id="csrf-token" :value="token" />
                  </form>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Avatar from 'vue-avatar'
export default {
  data () {
      return {
        user: {},
        connected: false,
        token: document.head.querySelector('meta[name="csrf-token"]').content
      }
  },
  components: {
      Avatar
  },
  mounted() {
    $("#login").addClass("nav-link-white");
    $("#register").addClass("nav-link-white");

    if (this.$router.currentRoute.name == "home") {
      $("html, body").animate({ scrollTop: 0 }, 600);
      if ($(window).scrollTop() == 0) {
        $("#login").addClass("nav-link-white");
        $("#register").addClass("nav-link-white");
        $("#navbarDropdown").addClass("nav-link-white");
        $(".navbar").removeClass("navbar-shadow navbar-border");
        $("#logout").addClass("nav-link-white");
      }

      if ($(window).scrollTop() > 20) {
        $("#login").removeClass("nav-link-white");
        $("#register").removeClass("nav-link-white");
        $("#navbarDropdown").removeClass("nav-link-white");
        $(".navbar").addClass("navbar-shadow navbar-border");
      }

      $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
          $(".navbar").addClass("navbar-shadow navbar-border");
          $("#register").removeClass("nav-link-white");
          $("#login").removeClass("nav-link-white");
          $("#navbarDropdown").removeClass("nav-link-white");
        } else {
          $(".navbar").removeClass("navbar-shadow navbar-border");
          $("#register").addClass("nav-link-white");
          $("#login").addClass("nav-link-white");
          $("#navbarDropdown").addClass("nav-link-white");
        }
      });
    }
  },
  async created () {
    let _this = this
    await this.axios.get('/api/user').then(response => {
      _this.connected = true
      _this.user = response.data
    }).catch(error => {
      _this.user = false
      _this.connected = false
    })

    this.axios.get('test')
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
  }
};
</script>
