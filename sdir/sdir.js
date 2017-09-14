'use strict';

angular.module('myApp.dir', ['ngRoute'])


// Scope is used as the "glue" that we use to communicate between the parent controller, the directive, and the directive template. Whenever the AngularJS application is bootstrapped, a rootScope object is created. Each scope created by controllers, directives and services are prototypically inherited from rootScope.

// Yes, we can limit the scope on a directive . We can do so by creating an isolated scope for directive.
// There are 3 types of directive scopes:
// 1. Scope : False ( Directive uses its parent scope )
// 2. Scope : True ( Directive gets a new scope )
// 3. Scope : { } ( Directive gets a new isolated scope )

// Directives with the new isolated scope:  When we create a new isolated scope then it will not be inherited from the parent scope. This new scope is called Isolated scope because it is completely detached from its parent scope.
// Why? should we use isolated scope:  We should use isolated scope when we want to create a custom directive because it will make sure that our directive is generic, and placed anywhere inside the application. Parent scope is not going to interfere with the directive scope.

// Example of isolated scope:

// There’re 3 types of prefixes AngularJS provides for isolated scope these are : 
// 1. "@"   (  Text binding / one-way binding )
// 2. "="   ( Direct model binding / two-way binding )
// 3. "&"   ( Behaviour binding / Method binding  )

// All these prefixes receives data from the attributes of the directive element like : 

  .controller('DirectiveCtrl', ['$scope', function ($scope) {
    $scope.name = "Bikeshwar";
    $scope.reverseName = function(){
        $scope.name = $scope.name.split('').reverse().join('');
    };
   
  }]);


