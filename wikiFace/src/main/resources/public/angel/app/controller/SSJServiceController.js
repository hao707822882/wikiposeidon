/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('SSJServiceController', ["asyncHttp", "tableService", "DataCheckService", "ScopeService", "$scope", function (asyncHttp, tableService, DataCheckService, ScopeService, $scope) {


    var domain = {
        "list": "/admin/getUnDoShengSiJu",
        "needDo": "/admin/getNeedDoShengSiJu",
        finish: "/admin/teacherDoneSSJ",
        "cancelSSJ": "/admin/cancelSSJ",
        "disToTeacher": "/admin/distributeToTeacher"
    }

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


    $scope.cancelSSJ = function (id, event) {
        layer.prompt({
            title: '取消原因：',
            formType: 2 //prompt风格，支持0-2
        }, function (val) {
            if (!val || "" == val) {
                layer.alert("原因必填！")
                return;
            }
            var d = {"id": id, "reason": val}
            layer.confirm("确认取消该生死局！", {
                btn: ['确定', '取消'] //按钮
            }, function () {
                asyncHttp.create(domain.cancelSSJ, d, function (data, status) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('取消生死局失败！');
                        return;
                    } else {
                        layer.alert("取消生死局成功！")
                        $(event.target).parents("tr").remove();
                    }
                }, function (data) {
                    layer.alert('取消生死局失败！' + data.msg);
                })
            }, function () {
            })
        });
    }


    $scope.getTeacherEvaluate = function () {
        if (!($scope.dx && $scope.zy && $scope.sc && $scope.fy && $scope.tz && $scope.zhpj)) {
            layer.alert("评论数据缺失！")
            throw new Error();
        }
        var d = {dx: $scope.dx, zy: $scope.zy, sc: $scope.sc, fy: $scope.fy, tz: $scope.tz, zhpj: $scope.zhpj}
        return JSON.stringify(d);
    }


    $scope.finishSSJ = function (id, $event, show) {
        if (show) {
            $("#evaluate").modal();
            $scope.ssjId = id;
            $scope.event = $event;
        } else {
            if (!$scope.ssjId) {
                layer.alert("缺失生死局服务ID，请刷新重试！")
                return;
            }
            var teacherEvaluate = $scope.getTeacherEvaluate()

            var data = {"id": $scope.ssjId, "result": 1, 'evaluate': teacherEvaluate}

            layer.confirm("确认完成生死局！", {
                btn: ['完成', '取消'] //按钮
            }, function () {
                asyncHttp.create(domain.finish, data, function (data, status, func, config) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('提交失败！请联系小明');
                        return;
                    }
                    layer.alert('提交成功！');
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

    /**
     * 显示申请列表
     */
    $scope.getSQList = function () {
        getInirtableDate(domain.list, {page: 0, size: 15})
        $scope.showNeedDo = false;
    }


    /**
     * 显示学要做的列表
     * 显示学要做的列表
     */
    $scope.getNDList = function () {
        getInirtableDate(domain.needDo, {page: 0, size: 100})
        $scope.showNeedDo = true;
    }

    /**
     * 获取给老师
     * @param appley
     */
    $scope.distribute = function (applyId, event) {
        asyncHttp.get(domain.disToTeacher + "?applyId=" + applyId, function (data, status, func, config) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('分配失败！');
                return;
            }
            layer.alert('分配成功！');
            $(event.target).parents("tr").remove();
            console.log($scope.tabDate)
        }, function (data) {
            layer.alert('提交失败！请联系小明');
            console.log(data)
        })
    }

    //默认
    //getInirtableDate(domain.list, {page: 0, size: 15})
    $scope.getNDList();
}]);
