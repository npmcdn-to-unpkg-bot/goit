var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function () {
    return gulp.src('js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('js-out/'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('js/*.js', ['scripts']);
});