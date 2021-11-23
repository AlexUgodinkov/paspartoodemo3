const gulp = require('gulp');
const themeKit = require('@shopify/themekit');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src('styles/custom-styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets'))
});

gulp.task('watch', function(){
    gulp.watch('styles/custom-styles.scss', gulp.parallel('sass'))
});

