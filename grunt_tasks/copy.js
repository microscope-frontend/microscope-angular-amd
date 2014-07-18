module.exports = {
    vendors: {
        files: [
            // bower vendors
            {
                src: '<%= configs.bower %>/bootstrap/dist/js/bootstrap.js',
                dest: '<%= configs.vendors %>/bootstrap.js'
            }, {
                src: '<%= configs.bower %>/jquery/jquery.js',
                dest: '<%= configs.vendors %>/jquery.js'
            }, {
                src: '<%= configs.bower %>/angular/angular.js',
                dest: '<%= configs.vendors %>/angular.js'
            }, {
                src: '<%= configs.bower %>/requirejs/require.js',
                dest: '<%= configs.vendors %>/require.js'
            }, {
                src: '<%= configs.bower %>/toastr/toastr.js',
                dest: '<%= configs.vendors %>/toastr.js'
            }, {
                src: '<%= configs.bower %>/jquery-nicescroll/jquery.nicescroll.js',
                dest: '<%= configs.vendors %>/jquery.nicescroll.js'
            },

            {
                src: '<%= configs.bower %>/bootstrap/dist/css/bootstrap.css',
                dest: '<%= configs.wwwFolder %>/styles/bootstrap.css'
            }, {
                src: '<%= configs.bower %>/toastr/toastr.css',
                dest: '<%= configs.wwwFolder %>/styles/toastr.css'
            }, {
                expand: true,
                cwd: '<%= configs.bower %>/bootstrap/dist/fonts/',
                src: ['**'],
                dest: '<%= configs.wwwFolder %>/fonts/'
            },

            {
                expand: true,
                cwd: '<%= configs.templatesSrc %>',
                src: ['**'],
                dest: '<%= configs.templatesDest %>'
            }
        ]
    },
    src: {
        files: [
            // application scripts
            {
                expand: true,
                cwd: 'src/scripts/',
                src: ['**'],
                dest: '<%= configs.wwwFolder %>/scripts/'
            },
        ]
    },
    assets: {
        files: [
            // application assets
            {
                expand: true,
                cwd: '<%= configs.assetsFolder %>/',
                src: ['**'],
                dest: '<%= configs.wwwFolder %>/'
            },
        ]
    },
    production: {
        files: [
            // application assets
            {
                expand: true,
                cwd: '<%= configs.bower %>/bootstrap/dist/fonts/',
                src: ['**'],
                dest: 'build/fonts/'
            }, {
                src: '<%= configs.bower %>/bootstrap/dist/css/bootstrap.min.css',
                dest: 'build/styles/bootstrap.css'
            }, {
                expand: true,
                cwd: '<%= configs.assetsFolder %>/',
                src: ['**'],
                dest: 'build/'
            }, {
                expand: true,
                cwd: '<%= configs.templatesSrc %>/',
                src: ['**'],
                dest: 'build/templates'
            }, {
                src: '<%= configs.bower %>/animate.css/animate.css',
                dest: '<%= configs.wwwFolder %>/styles/animate.css'
            }
        ]
    }
};