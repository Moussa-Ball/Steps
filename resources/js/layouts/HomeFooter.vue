<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="ready">
            <div class="container">
              <div class="row text-center">
                <div class="col-md-8">
                  <h2 class="text-white">Ready to start your startup website.</h2>
                  <h2 style="color: #0e1825;">Let’s Get Started!</h2>
                </div>
                <div class="col-md-4">
                  <router-link class="btn btn-white mt-3" to="/website">Get Started</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5 mb-5">
          <div class="ft-logo">
            <img src="/images/Logo.png" alt="logo" />
            <div class="footer-copyright">© 2019</div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="footer-widget">
            <div class="footer-title">Customers</div>
            <ul class="list-unstyled">
              <li>
                <a href="#">Domains</a>
              </li>
              <li>
                <a href="#">Website</a>
              </li>
              <li>
                <a href="#">Logos</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div class="footer-widget">
            <div class="footer-title">Further Information</div>
            <ul class="list-unstyled">
              <li>
                <router-link to="/privacy">Privacy</router-link>
              </li>
              <li>
                <router-link to="/terms">Terms</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <div class="footer-widget">
            <div class="footer-title">Follow us</div>
            <ul class="list-unstyled d-flex">
              <li>
                <a href="#">
                  <img class="social-img" src="/images/twitter.png" alt="twitter" />
                </a>
              </li>
              <li style="margin-left: 20px;">
                <a href="#">
                  <img class="social-img" src="/images/facebook.png" alt="facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
