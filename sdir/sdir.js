'use strict';

angular.module('myApp.dir', ['ngRoute'])
  .controller('DirectiveCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.movie = "Ice Age";
   
  }]);