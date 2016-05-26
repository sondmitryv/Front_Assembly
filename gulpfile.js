const gulp = require('gulp'),
    helpers = require('./gulp-task/helpers'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins({
        DEBUG: false,
        pattern: ['*'],
        rename: {
            'gulp-stylus': 'stylus',
            'gulp-sourcemaps': 'sourcemaps',
            'gulp-plumber': 'plumber',
            'gulp-file-include': 'fileinclude',
            'gulp-postcss': 'postcss',
            'css-mqpacker': 'mqpacker',
            'browser-sync': 'browserSync',
            'gulp-newer': 'cache',
            'gulp-imagemin': 'imagemin',
            'gulp-webp': 'webp',
            'imagemin-pngquant': 'png',
            'imagemin-jpegtran': 'jpg',
            'gulp-babel': 'babel'
        }
    });

function getTask(task) {
    return require('./gulp-task/' + task)(gulp, plugins, helpers);
}
gulp.task('img:imagemin', getTask('img-imagemin'));

gulp.task('css:stylus', getTask('css-stylus'));
gulp.task('css:minify', ['css:stylus', 'img:imagemin'], getTask('css-minify'));

gulp.task('fileinclude', getTask('fileinclude'));

gulp.task('js:app:compress', getTask('js-app-compress'));
gulp.task('js:app:minify', ['js:app:compress'], getTask('js-app-minify'));

gulp.task('fonts:build', getTask('fonts'));

gulp.task('watch', getTask('watch'));

gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
});

// Default action
gulp.task('default', function () {
    gulp.start('watch');
}); 