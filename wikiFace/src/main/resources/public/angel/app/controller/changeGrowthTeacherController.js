/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('changeGrowthTeacherController', [
        "asyncHttp", "tableService", "DataCheckService", "ScopeService", "ChampionService", "TeacherService", "$scope",
        function (asyncHttp, tableService, DataCheckService, ScopeService, ChampionService, TeacherService, $scope) {

            var domain = {
                "search": "/admin/growthPlan/getStudentGrowthPlanAllot",
                "change": "/admin/growthPlan/changeStudentGrowthPlanAllot"
            }


            $scope.plan = {"studentNum": "请输入学号检索！"};
            $scope.teachers = TeacherService.getByRole("growth");

            $scope.selectTeacher = 4;

            $scope.getGrowthPlan = function () {
                asyncHttp.get(domain.search + "?studentNum=" + $scope.searchStudentNum, function (data, status) {
                    if (data == "") {
                        layer.alert("未检索到成长计划!")
                        return;
                    }
                    if (data.error) {
                        layer.alert("获取成长计划失败！")
                        return;
                    }
                    $scope.plan = data.data;
                }, function (data) {
                    layer.alert('检索获取成长计划失败！');
                })
            }


            //选择
            $scope.changeTeacher = function (plan) {
                $scope.chosePlan = plan;
                //$('#evaluate').modal('hide')
                $('#changeTeacherDialog').modal()
            }


            $scope.doChange = function () {

                var choseToChangeTeacher = TeacherService.get($scope.selectTeacher);
                var msg = "修改老师为：" + choseToChangeTeacher.name;

                layer.confirm(msg, {
                    btn: ['确认修改', '取消'] //按钮
                }, function () {
                    asyncHttp.get(domain.change + "?growthPlanId=" + $scope.chosePlan.id + "&teacherId=" + choseToChangeTeacher.id, function (data, status) {
                        if (data.error) {
                            layer.alert("分配新老师失败！")
                            return;
                        }
                        $scope.plan = data.data;
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
