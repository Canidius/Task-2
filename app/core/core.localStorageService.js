(function(){
	'use strict'
	angular
		.module('app.core')
		.service('localStorage',localStorage)

	localStorage.$inject=['$q'];

	function localStorage($q){

		var STORAGE_ID = 'userStorage';

		var store = {

			users: [],

			saveToLocalStorage: function(users){
				sessionStorage.setItem(STORAGE_ID, JSON.stringify(users));
			},

			getFromLocalStorage: function(){
				return JSON.parse(sessionStorage.getItem(STORAGE_ID) || '[]');;
			},

			deleteUser: function deleteUser(user){
				var deffered = $q.defer();

				store.users.splice(store.users.indexOf(user),1);
				store.saveToLocalStorage(store.users);
				deffered.resolve(store.users);

				return deffered.promise;
			},

			saveUser: function saveUser(user){
				var deffered = $q.defer();

				store.users.push(user);
				store.saveToLocalStorage(store.users);
				deffered.resolve(store.users);

				return deffered.promise;
			},

			updateUser: function updateUser(user,index){
				var deffered = $q.defer();

				store.users[index]= user;
				store.saveToLocalStorage(store.users)
				deffered.resolve(store.users);

				return deffered.promise;
			},

			getUsers: function getUsers(){
				var deffered = $q.defer();

				angular.copy(store.getFromLocalStorage(),store.users);
				deffered.resolve(store.users);

				return deffered.promise;
			},

			getUser: function getUser(id){
				var deffered = $q.defer();
				var user = {};
				angular.copy(store.getFromLocalStorage(),store.users);
				user = store.users.find(function(element,index,array){
					if(element.id == id)
						return element;
					return false;
				})
				deffered.resolve(user);

				return deffered.promise
			}
		};

		return store;
	};
})()