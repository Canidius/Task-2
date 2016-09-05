(function(){
	'use strict'

	angular
		.module('app.user')
		.controller('UserProfileCreateController',UserProfileCreateController)

	UserProfileCreateController.$inject = ['$scope','localStorage'];

	function UserProfileCreateController($scope,localStorage){
		var vm = this;
		vm.user={};
		vm.create = create;

		uuid = uuid; 


        function uuid() {

            var i, random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
            }

            return uuid;
        }

        Object.defineProperty(vm.user, 'id', {
			  enumerable: true,
			  configurable: false,
			  writable: false,
			  value: uuid()
			});

		function create(user){
			console.log(user)
			localStorage.saveUser(user)
				.then(function (){
					$state.go('home')
				});
		}
	}


})()