module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'riot'],
        files: [
            'tags/**/*.tag',
            'tests/**/*Spec.js'
        ],
        preprocessors: {
            'tags/**/*.tag': ['riot']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
