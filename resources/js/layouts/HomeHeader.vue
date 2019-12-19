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
  }
};
</script>
