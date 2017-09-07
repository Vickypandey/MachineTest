'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.parseInvoice',
  'myApp.directive',
  'myApp.dir',
  'myApp.marcopolo',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
  .when('/parseInvoice', {
      templateUrl: 'parseInvoice/parseInvoice.html',
      controller: 'ParseInvoiceCtrl'
    })

  .when('/sdirective', {
      templateUrl: 'sdir/sdir.html',
      controller: 'DirectiveCtrl'
    })
  .when('/marco-polo', {
      templateUrl: 'marcopolo/marco-polo.html',
      controller: 'MarcoCtrl'
    })
  .otherwise({redirectTo: '/parseInvoice'});
}]);
