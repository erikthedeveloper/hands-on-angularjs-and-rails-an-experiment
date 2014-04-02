'use strict';

angular.module('swFrontApp')
  .directive('navbar', function()
    {
      return {
        // Element
        restrict  : 'E',
        // View
        templateUrl  : 'views/navbar.html',
        controller: 'NavigationCtrl'
      };
    }
  );
