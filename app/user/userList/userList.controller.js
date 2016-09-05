(function () {
    'use strict';

    angular
        .module('app.user')
        .controller('UserListController', UserListController);

    UserListController.$inject = ['$scope','userListResolve'];

    /* @ngInject */
    function UserListController($scope,userListResolve) {
        
        var vm = this;
        vm.users = userListResolve;

        
}

})();

