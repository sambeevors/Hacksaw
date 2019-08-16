const mix = require('laravel-mix')
const build = require('./tasks/build.js')
const path = require('path')
require('laravel-mix-purgecss')

mix.disableSuccessNotifications()
mix.setPublicPath('source/assets/')
mix.webpackConfig({
  plugins: [
    build.jigsaw,
    build.browserSync(),
    build.watch([
      'source/**/*.md',
      'source/**/*.php',
      'source/_assets/**/*',
      '!source/**/_tmp/*',
      '!source/assets/**/*'
    ]),
    build.imageMin()
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '../assets/js/[name].js'
  }
})

mix
  .options({
    processCssUrls: false,
    postCss: [
      require('postcss-easy-import', {
        prefix: '_'
      }),
      require('tailwindcss')(),
      require('precss')({
        unresolved: 'ignore'
      }),
      require('autoprefixer')
    ]
  })
  .postCss('source/_assets/css/main.css', 'css/main.css')
  .purgeCss({
    folders: ['source']
  })
  .js('source/_assets/js/main.js', 'source/assets/js')
  .copy('source/_assets/img', 'source/assets/img', false)
  .version(['source/assets/img'])
