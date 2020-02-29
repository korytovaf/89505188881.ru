const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();

const jsFiles = [
    './src/js/jquery-3.4.1.min.js',
    './src/js/burger-menu.js',
    './src/js/owlCarousel.js',
    './src/js/jquery.formstyler.min.js',
    './src/js/jquery.validate.min.js',
    './src/js/popup__form.js',
]

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./src/css/**/*.css', styles);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./*.html').on('change', browserSync.reload);
}



function styles() {
    return gulp.src('./src/css/**/*.css')
    .pipe(concat('all.css'))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
    }))
    
    .pipe(cleanCSS({
        level: 2
    }))

    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}



function scripts(){
    return gulp.src(jsFiles)
    .pipe(concat('all.js'))
    .pipe(uglify())

    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
}

function clian() {
    return del(['build/*'])
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clian, gulp.parallel(styles, scripts)));
gulp.task('dev', gulp.series('build','watch' ));