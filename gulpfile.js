var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('build:css', loadTask('build.less'));
gulp.task('build:script', loadTask('build.script'));

//default task
gulp.task('build', [
    'build:css',
    'build:script'
]);

function loadTask(task) {
    return require('./tasks/' + task)(gulp, plugins);
}