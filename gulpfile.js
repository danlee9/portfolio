var gulp = require('gulp'),
		clean = require('gulp-clean'),
		usemin = require('gulp-usemin'),
		minify = require('gulp-minify-css'),
		uglify = require('gulp-uglify'),
		sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('./public/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/'))
});

gulp.task('sass:watch', function() {
	gulp.watch('./public/*.scss', ['sass']);
});