/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('growthImportController', ["asyncHttp", "tableService", "DataCheckService", "ScopeService", "$scope", function (asyncHttp, tableService, DataCheckService, ScopeService, $scope) {

    var domainUrl = {
        importUrl: "/admin/growthPlan/import"
    }

    /**
     * 导入数据
     */
    $scope.dataImport = function () {
        var data = $scope.growthPlanDate;
        if (data == undefined || data.length == 0) {
            layer.alert("导入的数据为空！")
            return;
        }
        var data = {allotDate: $scope.growthPlanDate, 'timeout': 120000}
        asyncHttp.create(domainUrl.importUrl, data, function (data, status) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('导入数据失败！' + data.msg);
                return;
            }
            layer.alert('导入数据成功！');
        }, function (data) {
            layer.alert('数据导入异常');
        })
    }
}]);
