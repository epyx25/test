var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	plumber = require('gulp-plumber'),
	del = require('del');


require('babel-core/register');


gulp.task('default', ['conf'], function () {
	return gulp.src('src/app/**/*.js')
		.pipe(plumber())
		.pipe(babel())
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('conf', ['package'], function () {
	return gulp.src('./src/conf/*')
		.pipe(gulp.dest('dist/conf'));
});

gulp.task('package', ['clean'], function () {
	return gulp.src('./package.json')
		.pipe(gulp.dest('dist/'));
});

gulp.task('clean', function () {
	return del([
		'dist/**/*'
	]);
});
