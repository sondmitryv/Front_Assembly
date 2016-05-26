module.exports = function (gulp, plugins, helpers) {
    return function() {
        return gulp.src(plugins.config.get('fonts.path'))
        	
            .pipe(gulp.dest(plugins.config.get('fonts.resultPath')));
    }
};