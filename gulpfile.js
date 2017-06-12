'use strict';

var gulp = require('gulp'),
    //babel = require('gulp-babel'),
    //karma = require('karma').server,
    shell = require('gulp-shell'),
    concat = require('gulp-concat'),
    argv = require('yargs').argv;

var DEST = argv.PATH || '';

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('server', ['node', 'tests']);

gulp.task('tests', ['build','specs','karma']);

// gulp.task('run-tests', ['build','specs'], function (done) {
//     karma.start({
//         configFile: __dirname + '/karma.conf.js'
//     }, done);
// });

gulp.task('specs', function () {
    return gulp.src(['*.spec.js', '**/*.spec.js','**/**/*.spec.js', '!node_modules/**/*.spec.js'])
    .pipe(concat('specs.js'))
    .pipe(gulp.dest(DEST + 'test'));
});

gulp.task('build', function() {
    return gulp.src(['Algorithms/**/*.js', 
        'DataStructures/**/*.js', 
        '!Algorithms/**/*spec.js', 
        '!DataStructures/**/*spec.js'])
    //.pipe(babel()).on('error', handleError)
    .pipe(concat('src.js'))
    .pipe(gulp.dest(DEST + 'build'));
});

gulp.task('node', shell.task('node app.js'));
gulp.task('karma', shell.task('powershell -Command "./karma.ps1"'));