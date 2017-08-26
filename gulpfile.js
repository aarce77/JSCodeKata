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
    //excluding !src/Algorithms/Search/gridland-metro.spec.js until I can figure out how to get NPM modules
    //to successfully load via the test and spec runners.
    return gulp.src(['*.spec.js', 'src/**/**/*.spec.js', 
        '!src/Algorithms/Search/gridland-metro.spec.js',
        '!src/Algorithms/Strings/determining-dna-health.spec.js',
        '!src/Algorithms/Strings/determining-dna-health2.spec.js',
        '!src/Algorithms/Strings/determining-dna-health3.spec.js',
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('specs.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DEST + 'test'));
});

gulp.task('build', function() {
    return gulp.src(['src/**/**/*.js', 
        '!src/**/**/*spec.js',
        '!src/Algorithms/Strings/determining-dna-health.js',
        '!src/Algorithms/Strings/determining-dna-health2.js',
        '!src/Algorithms/Strings/determining-dna-health3.js',])
    .pipe(sourcemaps.init())
    .pipe(concat('src.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DEST + 'build'));
});

gulp.task('node', shell.task('node app.js'));
gulp.task('karma', shell.task('powershell -Command "./karma.ps1"'));