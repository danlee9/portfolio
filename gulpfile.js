var gulp = require('gulp'),
		clean = require('gulp-clean'),
		usemin = require('gulp-usemin'),
		minify = require('gulp-minify-css'),
		uglify = require('gulp-uglify'),
		sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('./public/css/*.scss')
		.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./public/css'))
});

gulp.task('sass:watch', function() {
	gulp.watch('./public/css/*.scss', ['sass']);
});

gulp.task('clean', function() {
	gulp.src('./build', {read: false})
		.pipe(clean());
});

gulp.task('copy', ['clean'], function() {
	gulp.src(['./public/pictonic/**/*.eot',
    './public/pictonic/**/*.svg',
    './public/pictonic/**/*.svgz',
    './public/pictonic/**/*.ttf',
    './public/pictonic/**/*.woff',
    './public/bower_components/font-awesome/**/*.eot',
    './public/bower_components/font-awesome/**/*.svg',
    './public/bower_components/font-awesome/**/*.ttf',
    './public/bower_components/font-awesome/**/*.woff',
    './public/bower_components/font-awesome/**/*.woff2',
    './public/bower_components/font-awesome/**/*.otf',
    './public/**/*.png',
    './public/**/*.PNG',
    './public/**/*.jpg'])
		.pipe(gulp.dest('./build'));
});

gulp.task('usemin', ['copy'], function() {
	gulp.src('./public/index.html')
		.pipe(usemin({
			css: [minify()],
			js: [uglify()]
		}))
			.pipe(gulp.dest('./build'));
});

gulp.task('build', ['usemin']);