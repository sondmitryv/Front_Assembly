module.exports = function (gulp, plugins, helpers) {
    return function() {
        return gulp.src(plugins.config.get('minifyJs.path'))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.plumber({errorHandler: helpers.errorHandler}))
            .pipe(plugins.uglify())
            .pipe(plugins.sourcemaps.write('maps'))
            .pipe(gulp.dest(plugins.config.get('minifyJs.resultPath')))
             .pipe(plugins.notify({
            	message: 'js фаил готов!',
     			onLast: true,
        	
            }));
    }
};