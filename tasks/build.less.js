module.exports = function (gulp, plugins) {
    return function () {
        return gulp.src([
            './css/main.css'
        ])
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.less({strictMath: true}))
        .pipe(plugins.cleanCss({keepSpecialComments : 0}))
        .pipe(plugins.concat('all.min.css'))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('./public'));
    };
};