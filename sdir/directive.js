'use strict';
angular.module('myApp.directive', ['ngRoute'])
    .directive('myDirctive', function() {

        return {
            restrict: "EA",
            scope: false,
            template: "<div>Your name is : {{name}}</div>" +
                "Change your name : <input type='text' ng-model='name' />"
        };
    })