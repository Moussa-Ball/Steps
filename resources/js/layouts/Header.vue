<template>
  <nav
    class="navbar main border-bottom navbar-custom-style fixed-top navbar-expand-lg navbar-light bg-white"
  >
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
        <ul class="navbar-nav">
          <router-link class="nav-item" tag="li" to="/login">
            <a id="login" class="nav-link">Login</a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/register">
            <a id="register" class="nav-link">Register</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      if (to.name != "home") {
        $(".navbar").removeClass("navbar-shadow navbar-border");
        $("#register").removeClass("nav-link-white");
        $("#navbarDropdown").removeClass("nav-link-white");
        $("#login").removeClass("nav-link-white");
      }
    }
  },
  mounted() {
    $(".navbar").removeClass("navbar-shadow navbar-border");
    $("#register").removeClass("nav-link-white");
    $("#navbarDropdown").removeClass("nav-link-white");
    $("#login").removeClass("nav-link-white");

    $(window).scroll(function() {
      $(".navbar").removeClass("navbar-shadow navbar-border");
      $("#register").removeClass("nav-link-white");
      $("#navbarDropdown").removeClass("nav-link-white");
      $("#login").removeClass("nav-link-white");
    });
  }
};
</script>
