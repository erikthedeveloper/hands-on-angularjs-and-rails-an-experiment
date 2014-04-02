'use strict';

angular
  .module('swFrontApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      /**
       * Define Edges Route(s)
       */
      .when('/edges', {
        templateUrl : 'views/edges.html',
        controller: 'EdgesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
