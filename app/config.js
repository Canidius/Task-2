(function(){
	'use strict'
	angular
		.module('app')
		.config(config);

	config.$inject=['$stateProvider','$urlRouterProvider'];	

	function config($stateProvider,$urlRouterProvider){

		$urlRouterProvider.otherwise('/home');
		
		$stateProvider

			.state('home', {
				url:'/home',
				templateUrl: 'user/userList/userList.tmpl.jade',
				controller: 'UserListController',
				controllerAs:'userList',
				resolve: {
					userListResolve : userListResolve
				}
			})

			.state('user',{
				url:'/user/:id',
				templateUrl: 'user/userProfile/userProfile.tmpl.jade',
				controller: 'UserProfileController',
				controllerAs:'userProfile',
				resolve: {
				 	userProfileResolve : userProfileResolve
				}
			})

			.state('edit',{
				url:'/user/edit/:id',
				templateUrl: 'user/userProfile/userProfileCreate.tmpl.jade',
				controller: 'UserProfileCreateController',
				controllerAs:'userProfile',
				//  resolve: {
				//  	userProfileResolve : userProfileResolve
				// }
			})
	}

	userListResolve.$inject=['localStorage'];
	
	function userListResolve(localStorage){
							return localStorage.getUsers()
						};

	userProfileResolve.$inject=['localStorage','$stateParams'];
	
	function userProfileResolve(localStorage,$stateParams){
							return localStorage.getUser($stateParams.id)
						};
})()