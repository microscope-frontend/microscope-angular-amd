//
// Requirejs configuration.
//
require.config({
    baseUrl: '/scripts/',
    paths: {
        'jQuery': 'vendors/jquery',
        'angular': 'vendors/angular',
        'bootstrap': 'vendors/bootstrap'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'jQuery': {
            'exports': 'jQuery'
        },
        'bootstrap': ['jQuery']
    }
});