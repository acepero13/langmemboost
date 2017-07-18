'use strict';
var gulp        = require("gulp"),
    browserify  = require("browserify"),
    source      = require("vinyl-source-stream"),
    buffer      = require("vinyl-buffer"),
    tslint      = require("gulp-tslint"),
    tsc         = require("gulp-typescript"),
    sourcemaps  = require("gulp-sourcemaps"),
    uglify      = require("gulp-uglify"),
    runSequence = require("run-sequence"),
    mocha       = require("gulp-mocha"),
    istanbul    = require("gulp-istanbul"),
    browserSync = require('browser-sync').create();


    //Linter
    gulp.task("lint", function(){
        return gulp.src(["src/**/**.ts", "tests/**/**.ts"])
        .pipe(tslint({}))
        .pipe(tslint.report("verbose"));
    });

    //Compiler

var tscProject = tsc.createProject("tsconfig.json");
gulp.task("build-app", function(){
    console.log("building app");
    return gulp.src(["src/**/**.ts", "typings/main.d.ts/", "src/interfaces/interfaces.d.ts"])
    .pipe(tsc(tscProject))
    .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
    .js.pipe(gulp.dest("out/src/"))
});

gulp.task("bundle", function() {

    var libraryName = "myapp";
    var mainTsFilePath = "out/src/main.js";
    var outputFolder   = "dist/";
    var outputFileName = libraryName + ".min.js";

    var bundler = browserify({
        debug: true,
        standalone : libraryName
    });

    return bundler.add(mainTsFilePath)
        .bundle()
        .pipe(source(outputFileName))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outputFolder));
});


gulp.task("watch-source",  function () {
    gulp.watch([ "src/**/**.ts"], ["build-app"]);
});

gulp.task("watch-tests",  function () {
    gulp.watch(["tests/**/*.ts"], ["build-tests", "test"]);
});

//Compile tests

var tsTestProject = tsc.createProject("tsconfig.json");

gulp.task("build-tests", function(){
    return gulp.src(["tests/**/*.ts", "typings/main.d.ts", "src/interfaces/interfaces.d.ts"])
    .pipe(tsc(tsTestProject))
    .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
    .js.pipe(gulp.dest("out/tests/"));
});
    
gulp.task("istanbul:hook", function(){
    return gulp.src("out/src/**/*.js")
    //Covering files
    .pipe(istanbul({includeUntested:true}))
    .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
        // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task("test", ["istanbul:hook", "build-tests"], function() {
    console.log("Running tests..");
    return gulp.src('out/tests/**/*.test.js')
        .pipe(mocha({ui: 'bdd'}))
        .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
        .pipe(istanbul.writeReports());
});


gulp.task('default', ['watch-source', 'watch-tests']);

