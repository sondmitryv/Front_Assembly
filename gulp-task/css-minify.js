module.exports = function (gulp, plugins, helpers) {
    return function() {
        return gulp.src(plugins.config.get('minify.path'))

            .pipe(plugins.plumber({errorHandler: helpers.errorHandler}))
            .pipe(plugins.postcss(helpers.processors))
            .pipe(gulp.dest(plugins.config.get('minify.resultPath')))
            .pipe(plugins.notify("CSS cкомпилирован!"));
    }
};