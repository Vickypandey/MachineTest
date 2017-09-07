'use strict';
angular.module('myApp.directive', ['ngRoute'])
.directive('myDirctive' , function() {
	 return {
        restrict: "E",
        scope: false,
        template: "<div>Movie title : {{movie}}</div>"+
        "Type a new movie title : <input type='text' ng-model='movie' />"
    };
})