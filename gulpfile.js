const { src, dest, watch, parallel, series} = require('gulp');
const scss                = require('gulp-sass')(require('sass'));
const concat              = require('gulp-concat');
const autoprefixer        = require('gulp-autoprefixer');
const uglify              = require('gulp-uglify');
const imagemin            = require('gulp-imagemin');
const svgSprite           = require('gulp-svg-sprite');
const replace             = require('gulp-replace');
const cheerio             = require('gulp-cheerio');
const fileInclude         = require('gulp-file-include');
const del                 = require('del');
const browserSync         = require('browser-sync').create();

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/',
    },
    notify: false,
  });
}

function svgSprites() {
  return src('app/images/icons/*.svg')
    .pipe(
      cheerio({
        run: ($) => {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {
          xmlMode: true
        },
      })
    )
    .pipe(replace('&gt;', '>'))
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      })
    )
    .pipe(dest('app/images'));
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({
      outputStyle: 'compressed'
    }))
    .pipe(concat('style.min.css'))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        grid: true,
      })
    )
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return src([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/mixitup/dist/mixitup.js',
      'node_modules/slick-carousel/slick/slick.js',
      'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
      'node_modules/rateyo/src/jquery.rateyo.js',
      'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
      'node_modules/@fancyapps/ui/dist/fancybox.umd.js',
      'app/js/main.js',
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}

function images() {
  return src('app/images/**/*.*')
    .pipe(
      imagemin([
        imagemin.gifsicle({
          interlaced: true
        }),
        imagemin.mozjpeg({
          quality: 75,
          progressive: true
        }),
        imagemin.optipng({
          optimizationLevel: 5
        }),
        imagemin.svgo({
          plugins: [{
            removeViewBox: true
          }, {
            cleanupIDs: false
          }],
        }),
      ])
    )
    .pipe(dest('dist/images'));
}

const htmlInclude = () => {
  return src(['app/html/*.html']) 
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file',
    }))
    .pipe(dest('app'))
    .pipe(browserSync.stream());
}

function build() {
  return src(['app/**/*.html', 'app/css/style.min.css', 'app/js/main.min.js'], {
    base: 'app',
  }).pipe(dest('dist'));
}

function cleanDist() {
  return del('dist');
}

function watching() {
  watch(['app/images/icons/*.svg'], svgSprites);
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/html/**/*.html'], htmlInclude);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.svgSprites = svgSprites;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.htmlInclude = htmlInclude;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, build);

exports.default = parallel(htmlInclude, svgSprites, styles, scripts, browsersync, watching);