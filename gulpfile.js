'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('html', function(){
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.parallel('sass', 'html'));

gulp.task('watch', function () {
    browserSync.init({
        server:"./dist/"
    });
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
    gulp.watch("./src/*.html", gulp.series('html')).on('change', browserSync.reload);
});