'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var browserify = require('browserify');
var reactify = require('reactify');
var stream = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('react', function () {
    var sources = './src/js/main.js';
    var bundler = browserify(sources);
    bundler.transform(reactify);

    bundler.bundle()
        .pipe(stream('bundle.js'))
        .pipe(gulp.dest('./dist/'));

});

gulp.task('watch', function () {
    watch('./src/js/**/*.js', function () {
        gulp.start('react');
    });
    
    watch('./src/sass/**/*.scss', function () {
        gulp.start('sass');
    });
});


gulp.task('default', [ 'watch' ]);
