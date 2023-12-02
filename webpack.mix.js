const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('src/index.js', 'dist/js')
//     .sourceMaps()
//     .react()


mix.ts('src/newTab.tsx', 'dist/js')
.sass('src/sass/newTab.scss', 'dist/css')
    .react()
