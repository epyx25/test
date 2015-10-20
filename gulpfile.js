var gulp = require('gulp'),
babel = require('gulp-babel'),
mocha = require('gulp-mocha'),
uglify = require('gulp-uglify'),
watch = require('gulp-watch'),
istanbul = require('gulp-istanbul'),
plumber = require('gulp-plumber'),
jshint = require('gulp-jshint'),
del = require('del');

gulp.task('default',['lint','clean'], function () {
  return gulp.src('src/**/*.js')
  .pipe(plumber())
  .pipe(babel())
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});

gulp.task('clean',function(){
  return del([
    'dist/**/*'
  ]);
});

gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
  .pipe(jshint({esnext:true}))
  .pipe(jshint.reporter('default'));
});

gulp.task('pre-test',['default'], function () {
  return gulp.src(['dist/app/**/*.js'])
  .pipe(plumber())
  .pipe(istanbul({includeUntested: true}))
  .pipe(istanbul.hookRequire());
});

gulp.task('test',['pre-test'], function () {
  return gulp.src('dist/test/**/*.js')
  .pipe(plumber())
  .pipe(mocha())
  .pipe(istanbul.writeReports());
});

gulp.task('watch', function () {
  watch('src/**/*.js', function(){
    gulp.start('test');
  });
});
