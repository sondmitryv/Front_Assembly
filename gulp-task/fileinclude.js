module.exports = function (gulp, plugins, helpers) {
    return function() {
        return gulp.src(plugins.config.get('fileinclude.paths'))
            .pipe(plugins.fileinclude({
                prefix: '@@',
                basepath: plugins.config.get('fileinclude.basePath')
            }))
            .pipe(gulp.dest(plugins.config.get('fileinclude.resultPath')));
    }
};