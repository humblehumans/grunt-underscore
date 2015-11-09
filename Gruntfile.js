'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      options: { force: true },
      dist: ['*', '../humble-humans', '!Gruntfile.js', '!LICENSE', '!package.json', '!bower.json', '!.jshintrc', '!README.md', '!src/**', '!bower_components/**', '!node_modules/**']
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/sass/',
          src: ['style.scss'],
          dest: '../humble-humans',
          ext: '.css'
        }]
      }
    },

    jshint: {
      all: ['Gruntfile.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // concat: {
    //   css: {
    //     src: [
    //       'bower_components/html5-boilerplate/dist/css/normalize.css',
    //       'bower_components/html5-boilerplate/dist/css/main.css',
    //       'bower_components/bootstrap/dist/css/bootstrap.min.css',
    //       'dist/assets/css/main.css'
    //     ],
    //     dest: '../humble-humans/assets/css/app.css'
    //   },
    //   js: {
    //     src: [
    //       'bower_components/jquery/dist/jquery.js',
    //       'bower_components/bootstrap/dist/js/bootstrap.js',
    //       'src/assets/scripts/main.js'
    //     ],
    //     dest: '../humble-humans/assets/js/app.js'
    //   }
    // },

    // uglify: {
    //   dist: {
    //     files: {
    //       '../humble-humans/assets/js/app.min.js': ['../humble-humans/assets/js/app.js']
    //     }
    //   }
    // },

    // imagemin: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: 'src/assets/images/',
    //       src: ['**/*.{png,jpg,gif,svg}'],
    //       dest: '../humble-humans/assets/img/'
    //     }]
    //   }
    // },

    copy: {
      files: {
        cwd: 'src',
        src: [ '**/*', '!style.css'],
        dest: '../humble-humans',
        expand: true,
        options: {
          process: function(content, srcpath) {
            return grunt.template.process(content);
          }
        }          
      }
    }

    // watch: {
    //   options: {
    //     livereload: true
    //   },
    //   css: {
    //     files: ['src/**/*.scss'],
    //     tasks: ['sass', 'concat:css'],
    //     options: {
    //       spawn: false
    //     }
    //   },
    //   js: {
    //     files: ['src/**/*.js'],
    //     tasks: ['jshint', 'concat:js'],
    //     options: {
    //       spawn: false
    //     }
    //   },
    //   index: {
    //     files: ['src/index.html'],
    //     tasks: ['copy:index'],
    //     options: {
    //       spawn: false
    //     }
    //   },
    //   grunt: {
    //     files: ['Gruntfile.js'],
    //     tasks: ['default'],
    //     options: {
    //       spawn: false
    //     }
    //   }
    // }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  // grunt.registerTask('default', ['clean', 'sass', 'jshint', 'concat', 'uglify', 'imagemin', 'copy']);
  grunt.registerTask('default', ['clean', 'sass', 'jshint', 'copy']);

};