/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('TeamFireFinishServiceController', ["asyncHttp", "tableService", "DataCheckService", "ScopeService", "$scope", function (asyncHttp, tableService, DataCheckService, ScopeService, $scope) {


    var domain = {"doneList": "/admin/getFinishedTeamFire", "del": "/admin/delTeamFire"}

    /**
     * 获取分页数据
     * @param pageLab
     */
    $scope.getPage = function (pageLab) {
        var data = {page: pageLab, size: 15}
        getInirtableDate(domain.doneList, data)
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


    $scope.del = function (id, event) {
        layer.confirm("取消团战实训记录！", {
            btn: ['确认取消', '取消'] //按钮
        }, function () {
            asyncHttp.get(domain.del + "?id=" + id, function (data, status, func, config) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert('数据获取失败！请联系小明');
                    return;
                }
                $(event.target).parents("tr").remove();
                layer.alert("删除生死局成功")
            }, function (data) {
                layer.alert('服务器异常！请联系小明');
                console.log(data)
            })
        }, function () {
        })
    }


    //默认
    getInirtableDate(domain.doneList, {page: 0, size: 15})
}]);
