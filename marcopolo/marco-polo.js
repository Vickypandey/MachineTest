'use strict';

angular.module('myApp.marcopolo', ['ngRoute'])
    .controller('MarcoCtrl', function($scope) {
    	
$scope.items = [];
 $scope.marco = function(){
 	var retVal='';
	for(var i=1; i<=100;i++){
		if(i%4==0 && i%7==0) // checks if number is divisible by both 4 and 7
			retVal+='marcopolo\n'
		else if(i%4==0)  // checks if number is divisible by 4
			retVal+='marco\n'
		else if(i%7==0) // checks if number is divisible by 7
			retVal+='polo\n'
		else
			retVal+=i;
		retVal+=',';
		}
		retVal =retVal.substring(0,retVal.length-1);
		 $scope.items.push(retVal);
		console.log($scope.items);
 }
    
    })