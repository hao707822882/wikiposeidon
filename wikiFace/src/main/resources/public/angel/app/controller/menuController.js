/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('menuController', ["LoginStatue", "$scope", function (LoginStatue, $scope) {
    $scope.name = LoginStatue.get().username
    $scope.password = LoginStatue.get().password


    var roles = LoginStatue.get().roles;
    if (angular.isArray(roles)) {
        angular.forEach(roles, function (rol) {
            if (rol) {
                if (rol.role == "teacherAdmin") {
                    $scope.hasRoleChangeTeacher = true;
                }
            }
        })
    }


}]);
