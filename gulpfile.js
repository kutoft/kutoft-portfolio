var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon').includePaths,
    kit = require('gulp-kit');
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    mainBowerFiles = require('gulp-main-bower-files'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gulpFilter = require('gulp-filter'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    sourcemaps = require('gulp-sourcemaps'),
    path = require("path");

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/foundation-icon-fonts',
  'bower_components/motion-ui/src',
  'bower_components/OwlCarouselBower/owl-carousel',
  'bower_components/normalize-scss/sass',
  'bower_components/support-for/sass',
  'bower_components/animate.css'
];

gulp.task('kitInclude', function() {
  return  gulp.src('./src/templates/**/*.kit')
    .pipe(kit())
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload())
    .pipe(notify({ message: 'Kit Files Compiled' }));
});

gulp.task('styles', function() {
  return gulp.src('./src/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [].concat(bourbon, sassPaths),
      style: 'compressed',
      sourceComments: 'map',
      errLogToConsole: true
    }))
    .pipe(autoprefixer('last 2 version', 'ie >= 9'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/assets/css'))
    .pipe(connect.reload())
    .pipe(notify({ message: 'SASS Updated' }));
});

gulp.task('libs', function() {
  var filterJS = gulpFilter('**/*.js', { restore: true });

  return gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(filterJS)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('build/assets/libs'))
    .pipe(connect.reload())
    .pipe(notify({ message: 'Libs Updated' }));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('build/assets/js'))
      .pipe(connect.reload())
      .pipe(notify({ message: 'Scripts Updated' }));
});

gulp.task('images', function () {
    return gulp.src('src/images/**/*')
        .pipe(newer('build/assets/images'))
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build/assets/images'))
        .pipe(connect.reload())
        .pipe(notify({ message: 'Images Compressed' }));
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});


//  Watch and Livereload using Libsass
//===========================================
gulp.task('watch', function() {

  gulp.watch('src/templates/**/*.kit', ['kitInclude']);
  gulp.watch('src/sass/**/*.scss', ['styles']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/images/**/*', ['images']);

});



//  Default Gulp Task
//===========================================
gulp.task('default', ['kitInclude', 'styles', 'libs', 'scripts', 'images', 'watch', 'connect'], function() {

});
