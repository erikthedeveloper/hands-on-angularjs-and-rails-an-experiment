'use strict';

angular.module('swFrontApp')
  .controller('NavigationCtrl', function ($scope, $location) {

    $scope.isActive = function(path)
    {
      // return true;
      return path === $location.path();
    };

  });
