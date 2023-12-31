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

// .sass('src/sass/newTab.scss', 'dist/css')
// .react()

mix
.ts('src/js/background.ts', 'dist2/js/')
.ts('src/js/content.ts', 'dist2/js/')
.ts('src/js/options.ts', 'dist2/js/')
.ts('src/js/data.tsx', 'dist2/js/')
.copy('src/config/*', 'dist2/')
.copy('src/html/*', 'dist2/html/')
