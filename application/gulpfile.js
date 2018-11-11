const gulp = require('gulp'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	svgmin = require('gulp-svgmin'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create(),
	dir = {
		src: 'src',
		dist: 'dist',
		nm: 'node_modules'
	},
	opts = {
		sass : { outputStyle: 'compressed' },
		es6 : { presets : ['es2015'] },
		autoprefixer : { 
			browsers : ['last 5 versions'],
			cascade : false 
		}
	},
	files = {
		CSS : [
			`${dir.nm}/bootstrap/dist/css/bootstrap.min.css`,
			`${dir.nm}/font-awesome/css/font-awesome.min.css`
		],
		mCSS: 'base.min.css',
		FONTS : `${dir.nm}/font-awesome/fonts/*`
	}

gulp.task('sass', () => {
	gulp
		.src(`${dir.src}/scss/*.scss`)
		.pipe( sass( opts.sass ) )
		.pipe( gulp.dest(`${dir.dist}/css`) );
});

gulp.task('es6', () => {
	gulp
		.src(`${dir.src}/es6/*.js`)
		.pipe( babel(opts.es6) )
		.pipe( gulp.dest(`${dir.dist}/js`) )
		.pipe(browserSync.stream());
});

gulp.task('css', () => {
	gulp
		.src(files.CSS)
		.pipe( concat(files.mCSS) )
		.pipe( autoprefixer(opts.autoprefixer) )
		.pipe( gulp.dest(`${dir.dist}/css`) );

	gulp.src( files.FONTS )
    	.pipe(gulp.dest(`${dir.dist}/fonts`));
});

gulp.task('serve', function(){
	browserSync.init({
		proxy: "localhost:3000"
	});

	gulp.watch("src/**/*").on('change', browserSync.reload);
	gulp.watch("routers/**/*").on('change', browserSync.reload);
	gulp.watch("controllers/**/*").on('change', browserSync.reload);
	gulp.watch("models/**/*").on('change', browserSync.reload);
	gulp.watch("views/**/*").on('change', browserSync.reload);
});