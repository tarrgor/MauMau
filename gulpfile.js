var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');
var packageJson = require('./www/package.json');

var dest_dir = 'www';

gulp.task('build-js', function() {
    gulp.src('jssrc/**/*.js')
    .pipe(plugins.concat('main.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(dest_dir + '/js'))
    .pipe(plugins.livereload()); 
    
    gulp.src('jssrc/templates/**/*.html')
    .pipe(gulp.dest(dest_dir + '/templates'))
    .pipe(plugins.livereload());   
});

gulp.task('build-bower', function() {
    var jsFilter = plugins.filter(['*.js', '*.js.map'], {restore: true});
    var cssFilter = plugins.filter(['*.css', '*.css.map'], {restore: true});
    var fontFilter = plugins.filter(['*.eot','*.svg','*.ttf','*.woff','*.woff2'], 
                    {restore: true});
                    
    gulp.src(mainBowerFiles())
    .pipe(jsFilter)
    .pipe(gulp.dest(dest_dir + '/lib/js'))
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(gulp.dest(dest_dir + '/lib/css'))
    .pipe(cssFilter.restore)
    .pipe(fontFilter)
    .pipe(gulp.dest(dest_dir + '/lib/fonts'))
    .pipe(fontFilter.restore);
});

gulp.task('build-css', function() {
    gulp.src('scss/**/*.scss')
    .pipe(plugins.plumber())
    .pipe(plugins.sass())
    .pipe(gulp.dest(dest_dir + '/css'))
    .pipe(plugins.livereload());    
});

gulp.task('build-html', function() {
    gulp.src('www/**/*.html')
    .pipe(plugins.livereload());    
});

gulp.task('build-assets', function() {
    gulp.src('assets/images/**')
    .pipe(gulp.dest(dest_dir + '/images'))
    .pipe(plugins.livereload());    
});

gulp.task('default', ['build-js','build-css', 'build-assets'], function() {
    
});

gulp.task('watch', function() {
   plugins.livereload.listen();
   gulp.watch('scss/**/*.scss', ['build-css']); 
   gulp.watch('www/**/*.html', ['build-html']);
   gulp.watch('assets/**/*', ['build-assets']);
   gulp.watch('jssrc/**/*.js', ['build-js']);
   gulp.watch('jssrc/templates/**/*.html', ['build-js']);
});

gulp.task('electron', function() {
    gulp.src("")
    .pipe(plugins.electron({
        src: './www',
        packageJson: packageJson,
        release: './release',
        cache: './cache',
        version: 'v0.36.7',
        packaging: true,
        platforms: ['darwin-x64'],
        platformResources: {
            darwin: {
                CFBundleDisplayName: packageJson.name,
                CFBundleIdentifier: packageJson.name,
                CFBundleName: packageJson.name,
                CFBundleVersion: packageJson.version
            }
        }
    }))
    .pipe(gulp.dest(""));
});