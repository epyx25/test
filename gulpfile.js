var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    del = require('del');


require('babel-core/register');


gulp.task('default', ['conf'], function() {
    return gulp.src('src/**/*.js')
        .pipe(plumber())
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('conf', ['clean'], function() {
    return gulp.src('./src/conf/*')
        .pipe(gulp.dest('dist/conf'));
});

gulp.task('clean', function() {
    return del([
        'dist/**/*'
    ]);
});
