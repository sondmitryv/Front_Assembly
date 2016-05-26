module.exports = function (gulp, plugins, helpers) {
    return function() {
        plugins.browserSync.init({
            server: {
                baseDir: "./production"
            }
        });
        gulp.watch(plugins.config.get('watch.img'), ['img:imagemin']);
        gulp.watch(plugins.config.get('watch.fonts'), ['fonts:build']);
        gulp.watch(plugins.config.get('watch.minify'), ['css:minify']);
        gulp.watch(plugins.config.get('watch.jsMin'), ['js:app:minify']);
        gulp.watch(plugins.config.get('watch.buildCss')).on('change', plugins.browserSync.reload);
        gulp.watch(plugins.config.get('watch.buildJs')).on('change', plugins.browserSync.reload);
        gulp.watch(plugins.config.get('watch.fileinclude'), ['fileinclude']);
        gulp.watch("production/*.html").on('change', plugins.browserSync.reload);
    }
};