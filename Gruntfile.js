
'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production: {
                options: {
                    modifyVars: {
                        //'font-url': '"../fonts/fonttiny"'
                    }
                },
                files: {
                    "dist/css/default.css": "src/themes/default/index.less"
                }
            }
        },
        concat: {
            js: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                            '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
                },
                files: {
                    'dist/js/keboacy.js': [
                        'build/intro.js',
                        'src/framework/**/*.js',
                        'src/widgets/**/*.js',
                        'build/outro.js'
                    ]
                }
            }
        },
        copy: {
            doc: {
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: '**/*',
                    dest: 'docs/vendor/keboacy/'
                }]
            },
            style: {
                files: [{
                    expand: true,
                    src: ['./bower_components/font-awesome/fonts/*'],
                    dest: 'dist/fonts/', flatten: true
                }, {
                    expand: true,
                    src: ['./bower_components/bootstrap/fonts/*'],
                    dest: 'dist/fonts/', flatten: true
                }, {
                    expand: true,
                    src: ['./bower_components/kendo-ui/styles/fonts/glyphs/*'],
                    dest: 'dist/fonts/', flatten: true
                }, {
                    expand: true,
                    src: ['src/**/img/*'],
                    dest: 'dist/img/',
                    flatten: true
                }, {
                    src: ['src/themes/default/variables.less'],
                    dest: 'dist/less/default/variables.less',
                }]
            },
            styleguide: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/',
                    src: [
                        'jquery/**/*'
                    ],
                    dest: 'docs/styleguide/assets'
                }, {
                    expand: true,
                    cwd: 'dist/',
                    src: ['**/*'],
                    dest: 'docs/styleguide/assets/veronica-ui'
                }, {
                    expand: true,
                    cwd: 'src/styleguide/',
                    src: ['**/*.js'],
                    dest: 'docs/styleguide/assets'
                }, {
                    src: 'src/assets/demo/index.html',
                    dest: 'site/index.html'
                }]
            }
        },
        clean: {
            dist: [
                'dist/',
                'docs/vendor/keboacy'
            ]
        },
        uglify: {
            options: {
                sourceMap: true,
                report: 'gzip'
            },
            main: {
                files: {
                    'dist/js/keboacy.min.js': ['dist/js/keboacy.js']
                }
            }
        },
        kss: {
            options: {
                "config": "src/kss-config.json"
            },
            dist: {}
        },
        pug: {
            compile: {
                files: [{
                    expand: true,
                    cwd: "./src/styleguide/examples",
                    src: "*.pug",
                    dest: "./docs/styleguide/examples",
                    ext: ".html"
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-kss');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('script', ['concat:js', 'uglify']);
    grunt.registerTask('style', ['less', 'copy:style']);
    grunt.registerTask('release', ['clean', 'style', 'script', 'copy:doc']);
    grunt.registerTask('styleguide', ['kss']);
    grunt.registerTask('default', ['release']);
};
