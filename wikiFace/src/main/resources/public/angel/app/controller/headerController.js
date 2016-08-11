/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('headerController', ["LoginStatue", "$scope", function (LoginStatue, $scope) {
    $scope.name = LoginStatue.get().username
    $scope.password = LoginStatue.get().password
    $scope.goBack = function () {
        window.history.back()
    }

    $scope.unlock = function () {
        if ($scope.checkPassword == $scope.password) {
            $("#ajaxModal").hide()
        } else {
            layer.msg("密码错误！")
        }
    }

}]);
