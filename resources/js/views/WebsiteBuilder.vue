<template>
    <div class="websitePreview">
        <nav
            class="navbar navbar-custom-style fixed-top navbar-expand-lg navbar-light bg-white"
        >
            <div class="container-fluid">
                <a class="navbar-brand" @click.prevent="closePreview" href="#">
                    <router-link class="nav-link" to="/website">
                        <img src="/images/Logo.png" alt="logo" />
                    </router-link>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {};
</script>
