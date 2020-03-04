const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('gulp', function(done) {
	console.log('Привет, мир!');
});

gulp.task('browser-sync', function() {
	browserSync.init({
			server: {
					baseDir: "./"
			}
	});
	gulp.watch("./*.html").on('change', browserSync.reload);
});

