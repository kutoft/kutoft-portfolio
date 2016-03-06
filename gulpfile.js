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
    path = require("path");

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/foundation-icon-fonts',
  'bower_components/motion-ui/src',
  'bower_components/OwlCarouselBower/owl-carousel',
  'bower_components/normalize-scss/sass',
  'bower_components/support-for/sass'
];

// kitInclude: grab partials from templates and render out html files
// ==========================================
gulp.task('kitInclude', function() {
  return  gulp.src('./src/templates/**/*.kit')
    .pipe(kit())
    .pipe(gulp.dest('build/'))
    .pipe(livereload())
    .pipe(notify({ message: 'Kit Files Compiled' }));
});

//  Sass: compile sass to css task - uses Libsass
//===========================================
gulp.task('sass', function() {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass({
      includePaths: [].concat(bourbon, sassPaths),
      style: 'expanded',
      sourceComments: 'map',
      errLogToConsole: true
    }))
    .pipe(autoprefixer('last 2 version', 'ie >= 9'))
    .pipe(gulp.dest('build/assets/css'))
    .pipe(notify({ message: 'SASS Updated' }));
});

gulp.task('libs', function() {
  var jsFiles = ['src/js/*'];
  var filterJS = gulpFilter('**/*.js', { restore: true });

  return gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(filterJS)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('build/assets/libs'));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('build/assets/js'));
});


//  Watch and Livereload using Libsass
//===========================================
gulp.task('watch', function() {
 livereload.listen({ basePath: 'dist' });
 gulp.watch('**/*.scss', ['sass']);
 gulp.watch('**/*.kit', ['kitInclude']);

});



//  Default Gulp Task
//===========================================
gulp.task('default', ['kitInclude', 'sass', 'libs', 'scripts', 'watch'], function() {

});
