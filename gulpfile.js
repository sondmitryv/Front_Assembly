const gulp = require('gulp'),
    helpers = require('./gulp-task/helpers'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins({
        DEBUG: false,
        pattern: ['*'],
        rename: {
            'gulp-sass': 'sass',
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
            'gulp-babel': 'babel',
            'postcss-scss':'postcssSass',
        }
    });

function getTask(task) {
    return require('./gulp-task/' + task)(gulp, plugins, helpers);
}
gulp.task('img:imagemin', getTask('img-imagemin'));
gulp.task('css:sass', getTask('css-sass'));
gulp.task('css:minify', ['css:sass', 'img:imagemin'], getTask('css-minify'));
gulp.task('fileinclude', getTask('fileinclude'));
gulp.task('js:app:compress', getTask('js-app-compress'));
gulp.task('js:app:minify', ['js:app:compress'], getTask('js-app-minify'));
gulp.task('fonts:build', getTask('fonts'));
gulp.task('watch', getTask('watch'));
gulp.task('clean', function(cb) {
    del(['production/css/', 'production/css-min/', 'production/js/', 'production/js-min/'], cb)
});

// Default action
gulp.task('default', function () {
    gulp.start('watch');
}); 