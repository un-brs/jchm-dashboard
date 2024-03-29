/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/

App.config(['$stateProvider','$urlRouterProvider', '$resourceProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$ocLazyLoadProvider',  'APP_REQUIRES',
function ($stateProvider, $urlRouterProvider, $resourceProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider, appRequires) {
  'use strict';

  App.controller = $controllerProvider.register;
  App.directive  = $compileProvider.directive;
  App.filter     = $filterProvider.register;
  App.factory    = $provide.factory;
  App.service    = $provide.service;
  App.constant   = $provide.constant;
  App.value      = $provide.value;

  // LAZY MODULES
  // ----------------------------------- 

  $ocLazyLoadProvider.config({
    debug: false,
    events: true,
    modules: appRequires.modules
  });


  // defaults to dashboard
  $urlRouterProvider.otherwise('/app/orgunits');

  // 
  // Application Routes
  // -----------------------------------   
  $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: basepath('app.html'),
        controller: 'AppController',
        resolve: resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'store', 'classyloader', 'toaster', 'csspiner')
    })
    .state('app.dashboard', {
        url: '/dashboard',
        title: 'Dashboard',
        templateUrl: basepath('dashboard.html'),
        resolve: resolveFor('flot-chart','flot-chart-plugins')
    })
    .state('app.orgunits', {
        url: '/orgunits',
        title: 'Orgainizations',
        templateUrl: basepath('jchm-orgunits.html'),
        controller: 'JChmOrgUnitsCtrl'
    })
    .state('app.orgunits.detail', {
        url: '/:orgUnitId',
        // title: 'Orgainization',
        templateUrl: basepath('jchm-docs.html'),
        controller: 'NullController'
    })
    .state('app.docs', {
        url: '/docs/:orgUnitId',
        title: 'Organization documents',
        templateUrl: basepath('jchm-docs.html'),
        controller: 'JChmDocsCtrl'
    })
    .state('app.widgets', {
        url: '/widgets',
        title: 'Widgets',
        templateUrl: basepath('widgets.html'),
        controller: 'NullController',
        resolve: resolveFor('loadGoogleMapsJS', function() { return loadGoogleMaps(); }, 'google-map')
    })
    .state('app.buttons', {
        url: '/buttons',
        title: 'Buttons',
        templateUrl: basepath('buttons.html'),
        controller: 'NullController'
    })
    .state('app.colors', {
        url: '/colors',
        title: 'Colors',
        templateUrl: basepath('colors.html'),
        controller: 'NullController'
    })
    .state('app.notifications', {
        url: '/notifications',
        title: 'Notifications',
        templateUrl: basepath('notifications.html'),
        controller: 'NotificationController'
    })
    .state('app.interaction', {
        url: '/interaction',
        title: 'Interaction',
        templateUrl: basepath('interaction.html'),
        controller: 'NullController'
    })
    .state('app.spinners', {
        url: '/spinners',
        title: 'Spinners',
        templateUrl: basepath('spinners.html'),
        controller: 'NullController'
    })
    .state('app.animations', {
        url: '/animations',
        title: 'Animations',
        templateUrl: basepath('animations.html'),
        controller: 'NullController'
    })
    .state('app.dropdown-animations', {
        url: '/dropdown-animations',
        title: 'Dropdown Animations',
        templateUrl: basepath('dropdown-animations.html'),
        controller: 'NullController'
    })
    .state('app.panels', {
        url: '/panels',
        title: 'Panels',
        templateUrl: basepath('panels.html'),
        controller: 'NullController'
    })
    .state('app.portlets', {
        url: '/portlets',
        title: 'Portlets',
        templateUrl: basepath('portlets.html'),
        controller: 'NullController',
        resolve: resolveFor('jquery-ui')
    })
    .state('app.maps-google', {
        url: '/maps-google',
        title: 'Maps Google',
        templateUrl: basepath('maps-google.html'),
        controller: 'NullController',
        resolve: resolveFor('loadGoogleMapsJS', function() { return loadGoogleMaps(); }, 'google-map')
    })
    .state('app.maps-vector', {
        url: '/maps-vector',
        title: 'Maps Vector',
        templateUrl: basepath('maps-vector.html'),
        controller: 'VectorMapController',
        resolve: resolveFor('vector-map')
    })
    .state('app.grid', {
        url: '/grid',
        title: 'Grid',
        templateUrl: basepath('grid.html'),
        controller: 'NullController'
    })
    .state('app.grid-masonry', {
        url: '/grid-masonry',
        title: 'Grid Masonry',
        templateUrl: basepath('grid-masonry.html'),
        controller: 'NullController'
    })
    .state('app.typo', {
        url: '/typo',
        title: 'Typo',
        templateUrl: basepath('typo.html'),
        controller: 'NullController'
    })
    .state('app.icons-font', {
        url: '/icons-font',
        title: 'Icons Font',
        templateUrl: basepath('icons-font.html'),
        controller: 'NullController'
    })
    .state('app.icons-weather', {
        url: '/icons-weather',
        title: 'Icons Weather',
        templateUrl: basepath('icons-weather.html'),
        controller: 'NullController'
    })
    .state('app.form-standard', {
        url: '/form-standard',
        title: 'Form Standard',
        templateUrl: basepath('form-standard.html'),
        controller: 'NullController'
    })
    .state('app.form-extended', {
        url: '/form-extended',
        title: 'Form Extended',
        templateUrl: basepath('form-extended.html'),
        controller: 'NullController',
        resolve: resolveFor('codemirror', 'codemirror-plugins', 'moment', 'datetimepicker','taginput','inputmask','chosen', 'slider', 'filestyle')
    })
    .state('app.form-validation', {
        url: '/form-validation',
        title: 'Form Validation',
        templateUrl: basepath('form-validation.html'),
        controller: 'NullController',
        resolve: resolveFor('parsley')})
    .state('app.form-wizard', {
        url: '/form-wizard',
        title: 'Form Wizard',
        templateUrl: basepath('form-wizard.html'),
        controller: 'NullController',
        resolve: resolveFor('bwizard')
    })
    .state('app.chart-flot', {
        url: '/chart-flot',
        title: 'Chart Flot',
        templateUrl: basepath('chart-flot.html'),
        controller: 'NullController',
        resolve: resolveFor('flot-chart','flot-chart-plugins')
    })
    .state('app.chart-radial', {
        url: '/chart-radial',
        title: 'Chart Radial',
        templateUrl: basepath('chart-radial.html'),
        controller: 'NullController',
        resolve: resolveFor('classyloader')
    })
    .state('app.table-standard', {
        url: '/table-standard',
        title: 'Table Standard',
        templateUrl: basepath('table-standard.html'),
        controller: 'NullController'
    })
    .state('app.table-extended', {
        url: '/table-extended',
        title: 'Table Extended',
        templateUrl: basepath('table-extended.html'),
        controller: 'NullController'
    })
    .state('app.table-datatable', {
        url: '/table-datatable',
        title: 'Table Datatable',
        templateUrl: basepath('table-datatable.html'),
        controller: 'NullController',
        resolve: resolveFor('datatables', 'datatables-pugins')
    })
    .state('app.mailbox', {
        url: '/mailbox',
        title: 'Mailbox',
        templateUrl: basepath('mailbox.html'),
        controller: 'NullController'
    })
    .state('app.timeline', {
        url: '/timeline',
        title: 'Timeline',
        templateUrl: basepath('timeline.html'),
        controller: 'NullController'
    })
    .state('app.calendar', {
        url: '/calendar',
        title: 'Calendar',
        templateUrl: basepath('calendar.html'),
        controller: 'NullController',
        resolve: resolveFor('jquery-ui', 'moment','fullcalendar')
    })
    .state('app.invoice', {
        url: '/invoice',
        title: 'Invoice',
        templateUrl: basepath('invoice.html'),
        controller: 'NullController'
    })
    .state('app.search', {
        url: '/search',
        title: 'Search',
        templateUrl: basepath('search.html'),
        controller: 'NullController',
        resolve: resolveFor('moment', 'datetimepicker', 'chosen', 'slider')
    })
    .state('app.template', {
        url: '/template',
        title: 'Blank Template',
        templateUrl: basepath('template.html'),
        controller: 'NullController'
    })
    .state('app.documentation', {
        url: '/documentation',
        title: 'Documentation',
        templateUrl: basepath('documentation.html'),
        controller: 'NullController',
        resolve: resolveFor('flatdoc')
    })
    // 
    // Single Page Routes
    // ----------------------------------- 
    .state('page', {
        url: '/page',
        templateUrl: 'app/pages/page.html',
        resolve: resolveFor('modernizr', 'icons', 'store')
    })
    .state('page.login', {
        url: '/login',
        title: "Login",
        templateUrl: 'app/pages/login.html'
    })
    .state('page.register', {
        url: '/register',
        title: "Register",
        templateUrl: 'app/pages/register.html'
    })
    .state('page.recover', {
        url: '/recover',
        title: "Recover",
        templateUrl: 'app/pages/recover.html'
    })
    .state('page.lock', {
        url: '/lock',
        title: "Lock",
        templateUrl: 'app/pages/lock.html'
    })
    ;


    // Set here the base of the relative path
    // for all app views
    function basepath(uri) {
      return 'app/views/' + uri;
    }

    // Generates a resolve object by passing script names
    // previously configured in constant.APP_REQUIRES
    function resolveFor() {
      var _args = arguments;
      return {
        deps: ['$ocLazyLoad','$q', function ($ocLL, $q) {
          // Creates a promise chain for each argument
          var promise = $q.when(1); // empty promise
          for(var i=0, len=_args.length; i < len; i ++){
            promise = andThen(_args[i]);
          }
          return promise;

          // creates promise to chain dynamically
          function andThen(_arg) {
            // also support a function that returns a promise
            if(typeof _arg == 'function')
                return promise.then(_arg);
            else
                return promise.then(function() {
                  // if is a module, pass the name. If not, pass the array
                  var whatToLoad = getRequired(_arg);
                  // simple error check
                  if(!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                  // finally, return a promise
                  return $ocLL.load( whatToLoad );
                });
          }
          // check and returns required data
          // analyze module items with the form [name: '', files: []]
          // and also simple array of script files (for not angular js)
          function getRequired(name) {
            if (appRequires.modules)
                for(var m in appRequires.modules)
                    if(appRequires.modules[m].name && appRequires.modules[m].name === name)
                        return appRequires.modules[m];
            return appRequires.scripts && appRequires.scripts[name];
          }

        }]};
    }

}]).config(['$translateProvider', function ($translateProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix : 'app/i18n/',
        suffix : '.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useLocalStorage();

}]).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 500;
    cfpLoadingBarProvider.parentSelector = '.wrapper > section';
  }])
.controller('NullController', function() {});
