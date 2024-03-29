module.exports = {
    styles: {
        files: ['src/styles/**/*.styl'],
        tasks: ['stylus:dev']
    },
    scripts: {
        files: ['src/scripts/**/*.js', 'src/scripts/**/*.html'],
        tasks: ['copy:src']
    },
    assets: {
        files: ['assets/**/*'],
        tasks: ['copy:assets']
    }
};