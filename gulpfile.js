'use strict';

let gulp = require('gulp');
let watch = require('gulp-watch');
let browserify = require('browserify');
var babelify = require('babelify');
let es6ify = require('es6ify');
let source = require('vinyl-source-stream');
let sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('react', function () {
    var bundler = browserify('./src/js/App.react.js');
    bundler.transform(babelify);
    bundler.transform(es6ify);

    bundler.bundle()
        .on('error', function (err) {
            console.log(err.toString());
            this.emit("end");
        })
        .pipe(source('./js/bundle.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    watch('./src/js/**/**/*.js', function () {
        gulp.start('react');
    });

    watch('./src/sass/**/*.scss', function () {
        gulp.start('sass');
    });
});

gulp.task('default', [ 'watch' ]);
