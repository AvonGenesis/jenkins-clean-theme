module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      compile: {
        options: {
          compress: false,
          "include css": true
        },
        files: {
          'master.css': 'css/stylus/main.styl'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.registerTask('default', ['stylus']);
  grunt.registerTask('test', ['stylus']);
};
