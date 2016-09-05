(function () {
    'use strict';

    angular
        .module('app.user')
        .directive('userListItem', userListItem);



    /* @ngInject */
    function userListItem() {    
      var directive = {
        restrict: 'EA',
        templateUrl: 'user/userList/userListItem.tmpl.jade',
        scope: {
            user: '='
        },
        link: link,
        controller: UserListItemController,
        controllerAs: 'user',
        bindToConroller: true
      };

      return directive;

      function link($scope,$element,$attrs,user){
            user.user = $attrs.user;
      }
    }

      UserListItemController.$inject=['$scope']

      function UserListItemController($scope){
        var vm = this;
      };
})();

