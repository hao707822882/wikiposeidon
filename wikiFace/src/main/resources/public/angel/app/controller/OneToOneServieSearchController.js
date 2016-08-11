/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('OneToOneServiceSearchController', ["asyncHttp",
    "tableService", "DataCheckService", "ScopeService", "TeacherService", "$scope",
    function (asyncHttp, tableService, DataCheckService, ScopeService, TeacherService, $scope) {


    //只获取一对一服务
        var domain = {
            "search": "/admin/getApplyByStudentNum",
            "change": "/admin/changeTeacher",
            "statue": "/admin/oneToOne/studentStatue"
        }

        $scope.teachers = TeacherService.getByRole("oneToOne");

    $scope.search = function () {
        asyncHttp.create(domain.search + "?studentNum=" + $scope.studentNum, null, function (data, status, func, config) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('数据获取失败！请联系小明');
                return;
            }
            $scope.studentApplys = data.data;
            $scope.getStatue()
        }, function (data) {
            layer.alert('服务器异常！请联系小明');
            console.log(data)
        })
    }

        $scope.showChangeTeacher = function (da) {
            $scope.changeTarget = da;
            $("#changeTeacherDialog").modal();
        }

        $scope.doChange = function () {
            var teacher = TeacherService.get($scope.selectTeacher);
            var data = {"newTeacherId": teacher.id, "applyId": $scope.changeTarget.id};
            if (!teacher) {
                layer.alert("老师数据为空！")
                return;
            }
            layer.confirm("一对一修改老师：" + teacher.name, {
                btn: ['确认取消', '取消'] //按钮
            }, function () {
                asyncHttp.create(domain.change, data, function (data, status, func, config) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('一对一修改老师失败！请联系小明');
                        return;
                    }
                    $scope.changeTarget.teacherId = teacher.id;
                    console.log($scope.studentApplys)
                    layer.alert("修改老师成功！")
                    $("#changeTeacherDialog").modal('hide');
                }, function (data) {
                    layer.alert('服务器异常！请联系小明');
                    $("#changeTeacherDialog").modal('hide');
                    console.log(data)
                })
            }, function () {

            })
        }


        $scope.getStatue = function () {
            asyncHttp.get(domain.statue + "?studentNum=" + $scope.studentNum, function (data, status, func, config) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert('数据获取失败！请联系小明');
                    return;
                }
                var statue = data.data;

                if (statue.ok) {
                    layer.alert("可以提交申请！")
                } else {
                    layer.alert(statue.reason);
                }


            }, function (data) {
                layer.alert('服务器异常！请联系小明');
                console.log(data)
            })
        }

}]);
