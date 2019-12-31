<template>
    <button @click.prevent.stop="scrollToTop" class="btn-back-to-top">
        <i class="fas fa-angle-up"></i>
    </button>
</template>

<script>
    export default {
        methods: {
            scrollToTop () {
                 $('.btn-back-to-top').click(function () {
                    $('html,body').stop().animate({scrollTop: 0}, 1000);
                })
            }
        },
        mounted () {
            if ($(window).scrollTop() > 250) 
            {
                $('.btn-back-to-top').addClass('isVisible')
            }

            $(window).scroll(function() {
                if ($(window).scrollTop() > 250) 
                {
                    $('.btn-back-to-top').addClass('isVisible')
                } else {
                    $('.btn-back-to-top').removeClass('isVisible')
                }
            }) 
        }
    }
</script>
