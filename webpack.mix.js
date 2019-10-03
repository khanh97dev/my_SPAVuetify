let mix = require('laravel-mix');
const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin');
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

mix.js('resources/js/app.js', 'public/js')
   .stylus('resources/stylus/app.styl', 'public/css');

mix.webpackConfig(webpack => ({
    resolve: {
      extensions: ['.js', '.json', '.vue', '.ts'],
      alias: {
        '~': path.join(__dirname, './resources/js'),
        '$comp': path.join(__dirname, './resources/js/components')
      }
    },
    plugins: [
      new VueAutoRoutingPlugin({
        // Path to the directory that contains your page components.
        pages: './resources/js/pages',

        // A string that will be added to importing component path (default @/pages/).
        importPrefix: '~/pages/'
      }),
      new webpack.EnvironmentPlugin (
        ['APP_URL']
      )
    ]
  })
)

mix.browserSync(process.env.APP_URL)
