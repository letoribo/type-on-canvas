module.exports = function(grunt) {
  grunt.initConfig({
    //read in package.json file
    pkg: grunt.file.readJSON('package.json'),

    //task config
    clean: ['build/*', 'app/tmp/*'],

    copy: {
      main: {
        files: [

          // includes files within path and its sub-directories
          {
            expand: true,
            cwd: 'app',
            src: ['module_*/**'],
            dest: 'build/'
          }
        ]
      }
    },

    bowercopy: {
      // Javascript
      libs: {
        options: {
          destPrefix: 'app/_js/vendors'
        },
        files: {
          'jquery.min.js': 'jquery/dist/jquery.min.js'
        },
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/_img',
          src: '*.{gif,jpeg,jpg,png}',
          dest: 'build/_img'
        }]
      }
    },
    vendors: {
        src: ['app/_js/vendors/*'],
        dest: 'build/_js/vendors.min.js'
      },
    concat: {
      options: {
        separator: ';',
      },
      myscripts: {
        src: ['app/_js/*.js'],
        dest: 'app/tmp/js/scripts.min.js'
      }
    },
    uglify: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'app/tmp/js',
          src: '*.js',
          dest: 'build/_js'
        }]
      }
    },
    processhtml: {
      options: {
        process: true
      },
      dist: {
        files: {
          'build/module_0/index.html': ['app/module_0/index.html']
        }
      }
    }

  });

  //load in all of the required Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy'); // configured
  grunt.loadNpmTasks('grunt-contrib-clean'); // configured
  grunt.loadNpmTasks('grunt-contrib-cssmin'); // configured
  grunt.loadNpmTasks('grunt-contrib-concat'); // configured
  grunt.loadNpmTasks('grunt-contrib-uglify'); // configured
  grunt.loadNpmTasks('grunt-contrib-imagemin'); // configured
  //grunt.loadNpmTasks('grunt-uncss'); // configured
  grunt.loadNpmTasks('grunt-bowercopy'); // configured
  grunt.loadNpmTasks('grunt-processhtml'); // configured

  //set up Grunt tasks

  // "grunt serve" in command line
  grunt.registerTask('serve', ['connect']);

  // "grunt build" in command line
  grunt.registerTask('build', ['clean', 'bowercopy']);

  // "grunt" in command line
  grunt.registerTask('default', ['build', 'copy', 'concat', 'uglify', 'uncss', 'cssmin', 'imagemin', 'processhtml']);
};
