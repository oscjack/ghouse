module.exports = function (gulp, plugins) {
    return function () {
        return gulp.src([
            'js/libs/*.js',
            'js/plugins/*.js',
            'js/app.js'
        ])
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.uglify())
        .pipe(plugins.concat('all.min.js'))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('public'));
    };
};