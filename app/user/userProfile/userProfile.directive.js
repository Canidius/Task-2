(function(){
	angular
		.module('app.user')
		.directive('userProfile',userProfile);

		function userProfile(){  
	      var directive = {
	        restrict: 'EA',
	        templateUrl: 'user/userProfile/userProfile.tmpl.jade',
	        scope: {
	        },
	        link: link,
	        controller: 'UserProfileController',
	        controllerAs: 'userProfile',
	        bindToConroller: true
	      };

	      return directive;

	      function link($scope,$element,$attrs,user){

	      }
		}
})()