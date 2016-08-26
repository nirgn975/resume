'use strict';

var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var cp              = require('child_process');
var gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

// Minify all the files and concat them to one file.
gulp.task('javascript', function() {
  return gulp.src([
    './assets/javascript/init.js'
  ])
    .pipe($.concat('app.min.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./_site/assets'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets'));
});


// Compile SCSS to CSS, minify and add prefix.
gulp.task('scss', function() {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

    return gulp.src('assets/scss/main.scss')
        .pipe($.sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe($.rename('main.min.css'))
        .pipe($.cssmin())
        .pipe(gulp.dest('_site/assets/scss'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/scss'));
});


// Build the Jekyll Site
gulp.task('jekyll-build', function(done) {
    browserSync.notify('<span style="color: grey">Running:</span> $ jekyll build');
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});


// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['javascript', 'scss', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        notify: false
    });
});


// Watch html, md, scss, js files, run jekyll & reload BrowserSync
gulp.task('watch', function () {
  gulp.watch([
    'assets/scss/*/*.scss',
    'assets/scss/*.scss',
  ], ['scss']);
    gulp.watch('assets/javascript/**', ['javascript']);
    gulp.watch(['index.html', '_layouts/*.html', '_includes/*'], ['jekyll-build']);
});


// Waite for jekyll-build task and deploy the site to gh-pages branch.
gulp.task('deploy', ['scss', 'javascript', 'jekyll-build'], function() {
  return gulp.src('./_site/**/*')
    .pipe($.ghPages());
});


// Default task.
gulp.task('default', ['browser-sync', 'watch']);
