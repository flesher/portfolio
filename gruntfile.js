module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    uglify: {
      my_target: {
        files: {
          'js/portfolio.min.js': [
            'js/namespaces.js',
            'js/preloader.js',
            'js/templates.js',
            'js/projectdetail.js',
            'js/triangleinit.js',
            'js/triangles.js',
            'js/main.js'
          ]
        }
      }
     },

    cssmin: {
      files: {
        'css/style.min.css': ['css/style.css']
      }
    },

    jshint: {
      all:[
        'js/namespaces.js',
        'js/preloader.js',
        'js/templates.js',
        'js/projectdetail.js',
        'js/triangleinit.js',
        'js/triangles.js',
        'js/main.js'
        ]
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);
  // grunt.registerTask('test', 'mochaTest');
};