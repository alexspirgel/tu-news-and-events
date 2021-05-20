const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const gulpSassBulkImport = require('gulp-sass-bulk-import');

const sass = () => {
	return gulp.src('./src/*.scss')
		.pipe(gulpSassBulkImport())
		.pipe(gulpSass().on('error', gulpSass.logError))
		.pipe(gulp.dest('./dist/css'));
};
const watch = () => {
	gulp.watch('./src/**/*.scss', gulp.parallel(sass));
};

exports.default = gulp.series(sass);
exports.start = gulp.series(sass, watch);