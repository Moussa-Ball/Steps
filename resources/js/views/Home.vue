<template>
  <div>
    <header class="header">
      <div class="right-square"></div>
      <div class="container h-100">
        <div class="d-flex text-center h-100">
          <div class="my-auto w-100 text-black header-title-container">
            <h2 class="header-title">
              Build Your Startup Website In Less Time.
              <br />Easy to do and easy to get.
            </h2>
            <router-link class="btn btn-style btn-primary mt-5" to="/website">Try Now</router-link>
          </div>
        </div>
        <!-- Scroll Down -->
        <div class="chevron-container">
          <a href="#" v-scroll-to="'#work-section'" class="text-decoration-none">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <span class="text">Learn More</span>
          </a>
        </div>
      </div>
    </header>
    <section id="work-section" class="section work-section mb-5">
      <div class="line"></div>
      <div class="container">
        <div class="section-title mb-5">
          <h3>
            How it
            <strong>Work</strong>
          </h3>
          <p>How works with steps</p>
        </div>
        <div class="row">
          <div class="col-6 col-sm-6 col-md-3">
            <div class="index-rounded mb-3">1</div>
            <h4>Build your website</h4>
            <p>Build your own website as you wish.</p>
          </div>
          <div class="col-6 col-sm-6 col-md-3">
            <div class="index-rounded mb-3">2</div>
            <h4>Build your logo</h4>
            <p>Build your own logo as you wish.</p>
          </div>
          <div class="col-6 col-sm-6 col-md-3">
            <div class="index-rounded mb-3">3</div>
            <h4>Get a domain</h4>
            <p>Buy domain where we assign you one to test.</p>
          </div>
          <div class="col-6 col-sm-6 col-md-3">
            <div class="index-rounded mb-3">4</div>
            <h4>Enjoy!</h4>
            <p>After completing all the steps, you can enjoy it.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-title mb-5">
          <h3>
            Our
            <strong>Features</strong>
          </h3>
          <p>We will do what is necessary for you</p>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="card mb-5">
              <img class="card-img-top" src="/images/Seo.svg" alt="features" />
              <br />
              <br />
              <div class="card-body">
                <h5 class="card-title">Marketing & SEO</h5>
                <p
                  class="card-text"
                >No need to worry about your ranking on Google. We take care of everything.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card mb-5">
              <img class="card-img-top" src="/images/coding.svg" alt="features" />
              <br />
              <br />
              <div class="card-body">
                <h5 class="card-title">No Coding Skills</h5>
                <p
                  class="card-text"
                >No need to have any experience at all in coding. Steps is so feature-rich and easy to use</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card mb-5">
              <img class="card-img-top" src="/images/performance.svg" alt="features" />
              <br />
              <br />
              <div class="card-body">
                <h5 class="card-title">High Performance</h5>
                <p
                  class="card-text"
                >Steps makes your website incredibly fast! We proudly get 100/100 score in Google Page Speed Insights!</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card mb-5">
              <img class="card-img-top" src="/images/responsive.svg" alt="features" />
              <br />
              <br />
              <div class="card-body">
                <h5 class="card-title">Responsive</h5>
                <p
                  class="card-text"
                >We guarantee you fully responsive themes. Smartphone, tablet, laptop and desktop.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section cta-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="section-title">
              <strong>Try on the touch</strong>
              <h1>Watch video presentation</h1>
              <p class="text-white">Watch our video presentation</p>
            </div>
          </div>
          <div class="col-md-6 text-center">
            <a href="#" @click.prevent.stop="showLightBoxVideo">
              <img class="play-button" src="/images/play.png" alt="play" />
            </a>
          </div>
        </div>
      </div>
      <LightBoxVideo></LightBoxVideo>
    </section>
    <section class="section mt-5">
      <div class="container">
        <div class="section-title mb-5">
          <h3>
            Flexible
            <strong>Pricing</strong> Plan
          </h3>
          <p>Chose your best pricing plan from list</p>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6 offset-md-2">
            <div class="card mb-3">
              <div class="card-body pricing">
                <div class="row mt-4 mb-4">
                  <div class="col-md-12">
                    <h2>Free</h2>
                  </div>
                  <div class="col-md-12">
                    <span class="price-usd">$</span>
                    <span class="price-number">0</span>
                    <span class="price-mounth-or-year"></span>
                  </div>
                  <div class="col-md-12">
                    <ul class="list-unstyled">
                      <li>Unlimited Steps Websites</li>
                      <li>Hosting on Steps Subdomain</li>
                      <li>Google Analytics Integration</li>
                      <li>Automatic HTTPS (via Let's Encrypt)</li>
                      <li>
                        <del>Includes Small Ad for Steps</del>
                      </li>
                      <li>
                        <del>Hosting With Your Own URL</del>
                      </li>
                      <li>
                        <del>Downloadable Websites</del>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-12">
                    <router-link class="btn btn-style" to="/website">Get Started</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card mb-3">
              <div class="card-body pricing">
                <div class="row mt-4 mb-4">
                  <div class="col-md-12">
                    <h2>Premium</h2>
                  </div>
                  <div class="col-md-12">
                    <span class="price-usd">$</span>
                    <span class="price-number">39</span>
                    <span class="price-mounth-or-year">/Year</span>
                  </div>
                  <div class="col-md-12">
                    <ul class="list-unstyled">
                      <li>Unlimited Steps Websites</li>
                      <li>Hosting on Steps Subdomain</li>
                      <li>Google Analytics Integration</li>
                      <li>Automatic HTTPS (via Let's Encrypt)</li>
                      <li>Includes Small Ad for Steps</li>
                      <li>Hosting With Your Own URL</li>
                      <li>Downloadable Websites</li>
                    </ul>
                  </div>
                  <div class="col-md-12">
                    <a href="#" class="btn btn-style">Upgrade</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LightBoxVideo from "../components/LightboxVideo";
export default {
  components: {
    LightBoxVideo
  },
  methods: {
    showLightBoxVideo() {
      $(".navbar").addClass("d-none");
      $("body").addClass("no-any-scroll");
      $(".lightbox-video").addClass("show");
    }
  },
  mounted() {
    $("body").css("overflow-x", "hidden");
    $("#login").addClass("nav-link-white");
    $("#register").addClass("nav-link-white");
    $("#navbarDropdown").addClass("nav-link-white");
  }
};
</script>
