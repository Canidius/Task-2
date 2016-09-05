(function(){
	'use strict'

	angular
		.module('app.user')
		.controller('UserProfileController',UserProfileController)

	UserProfileController.$inject = ['$scope','localStorage','userProfileResolve'];

	function UserProfileController($scope,localStorage,userProfileResolve){
		var vm = this;
		vm.user=userProfileResolve;
		// vm.edit = edit;

		}


})()