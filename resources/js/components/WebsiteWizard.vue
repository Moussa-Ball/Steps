<template>
    <div class="setupWizard bounceIn">
        <nav class="navbar navbar-custom-style fixed-top navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
                <ul class="navbar-nav mr-auto">
                    <a v-if="currentSteps > 1 && currentSteps < steps" @click.prevent="previousStep" class="nav-link float-right" href="#">
                        <i class="fas fa-arrow-left" style="position: relative; top: 1px;"></i>
                        <span class="ml-2">Return</span>
                    </a>
                </ul>
                <ul class="navbar-nav">
                    <a @click.prevent="cancel" class="nav-link float-right" href="#">
                        <i class="fas fa-times"></i>
                    </a>
                </ul>
            </div>
        </nav>
        <div class="progress">
            <div class="progress-bar" :style="{width: progression + '%'}"></div>
        </div>
        <template>
            <section class="section" v-if="currentSteps == 1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <input id="startup-input" autocomplete="off" type="text" placeholder="What's Your Startup's Name" v-model="name">
                            <p>What are you making today ?</p>
                        </div>
                        <div class="col-md-3 mt-5" @click="WebsiteType('web')">
                            <div class="card">
                                <div class="card-body">
                                    <p><img src="/images/icons/website.svg" alt="website.svg"></p>
                                </div>
                                <div class="card-title">
                                    <h4>Web App</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mt-5" @click="WebsiteType('iphone')">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p><img style="width: 16% !important; height: 5% !important;" src="/images/icons/smartphone.svg" alt="smartphone.svg"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-title">
                                    <h4>Iphone App</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mt-5" @click="WebsiteType('android')">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p><img style="width: 14% !important; height: 5% !important;" src="/images/icons/android.svg" alt="android.svg"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-title">
                                    <h4>Android App</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mt-5" @click="WebsiteType('iphone-android')">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p><img src="/images/icons/Iphone-Android.svg" alt="Iphone-Android.svg"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-title">
                                    <h4>Iphone & Android</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mt-5" @click="WebsiteType('cross-platform')">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p><img src="/images/icons/cross-platform-app.svg" alt="cross-platform-app.svg"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-title">
                                    <h4>Cross Platform App</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mt-5" @click="WebsiteType('desktop')">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p><img src="/images/icons/pc.svg" alt="pc.svg"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-title">
                                    <h4>Desktop App</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mt-5" @click="WebsiteType('responsive')">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p><img src="/images/icons/responsive-app.svg" alt="responsive-app.svg"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-title">
                                    <h4>Responsive App</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mt-5" @click="WebsiteType('open-source-project')">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p><img src="/images/icons/open-source.svg" alt="open-source.svg"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-title">
                                    <h4>Open Source Project</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mt-5" @click="WebsiteType('something')">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p><img src="/images/icons/something.svg" alt="something.svg"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-title">
                                    <h4>Something</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mt-5" @click="WebsiteType('kickstar')">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p><img src="/images/icons/kickstar.svg" alt="kickstar.svg"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-title">
                                    <h4>Kickstar</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mt-5" @click="WebsiteType('chrome-extension')">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p><img src="/images/icons/chrome-extension.svg" alt="chrome-extension.svg"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-title">
                                    <h4>Chrome Extension</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mt-5" @click="WebsiteType('iphone-ipad')">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p><img src="/images/icons/iphone-ipad.svg" alt="iphone-ipad.svg"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-title">
                                    <h4>Ipad & Iphone App</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="#steps2" v-if="currentSteps == 2" class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <input id="startup-input" autocomplete="off" type="text" placeholder="What's Your Startup's Name" v-model="name">
                            <p>What Colors Best Suites Your Startup?</p>
                        </div>
                        <div class="col-md-3">
                            <verte display="widget" :rgbSliders="true"></verte>
                        </div>
                        <div class="col-md-9">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <span class="color-rounded" :style="rgba([0, 0, 0, 0.90])"></span>
                                </div>
                                <div>
                                    <span class="color-rounded" :style="rgba([0, 0, 0, 0.90])"></span>
                                </div>
                                <div>
                                    <span class="color-rounded" :style="rgba([0, 0, 0, 0.90])"></span>
                                </div>
                                <div>
                                    <span class="color-rounded" :style="rgba([0, 0, 0, 0.90])"></span>
                                </div>
                                <div>
                                    <span class="color-rounded" :style="rgba([0, 0, 0, 0.90])"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="#steps2" v-if="currentSteps == 3" class="section font-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <input id="startup-input" autocomplete="off" type="text" placeholder="What's Your Startup's Name" v-model="name">
                            <p>What Font Best Suites Your Startup?</p>
                        </div>
                        <div @click.prevent="WebsiteFont('cardo')" class="col-md-4 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="display-4 cardo">Cardo</h1>
                                </div>
                                <div class="card-title cardo ml-3 mr-3">
                                    <p class="lead">Select Cardo if you wish to have this font on your website.</p>
                                </div>
                            </div>
                        </div>
                        <div @click.prevent="WebsiteFont('lato')" class="col-md-4 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="display-4 lato">Lato</h1>
                                </div>
                                <div class="card-title lato ml-3 mr-3">
                                    <p class="lead">Select Lato if you wish to have this font on your website.</p>
                                </div>
                            </div>
                        </div>
                        <div @click.prevent="WebsiteFont('oswald')" class="col-md-4 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="display-4 oswald">Oswald</h1>
                                </div>
                                <div class="card-title oswald ml-3 mr-3">
                                    <p class="lead">Select Oswald if you wish to have this font on your website.</p>
                                </div>
                            </div>
                        </div>
                        <div @click.prevent="WebsiteFont('roboto')" class="col-md-4 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="display-4 roboto">Roboto</h1>
                                </div>
                                <div class="card-title roboto ml-3 mr-3">
                                    <p class="lead">Select Roboto if you wish to have this font on your website.</p>
                                </div>
                            </div>
                        </div>
                        <div @click.prevent="WebsiteFont('crimson')" class="col-md-4 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="display-4 crimson">Crimson</h1>
                                </div>
                                <div class="card-title crimson ml-3 mr-3">
                                    <p class="lead">Select Crimson if you wish to have this font on your website.</p>
                                </div>
                            </div>
                        </div>
                        <div @click.prevent="WebsiteFont('abril')" class="col-md-4 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="display-4 abril">Abril</h1>
                                </div>
                                <div class="card-title abril ml-3 mr-3">
                                    <p class="lead">Select Abril if you wish to have this font on your website.</p>
                                </div>
                            </div>
                        </div>
                        <div @click.prevent="WebsiteFont('opensans')" class="col-md-4 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="display-4 opensans">Open Sans</h1>
                                </div>
                                <div class="card-title opensans ml-3 mr-3">
                                    <p class="lead">Select Open Sans if you wish to have this font on your website.</p>
                                </div>
                            </div>
                        </div>
                        <div @click.prevent="WebsiteFont('quicksand')" class="col-md-4 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="display-4 quicksand">Quicksand</h1>
                                </div>
                                <div class="card-title quicksand ml-3 mr-3">
                                    <p class="lead">Select Quicksand if you wish to have this font on your website.</p>
                                </div>
                            </div>
                        </div>
                        <div @click.prevent="WebsiteFont('archivo')" class="col-md-4 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="display-6 archivo">Archivo</h1>
                                </div>
                                <div class="card-title archivo ml-3 mr-3">
                                    <p class="lead">Select Archivo if you wish to have this font on your website.</p>
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>
            </section>
        </template>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: "", // The name of new website.
                type: "", // The type of website.
                accent: "",
                colors: null, // 5 colors of website.
                fontname: "", // The name of font.
                colors_class: null,
                heading: "Your landing page",
                subheading: "Hello guy's, welcome to my landing page. Today i'm gonna show you my work.",
                
                steps: 4, // The number of step configuration.
                progression: 0, // The progress of wizard
                currentSteps: 1, // The current step
            }
        },
        methods: {
            rgba (color) {
                const [r, g, b, a] = color;
                return {
                    backgroundColor: `rgba(${r},${g},${b},${a})`
                };
            },
            previousStep () {
                if (this.currentSteps > 1) {
                    this.currentSteps -= 1
                    
                    if(this.progression == 40) {
                        this.progression = 0
                    } else {
                        this.progression -= 20
                    }
                }
                if (this.currentSteps == 1) {
                    this.type = ""
                }
                if (this.currentSteps == 2) {
                    this.colors = null
                }
                if (this.currentSteps == 3) {
                    this.fontname = ""
                }
            },
            animate (el, animation) {
                $(el).removeClass().addClass(animation + ' animated')
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                        function(){ $(this).removeClass(); });
            },
            WebsiteType (type) {
                if (this.name == "") {
                    this.animate('#startup-input', 'bounce')
                }
                else {
                    this.type = type;
                    this.currentSteps = 2
                }
            },
            WebsiteColors (colors, classname) {
                if (this.name == "") {
                    this.animate('#startup-input', 'bounce')
                }
                else {
                    this.colors = colors
                    this.colors_class = classname
                    this.currentSteps = 3
                }
            },
            WebsiteFont (fontname) {
                if (this.name == "") {
                    this.animate('#startup-input', 'bounce')
                }
                else {
                    this.fontname = fontname
                    this.currentSteps = 4
                }
            },
            cancel () {
                $("body").css("overflow", "auto");
                $('.setupWizard').hide();
                $('.navbar.main').show();
                $('.footer').show();
            }
        },
        watch: {
            currentSteps () {
                switch (this.currentSteps) {
                    case 2:
                        this.progression = 33.3
                    break;
                    case 3:
                        this.progression = 66.6
                    break;
                    case 4:
                        this.progression = 100
                    break;
                }
            },
            colors () {
                if (this.colors != null) {
                    this.accent = this.colors[0]
                }
            }
        },
        mounted () {
            $('.setupWizard').hide();
        }
    }
</script>
