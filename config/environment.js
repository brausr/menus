/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'menus',
    environment: environment,
    contentSecurityPolicy: {
        'connect-src': "'self' wss://*.firebaseio.com maps.gstatic.com",
        'default-src': "'none'",
        'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
        'font-src': "'self' fonts.gstatic.com",
        'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com placehold.it",
        'media-src': "'self'",
        'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
    },
    // TODO create test/production instances
    firebase: 'https://amber-fire-4627.firebaseio.com/',
    googleMap: {
        apiKey: 'AIzaSyC4HGtjwmR5zmmgFcUSO9kVsD6fxKSaA2I',
        libraries: ['places']
    },
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
