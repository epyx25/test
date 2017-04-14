const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	sourcemaps = require('gulp-sourcemaps'),
	plumber = require('gulp-plumber'),
	del = require('del');

gulp.task('default', ['conf'], () => gulp.src('src/app/**/*.js')
	.pipe(plumber())
	.pipe(babel())
	.pipe(uglify())
	.pipe(gulp.dest('dist')));

gulp.task('conf', ['package'], () => gulp.src('./src/conf/*').pipe(gulp.dest('dist/conf')));

gulp.task('package', ['clean'], () => gulp.src(['./package.json']).pipe(gulp.dest('dist/')));

gulp.task('clean', () => del(['dist/**/*']));
