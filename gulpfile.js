'use strict';

var gulp = require('gulp'),
    karma = require('karma').Server,
    shell = require('gulp-shell'),
    concat = require('gulp-concat'),
    argv = require('yargs').argv,
    sourcemaps = require('gulp-sourcemaps');

var DEST = argv.PATH || '';

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('server', ['node', 'tests']);

gulp.task('tests', ['build','specs','karma']);

gulp.task('run-tests', ['build','specs'], function (done) {
    new karma({
        configFile: __dirname + '/karma.conf.js'
    }, done).start()
});

gulp.task('specs', function () {
    return gulp.src(['*.spec.js', '**/*.spec.js','**/**/*.spec.js', '!node_modules/**/*.spec.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('specs.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DEST + 'test'));
});

gulp.task('build', function() {
    return gulp.src(['Algorithms/**/*.js', 
        'DataStructures/**/*.js', 
        '!Algorithms/**/*spec.js', 
        '!DataStructures/**/*spec.js'])
    .pipe(concat('src.js'))
    .pipe(gulp.dest(DEST + 'build'));
});

gulp.task('node', shell.task('node app.js'));
gulp.task('karma', shell.task('powershell -Command "./karma.ps1"'));