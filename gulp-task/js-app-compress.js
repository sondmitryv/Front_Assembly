module.exports = function (gulp, plugins, helpers) {
    return function() {
        return gulp.src(plugins.config.get('compress.path'))
        	.pipe(plugins.plumber({errorHandler: helpers.errorHandler}))
        	.pipe(plugins.babel({presets: ["es2015"]}))
            .pipe(gulp.dest(plugins.config.get('compress.resultPath')));
            
    }
};