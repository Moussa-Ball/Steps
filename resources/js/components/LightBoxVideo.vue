<template>
  <div class="lightbox-video">
    <div class="container">
      <i @click.prevent="hideVideoLightBox" class="fas fa-times video-cross-icon"></i>
      <div class="embed-responsive video embed-responsive-16by9">
        <iframe
          id="youtube-cta"
          class="embed-responsive-item"
          src="https://www.youtube.com/embed/Dzu_bpCcfuA"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideVideoLightBox() {
      $(".navbar").removeClass("d-none");
      $(".lightbox-video").removeClass("show");
      let src = $("#youtube-cta").attr("src");
      $("#youtube-cta").attr("src", "");
      $("#youtube-cta").attr("src", src);
      $("body").removeClass("no-any-scroll");
    }
  }
};
</script>
