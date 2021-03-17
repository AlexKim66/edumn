let mix = require("laravel-mix");
const path = require("path");

require("laravel-mix-merge-manifest");

mix.webpackConfig({
    output: {
        chunkFilename: mix.inProduction()
            ? "js/chunks/[name].[chunkhash].js"
            : "js/chunks/[name].js"
    },

    resolve: {
        alias: {
            modules: path.resolve(__dirname, "./node_modules"),
            vue$: "vue/dist/vue.common.js"
        },
        extensions: ["*", ".js", ".ts", ".vue", ".json"],
        symlinks: false
    }
});

mix.options({
    processCssUrls: false
}).setPublicPath("public");

console.log("Compiling - client only app");
mix.js("resources/assets/web/index.js", "public/assets/web/js/app.js").react();
mix.sass("resources/assets/web/scss/style.scss", "public/assets/web/css/app.css");
mix.extract(
    [
        "axios",
        "react",
        "react-dom"
    ],
    "public/assets/web/js/vendor.js"
);

if (mix.inProduction()) {
    mix.version();
}

mix.mergeManifest();
