var gulp = require('gulp'),
    bower = require('gulp-bower'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon').includePaths,
    kit = require('gulp-kit');
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    path = require("path");

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

// kitInclude: grab partials from templates and render out html files
// ==========================================
gulp.task('kitInclude', function() {
  return  gulp.src('templates/**/*.kit')
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
    .pipe(livereload())
    .pipe(notify({ message: 'SASS Updated' }));
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
gulp.task('default', ['kitInclude', 'sass', 'watch'], function() {

});

