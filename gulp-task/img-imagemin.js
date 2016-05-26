module.exports = function (gulp, plugins, helpers) {
    return function() {
        return gulp.src(plugins.config.get('imgMin.path'))
        	.pipe(plugins.cache(plugins.config.get('imgMin.resultPath')))
      		.pipe(plugins.imagemin({ 
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            plugins: [plugins.png({quality:'65-80'}), plugins.jpg()]
        }))
            .pipe(gulp.dest(plugins.config.get('imgMin.resultPath')))
            .pipe(plugins.notify({
            	message: 'Картинки готовы!',
     			onLast: true,
        	
            }));
    }
};