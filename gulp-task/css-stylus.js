module.exports = function (gulp, plugins, helpers) {
    return function() {
        return gulp.src(plugins.config.get('stylus.buildPath'))
            .pipe(plugins.plumber({errorHandler: helpers.errorHandler}))
            .pipe(plugins.stylus(
                {use: [plugins.poststylus(['lost', 'autoprefixer'])]}
            ))
            .pipe(gulp.dest(plugins.config.get('stylus.buildCompilePath')))
            .pipe(plugins.browserSync.stream());
    }
};