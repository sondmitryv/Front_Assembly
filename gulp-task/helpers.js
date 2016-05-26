const notify = require('gulp-notify');
const mqpacker = require('css-mqpacker');
const csswring = require('csswring');

module.exports = {
    processors: [ mqpacker, csswring],
    errorHandler: function () {
        var args = Array.prototype.slice.call(arguments);
        // Send error to notification center with gulp-notify
        notify.onError({
            title: "Compile Error",
            message: "<%= error.message %>"
        }).apply(this, args);

        // Keep gulp from hanging on this task
        this.emit('end');
       
    }
};
