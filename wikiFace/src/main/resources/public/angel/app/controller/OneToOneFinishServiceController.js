/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('OneToOneFinishServiceController', ["asyncHttp", "tableService", "DataCheckService", "ScopeService", "$scope", function (asyncHttp, tableService, DataCheckService, ScopeService, $scope) {


    var domain = {"doneList": "/admin/getEndOneToOneApply"}

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


    $scope.getURL = function (id, conId) {
        var str = "复制地址，发个学员：school.iboom.tv/" + id;
        if (conId) {
            str = str + "/" + conId;
        }
        layer.alert(str)
    }

    //默认
    getInirtableDate(domain.doneList, {page: 0, size: 15})
}]);
