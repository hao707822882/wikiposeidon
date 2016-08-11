/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('TeamFireServiceController', ["asyncHttp", "tableService", "DataCheckService", "ScopeService", "$scope", function (asyncHttp, tableService, DataCheckService, ScopeService, $scope) {


    var domain = {"list": "/admin/getUnDoTeamFire", finish: "/admin/teacherDoneTeamFire"}

    /**
     * 获取分页数据
     * @param pageLab
     */
    $scope.getPage = function (pageLab) {
        var data = {page: pageLab, size: 15}
        getInirtableDate(domain.list, data)
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

    $scope.getTeacherEvaluate = function () {
        if (!($scope.dx && $scope.zy && $scope.sc && $scope.fy && $scope.tz && $scope.zhpj)) {
            layer.alert("评论数据缺失！")
            throw new Error();
        }
        var d = {dx: $scope.dx, zy: $scope.zy, sc: $scope.sc, fy: $scope.fy, tz: $scope.tz, zhpj: $scope.zhpj}
        return JSON.stringify(d);
    }


    $scope.finishTeamFire = function (id, $event, show) {
        if (show) {
            $("#evaluate").modal();
            $scope.ssjId = id;
            $scope.event = $event;
        } else {
            if (!$scope.ssjId) {
                layer.alert("缺失生死局服务ID，请刷新重试！")
                return;
            }
            var evaluate = $scope.getTeacherEvaluate()
            var data = {"id": $scope.ssjId, "evaluate": evaluate}
            layer.confirm("确认完成生死局！", {
                btn: ['完成', '取消'] //按钮
            }, function () {
                asyncHttp.create(domain.finish, data, function (data, status, func, config) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('提交失败！请联系小明');
                        return;
                    }
                    layer.alert('提交成功！请联系小明');
                    $($scope.event.target).parents("tr").remove();
                    $("#evaluate").modal("hide");
                    console.log($scope.tabDate)
                }, function (data) {
                    layer.alert('提交失败！请联系小明');
                    console.log(data)
                })
            }, function () {

            })
        }
    }
    $scope.$on('to-parent', function () {
        console.log("----")
        $("[data-toggle='tooltip']").tooltip();
    })

    //默认
    getInirtableDate(domain.list, {page: 0, size: 15, "timeout": 1000 * 10})
}]);
