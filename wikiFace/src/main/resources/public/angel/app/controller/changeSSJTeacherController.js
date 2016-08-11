/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('changeSSJTeacherController', [
        "asyncHttp", "tableService", "DataCheckService", "ScopeService", "ChampionService", "TeacherService", "$scope",
        function (asyncHttp, tableService, DataCheckService, ScopeService, ChampionService, TeacherService, $scope) {

            var domain = {
                "search": "/admin/getSSJByStudentNum",
                "change": "/admin/ssj/changeTeacher"
            }

            $scope.teachers = TeacherService.getByRole("ssj");


            $scope.getSSJ = function () {
                asyncHttp.get(domain.search + "?studentNum=" + $scope.searchStudentNum, function (data, status) {
                    if (!data.data || data.data.length == 0) {
                        layer.alert("未检索到生死局!")
                        return;
                    }
                    if (data.error) {
                        layer.alert("获取生死局失败！")
                        return;
                    }
                    $scope.ssjs = data.data;
                }, function (data) {
                    layer.alert('检索生死局失败！');
                })
            }


            //选择
            $scope.changeTeacher = function (ssj) {
                $scope.chosedSSJ = ssj;
                $('#changeTeacherDialog').modal()
            }


            $scope.doChange = function () {

                var choseToChangeTeacher = TeacherService.get($scope.selectTeacher);
                if (!choseToChangeTeacher) {
                    //判断为空
                    layer.alert("获取老师失败！请重试")
                    return;
                }
                var msg = "修改老师为：" + choseToChangeTeacher.name;

                if (!$scope.chosedSSJ) {
                    layer.alert("请重试")
                    return;
                }

                layer.confirm(msg, {
                    btn: ['确认修改', '取消'] //按钮
                }, function () {
                    asyncHttp.create(domain.change, {
                        "applyId": $scope.chosedSSJ.id,
                        "newTeacherId": $scope.selectTeacher
                    }, function (data, status) {
                        if (data.error) {
                            layer.alert("分配新老师失败！")
                            return;
                        }
                        var da = [];
                        da.push(data.data);
                        $scope.ssjs = da;
                        layer.alert("分配新老师成功！")
                        $('#changeTeacherDialog').modal("hide")
                    }, function (data) {
                        layer.alert('分配新老师失败！');
                    })
                }, function () {

                })

            }


        }
    ]
);
