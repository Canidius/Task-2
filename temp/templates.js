angular.module('app.templates', ['user/userList/userList.tmpl.jade', 'user/userList/userListItem.tmpl.jade', 'user/userProfile/userProfile.tmpl.jade', 'user/userProfile/userProfileCreate.tmpl.jade']);

angular.module("user/userList/userList.tmpl.jade", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("user/userList/userList.tmpl.jade",
    "<div class=container><div class=row><div class=\"center-block col-sm-8 col-sm-push-2\"><ul class=list-group><li ng-repeat=\"user in userList.users track by $index\" class=list-group-item><user-list-item user=user></user-list-item></li></ul><button ng-click=userList.delete() class=\"btn btn-danger\">Delete</button></div></div></div>");
}]);

angular.module("user/userList/userListItem.tmpl.jade", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("user/userList/userListItem.tmpl.jade",
    "<span><a ui-sref=user({id:user.id}) ng-bind=user.name></a></span> <input type=checkbox class=\"pull-right\">");
}]);

angular.module("user/userProfile/userProfile.tmpl.jade", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("user/userProfile/userProfile.tmpl.jade",
    "<div class=container><div class=row><div class=\"center-block col-sm-8 col-sm-push-2\"><div class=\"panel panel-default\"><div class=panel-heading><h3>{{userProfile.user.surName}} {{userProfile.user.name}}</h3></div><div class=panel-body><ul class=list-group><li class=list-group-item><b>Name:</b> {{userProfile.user.name}}</li><li class=list-group-item><b>Surname:</b> {{userProfile.user.surName}}</li><li class=list-group-item><b>E-mail:</b> {{userProfile.user.email}}</li><li class=list-group-item><b>Age:</b> {{userProfile.user.dateOfBirth}}</li><li class=list-group-item><b>Gender:</b> {{userProfile.user.gender}}</li><li class=list-group-item><b>About:</b> {{userProfile.user.about}}</li></ul></div></div><button ui-sref=edit({id:user.login}) class=\"btn btn-primary\">Edit</button></div></div></div>");
}]);

angular.module("user/userProfile/userProfileCreate.tmpl.jade", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("user/userProfile/userProfileCreate.tmpl.jade",
    "<div class=container><div class=row><div class=\"center-block col-sm-8 col-sm-push-2\"><form><div class=form-group><label for=Name>Name</label><input type=text name=Name placeholder=\"Write your Name\" ng-model=userProfile.user.name class=\"form-control\"></div><div class=form-group><label for=Surname>Surname</label><input type=text name=Surname placeholder=\"Write your Surname\" ng-model=userProfile.user.surName class=\"form-control\"></div><div class=form-group><label for=Password>Password</label><input type=password name=password placeholder=\"Write your Password\" ng-model=userProfile.user.password class=\"form-control\"></div><div class=form-group><label for=Email>E-mail</label><input type=email name=Email placeholder=\"Write your Email\" ng-model=userProfile.user.email class=\"form-control\"></div><div class=form-group><label for=Date>Date of Birth</label><input type=date name=Date ng-model=userProfile.user.dateOfBirth class=\"form-control\"></div><div class=form-group><label for=Gender>Gender <input type=radio name=Gender value=male ng-model=\"userProfile.user.gender\"> Male <input type=radio name=Gender value=female ng-model=\"userProfile.user.gender\"> Female</label></div><div class=form-group><label for=About>About You</label><textarea name=About placeholder=\"place some text about you\" rows=5 ng-model=userProfile.user.about class=form-control></textarea></div><button ng-click=userProfile.create(userProfile.user) class=\"btn btn-success\">Create</button> <button ng-click=user.Edit() class=\"btn btn-success\">Edit</button></form></div></div></div>");
}]);
