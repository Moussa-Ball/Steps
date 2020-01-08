<template>
    <div :class="currentSite.font" class="press-logo">
        <h1>Nice to meet these companies</h1>
        <p>Some description or other for your favoritees companies!</p>
        <div class="logo-companies">
            <img src="/images/Logo.png" alt="logo">
        </div>
    </div>
</template>

<script>
export default {
    props: ["site"],
    data () {
        return {
            currentSite: this.site,
        }
    }
}
</script>

<style lang="scss">
    .press-logo {
        background: #fff;
        border-top: 1px solid rgba(#000000, 0.10);
        border-bottom: 1px solid rgba(#000000, 0.10);
        padding-top: 90px;
        padding-bottom: 80px;
        text-align: center;
        color: #000;
        h1 {
            color: #000;
            font-size: 4vw;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.8vw;
            color: rgba(#000, 0.45);
            margin-bottom: 40px;
        }
    }
</style>
