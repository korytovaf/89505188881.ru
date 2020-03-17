const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const del = require('del');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

const jsFiles = [
    './src/js/jquery-3.4.1.min.js',
    './src/js/burger-menu.js',
    './src/js/owlCarousel.js',
    './src/js/jquery.formstyler.min.js',
    './src/js/jquery.validate.min.js',
    './src/js/popup__form.js',
    './src/js/jquery.inputmask.js',
]

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./src/sass/**/*.css', styles);
    gulp.watch('./src/sass/**/*.sass', styles);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./*.html').on('change', browserSync.reload);
}



function styles() {
    return gulp.src('./src/sass/style.sass')
    .pipe(sourcemaps.init())
    .pipe(sass())
//    .pipe(concat('all.css'))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
    }))
    
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourcemaps.write('./'))
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
gulp.task('dev', gulp.series('build','watch'));