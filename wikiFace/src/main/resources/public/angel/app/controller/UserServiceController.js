/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('UserServiceController', ["asyncHttp", "tableService",
    "DataCheckService", "ScopeService", "RoleService", "$scope", function (asyncHttp,
                                                                           tableService, DataCheckService, ScopeService, RoleService, $scope) {

        var domain = {
            "userList": "/admin/getAllTeacherUser",
            "del": "/admin/delAccount",
            "add": "/admin/addAccount",
            "updateBaseInfo": "/admin/updateTeacherBaseInfo",
            "getRoles": "/admin/getUserRoles",
            "delRole": "/admin/remRoles",
            "addRole": "/admin/addRoles"
        }

        $scope.allRoles = RoleService.getAll();

        $scope.subObj = {};
        $scope.target = {};
        $scope.targetEvent = {};

        $scope.selectRole = "---请选择权限---"
        $scope.showAddTeacher = function () {
            $("#addTeacher").modal();
        }

        $scope.getAllTeacherUser = function () {
            asyncHttp.get(domain.userList, function (data, status, func, config) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert('数据获取失败！请联系小明');
                    return;
                }
                $scope.da = data.data
            }, function (data) {
                layer.alert('服务器异常！请联系小明');
                console.log(data)
            })
        }


        $scope.del = function (id, event) {
            layer.confirm("确认删除该用户！", {
                btn: ['确认', '取消'] //按钮
            }, function () {
                asyncHttp.get(domain.del + "?id=" + id, function (data, status, func, config) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('数据获取失败！请联系小明');
                        return;
                    }
                    $(event.target).parents("tr").remove();
                    layer.alert("老师账户已删除")
                }, function (data) {
                    layer.alert('老师账户删除失败');
                    console.log(data)
                })
            }, function () {
            })
        }

        $scope.saveAccount = function () {
            layer.confirm("确认添加用户！" + $scope.subObj.name, {
                btn: ['确认', '取消'] //按钮
            }, function () {
                if (!$scope.subObj.name || !$scope.subObj.username || !$scope.subObj.password) {
                    layer.alert("数据不全，无法提交")
                    return;
                }
                asyncHttp.create(domain.add, $scope.subObj, function (data, status, func, config) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('添加老师失败！请重试');
                        return;
                    }
                    $scope.da.push(data.data);
                    layer.alert("添加老师OK！")
                    $("#addTeacher").modal("hide");
                }, function (data) {
                    layer.alert('添加老师失败！');
                    console.log(data)
                })
            }, function () {
            })
        }

        $scope.showChange = function (t, event) {
            $("#changTeacher").modal();
            $scope.target = angular.copy(t);
            $scope.targetEvent = event;
        }

        $scope.doChange = function () {
            layer.confirm("修改用户信息！" + $scope.target.name, {
                btn: ['确认', '取消'] //按钮
            }, function () {
                if (!$scope.target.name || !$scope.target.username || !$scope.target.password || !$scope.target.id) {
                    layer.alert("数据不全，无法提交")
                    return;
                }
                asyncHttp.create(domain.updateBaseInfo, $scope.target, function (data, status, func, config) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('修改老师基础信息失败！');
                        return;
                    }

                    ScopeService.scopeByEvent($scope.targetEvent).t = data.data;
                    layer.alert("修改老师基础信息OK！")
                    $("#changTeacher").modal("hide");
                }, function (data) {
                    layer.alert('修改老师基础信息失败！');
                    console.log(data)
                })
            }, function () {
            })
        }

        $scope.showAuthority = function (t, event) {
            $("#TeacherAuthority").modal();
            asyncHttp.get(domain.getRoles + "?id=" + t.id, function (data, status, func, config) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert('获取角色信息失败！');
                    return;
                }
                $scope.showAuthorityTarget = t;
                $scope.userRoles = data.data;
            }, function (data) {
                layer.alert('老师账户删除失败');
                console.log(data)
            })
        }


        $scope.delRole = function (id, event) {
            layer.confirm("删除用户角色！", {
                btn: ['确认', '取消'] //按钮
            }, function () {
                asyncHttp.get(domain.delRole + "?roleId=" + id + "&teacherId=" + $scope.showAuthorityTarget.id, function (data, status, func, config) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('取消角色失败！');
                        return;
                    }
                    $(event.target).parents("tr").remove();
                    layer.alert("取消角色成功！")
                }, function (data) {
                    layer.alert('取消角色失败！');
                    console.log(data)
                })
            }, function () {
            })
        }

        $scope.addRole = function (t, event) {
            layer.confirm("增加用户角色！", {
                btn: ['确认', '取消'] //按钮
            }, function () {
                asyncHttp.get(domain.addRole + "?roleId=" + $scope.selectRole + "&teacherId=" + $scope.showAuthorityTarget.id, function (data, status, func, config) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('增加用户角色失败！');
                        return;
                    }
                    $scope.userRoles.push({
                        "id": $scope.selectRole,
                        "role": RoleService.get($scope.selectRole) != null ? RoleService.get($scope.selectRole).role : "无"
                    })
                    layer.alert("增加用户角色成功！")
                }, function (data) {
                    layer.alert('增加用户角色失败！');
                    console.log(data)
                })
            }, function () {
            })

        }




        //默认
        $scope.getAllTeacherUser()
    }]);
