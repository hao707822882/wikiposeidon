/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('wikiItemController', ["asyncHttp", "tableService", "DataCheckService", "ScopeService", "$scope", function (asyncHttp, tableService, DataCheckService, ScopeService, $scope) {

    var domain = {
        "myAll": "/admin/getMyAllOneToOneApply",
        "max": "/admin/getMyMaxQueueLength",
        "real": "/admin/getQueueRealLength",
        "endByTeacher": "/admin/endByTeacher",
        "updateRemark": "/admin/updateRemark",
        "evaluateByTeacher": "/admin/EvaluateByTeach",
        "setMax": "/admin/setQueueMaxLength"
    };


    $scope.changeQueue = function () {
        $("#setMax").modal();
    }

    $scope.doSetMax = function () {
        asyncHttp.get(domain.setMax + "?max=" + $scope.setMax, function (data, status) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('修改队列最大长度失败！' + data.msg);
                return;
            } else {
                $scope.maxLength = data.data;
                layer.alert("修改队列最大长度成功！")
                $("#setMax").modal("hide");
            }
        }, function (data) {
            layer.alert('修改队列最大长度失败！' + data.msg);
            $("#setRemark").modal("hide");
        })
    }

    $scope.getMyOneToOneApply = function () {
        asyncHttp.get(domain.myAll, function (data, status) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('获取数据失败！' + data.msg);
                return;
            } else {
                $scope.myApply = data.data;
            }
        }, function (data) {
            layer.alert('更新remark失败' + data.msg);
            $("#setRemark").modal("hide");
        })
    }

    $scope.getMyMaxQueueLength = function () {
        asyncHttp.get(domain.max, function (data, status) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('获取数据失败！' + data.msg);
                return;
            } else {
                $scope.maxLength = data.data;
            }
        }, function (data) {
            layer.alert('更新remark失败' + data.msg);
            $("#setRemark").modal("hide");
        })
    }

    $scope.getQueueRealLength = function () {
        asyncHttp.get(domain.real, function (data, status) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('获取数据失败！' + data.msg);
                return;
            } else {
                $scope.realLength = data.data;
            }
        }, function (data) {
            layer.alert('更新remark失败' + data.msg);
            $("#setRemark").modal("hide");
        })
    }


    //设置标注
    $scope.showRemark = function (data) {
        $scope.setRemarkScope = data;
        $("#setRemark").modal();
    }
    $scope.doSetRemark = function () {
        var remark = $scope.setRemarkModel;
        layer.confirm("修改备注为：" + remark, {
            btn: ['确定', '取消'] //按钮
        }, function () {
            var postData = {"remark": remark, "id": $scope.setRemarkScope.id};
            asyncHttp.create(domain.updateRemark, postData, function (data, status) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert('修改备注失败！' + data.msg);
                    return;
                } else {
                    $scope.setRemarkScope.remark = remark;
                    layer.alert("修改备注成功！");
                    $("#setRemark").modal("hide");
                }
            }, function () {
                layer.alert('修改备注失败');
                $("#setRemark").modal("hide");
            })
        }, function () {
        })
    }

    //老师评论
    $scope.showEvaluate = function (id, event) {
        $scope.actionId = id;
        $scope.actionEvent = event;
        $("#evaluate").modal();
    }
    $scope.getTeacherEvaluate = function () {
        if (!($scope.dx && $scope.zy && $scope.sc && $scope.fy && $scope.tz && $scope.zhpj)) {
            layer.alert("评论数据缺失！")
            throw new Error();
        }
        var d = {dx: $scope.dx, zy: $scope.zy, sc: $scope.sc, fy: $scope.fy, tz: $scope.tz, zhpj: $scope.zhpj}
        return JSON.stringify(d);
    }

    $scope.teacherEvaluate = function () {
        var evaluate = $scope.getTeacherEvaluate();
        var postDate = {"evaluate": evaluate, "applyId": $scope.actionId};
        layer.confirm("确认点评！", {
            btn: ['确定', '取消'] //按钮
        }, function () {
            asyncHttp.create(domain.evaluateByTeacher, postDate, function (data, status) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert('点评失败！');
                    return;
                } else {
                    layer.alert("点评成功！")
                    $($scope.actionEvent.target).parents("tr").remove();
                    $("#evaluate").modal("hide");
                }
            }, function (data) {
                layer.alert('逾期处理失败！' + data.msg);
                $("#evaluate").modal("hide");
            })
        }, function () {
        })
    }
    //逾期处理
    $scope.expire = function (id, event) {
        $scope.actionId = id;

        layer.prompt({
            title: '取消原因：',
            formType: 2 //prompt风格，支持0-2
        }, function (val) {
            var d = {"id": $scope.actionId, "reason": val}
            layer.confirm("确认取消该预约！", {
                btn: ['确定', '取消'] //按钮
            }, function () {
                asyncHttp.create(domain.endByTeacher, d, function (data, status) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('取消预约失败！');
                        return;
                    } else {
                        layer.alert("取消预约成功！")
                        $(event.target).parents("tr").remove();
                    }
                }, function (data) {
                    layer.alert('取消预约失败！' + data.msg);
                    $("#setRemark").modal("hide");
                })
            }, function () {
            })
        });

    }


    $scope.getMyOneToOneApply();
    $scope.getMyMaxQueueLength();
    $scope.getQueueRealLength();
}]);
