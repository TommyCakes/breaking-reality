"use strict";

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server:  'app'
    });

    gulp.watch("app/source/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile SASS files
gulp.task('sass', function() {
    return gulp.src("app/source/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/assets/stylesheets"))
        // .pipe(browserSync.stream());
        .pipe(browserSync.reload({
            stream: true
          }))
});

gulp.task('default', ['serve']);
