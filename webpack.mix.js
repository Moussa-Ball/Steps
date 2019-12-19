const mix = require("laravel-mix");

mix.webpackConfig({
    devServer: {
        overlay: true
    }
});

mix.disableNotifications()
    .js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .options({
        autoprefixer: {
            options: {
                browsers: [
                    'last 6 versions',
                ]
            }
        }
    });

if (mix.inProduction()) {
    mix.minify("public/js/app.js");
    mix.version();
}
