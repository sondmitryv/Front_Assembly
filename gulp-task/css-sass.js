module.exports = function (gulp, plugins, helpers) {
    return function() {
        return gulp.src(plugins.config.get('sass.buildPath'))
            .pipe(plugins.plumber({errorHandler: helpers.errorHandler}))
            .pipe(plugins.sass(
                {use: [plugins.postcss(['lost', 'autoprefixer'])]}
            ))
            .pipe(gulp.dest(plugins.config.get('sass.buildCompilePath')))
            .pipe(plugins.browserSync.stream());
    }
};
