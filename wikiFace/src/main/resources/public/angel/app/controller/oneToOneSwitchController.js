/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('oneToOneSwitchController', ["asyncHttp", "tableService", "DataCheckService", "ScopeService", "$scope", function (asyncHttp, tableService, DataCheckService, ScopeService, $scope) {

    var domainUrl = {
        class: "/admin/getClassWithSwitch",
        classClose: "/admin/addClassSwitch",
        classOpen: "/admin/deleteClassSwitch",
        student: "/admin/getStudentWithSwitchByClassId",
        studentClose: "/admin/addStudentSwitch",
        studentOpen: "/admin/deleteStudentSwitch",
    }

    /**
     * 班级学生状态缓存
     * @type {{}}
     */
    $scope.classStduentSwitchCache = {}

    /**
     * 获取分页数据
     * @param pageLab
     */
    $scope.getPage = function (pageLab) {
        var data = {page: pageLab, size: 15}
        getInirtableDate($scope.dataUrl[$scope.tabIndex], data)
    }

    /**
     * 获取分页数据基础方法
     * data参数：{page: 0, size: 20}
     */
    function getInirtableDate(url, data) {
        asyncHttp.create(url, data, function (data, status, func, config) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('数据获取失败！请联系小明');
                return;
            }
            $scope.tabDate = tableService.tabDate(data)
            console.log($scope.tabDate)
        }, function (data) {
            layer.alert('服务器异常！请联系小明');
            console.log(data)
        })
    }


    /**
     * 获取班级开关状态
     */
    $scope.getClassSwitchStatue = function () {
        asyncHttp.create(domainUrl.class, null, function (data, status, func, config) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('数据获取失败！请联系小明');
                return;
            }
            $scope.classTabDate = tableService.tabDate(data)
            console.log($scope.classTabDate)
        }, function (data) {
            layer.alert('服务器异常！请联系小明');
            console.log(data)
        })
    }


    /**
     * 获取班级学生开关状态
     */
    $scope.getClassStudentSwitchStatue = function (selectedClassId) {
        if (!$scope.selectedClassId) {
            //没有选择，或者为空
            return
        }
        var cache = $scope.classStduentSwitchCache[selectedClassId]

        if (!cache) {
            var data = {classId: selectedClassId};
            asyncHttp.create(domainUrl.student, data, function (data, status, func, config) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert('班级学员服务状态获取失败！请联系小明！错误是：' + data.msg);
                    return;
                }
                $scope.classStduentSwitchCache[selectedClassId] = tableService.tabLocalDate(data.data)
                $scope.classStudentTabDate = tableService.tabLocalPage($scope.classStduentSwitchCache[selectedClassId], 1)
                console.log($scope.classStudentTabDate)
            }, function (data) {
                layer.alert('服务器异常！请联系小明');
                console.log(data)
            })
        }
    }

    /**
     * 学员状态分页
     * @param index
     */
    $scope.getPage = function (index) {
        $scope.classStudentTabDate = tableService.tabLocalPage($scope.classStduentSwitchCache[$scope.selectedClassId], index - 1)
        console.log($scope.classStudentTabDate)
    }
    /**
     * 班级开启
     */
    $scope.classOpen = function (classSwitchId, event) {
        if (!classSwitchId) {
            throw new Error("classSwitchId can not be null")
        }

        asyncHttp.get(domainUrl.classOpen + "?classSwitchId=" + classSwitchId, function (data, status) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('班级学员服务状态获取失败！请联系小明！错误是：' + data.msg);
                return;
            }
            var s = ScopeService.scopeByEvent(event);
            s.cl.open = !(s.cl.open);
            layer.alert('改班级一对一服务已开启！');
        }, function () {
            layer.alert('班级学员服务状态获取失败！请联系小明！错误是：' + data.msg);
        })
    }

    /**
     * 班级关闭
     */
    $scope.classClose = function (classId, event) {
        if (!classId) {
            throw new Error("classId can not be null")
        }

        var data = {classId: classId, open: false}

        asyncHttp.create(domainUrl.classClose, data, function (data, status) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('班级学员服务状态获取失败！请联系小明！错误是：' + data.msg);
                return;
            }
            var s = ScopeService.scopeByEvent(event);
            s.cl.open = !(s.cl.open);
            s.cl.classSwitchId = data.data.id;
            layer.alert('改班级一对一服务已关闭！');
        }, function () {
            layer.alert('班级学员服务状态获取失败！请联系小明！错误是：' + data.msg);
        })
    }

    /**
     * 学员开启
     */
    $scope.studentOpen = function (studentSwitchId, event) {
        if (!studentSwitchId) {
            throw new Error("studentSwitchId can not be null")
        }

        asyncHttp.get(domainUrl.studentOpen + "?studentSwitchId=" + studentSwitchId, function (data, status) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('学员取消关闭状态错误！请联系小明！错误是：' + data.msg);
                return;
            }
            var s = ScopeService.scopeByEvent(event);
            s.s.open = !(s.s.open);
            layer.alert('改学生一对一服务已开启！');
        }, function (data) {
            layer.alert("学员取消关闭状态错误！请联系小明！错误是：" + data);
        })
    }

    /**
     * 学员关闭
     */
    $scope.studentClose = function (studentNum, classId, event) {
        if (!classId) {
            throw new Error("classId can not be null")
        }

        if (!studentNum) {
            throw new Error("studentNum can not be null")
        }

        var data = {classId: classId, studentNum: studentNum}

        asyncHttp.create(domainUrl.studentClose, data, function (data, status) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('学员关闭一对一服务出错,请联系小明！错误是：' + data.msg);
                return;
            }
            var s = ScopeService.scopeByEvent(event);
            s.s.open = !(s.s.open);
            s.s.studentSwitchId = data.data.id;
            layer.alert('改学员一对一服务已关闭！');
        }, function (data) {
            layer.alert('学员关闭一对一服务出错！请联系小明！错误是：' + data);
        })
    }


    $scope.getClassSwitchStatue()
}]);
