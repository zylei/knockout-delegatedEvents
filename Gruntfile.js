module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n\n',
                stripBanners: true,
                banner: '// knockout-delegatedEvents <%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %> Ryan Niemeyer |  http://www.opensource.org/licenses/mit-license\n'
            },
            dist: {
                src: "src/*.js",
                dest: 'build/knockout-delegatedEvents.js'
            }
        },
        uglify: {
            options: {
                stripBanners: true,
                banner: '// knockout-delegatedEvents <%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %> Ryan Niemeyer |  http://www.opensource.org/licenses/mit-license\n'
            },
            build: {
                src: 'build/knockout-delegatedEvents.js',
                dest: 'build/knockout-delegatedEvents.min.js'
            }
        },
        jshint: {
            files: 'src/*.js',
            options: {
                //"-W030": false,
                force: true
            }
        },
        watch: {
            scripts: {
                files: ['src/*.*', 'spec/*.*'],
                tasks: ['default'],
                options: {
                    nospawn: true
                }
            }
        },
        jasmine : {
            src : 'src/*.js',
            options : {
                specs : 'spec/*.js',
                vendor: 'ext/*.js',
                template : require('grunt-template-jasmine-istanbul'),
                templateOptions: {
                    coverage: 'reports/coverage.json',
                    report: 'reports/coverage'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'jasmine']);

};
