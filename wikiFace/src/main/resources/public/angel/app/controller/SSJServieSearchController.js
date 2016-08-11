/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('SSJServiceSearchController', ["asyncHttp", "tableService", "DataCheckService", "ScopeService", "$scope", function (asyncHttp, tableService, DataCheckService, ScopeService, $scope) {


    //只获取一对一服务
    var domain = {
        "search": "/admin/getSSJByStudentNum",
        "statue": "/admin/ssj/studentStatue"
    }


    $scope.search = function () {
        asyncHttp.create(domain.search + "?studentNum=" + $scope.studentNum, null, function (data, status, func, config) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('数据获取失败！请联系小明');
                return;
            }
            $scope.studentApplys = data.data;
            console.log($scope.studentApplys)
            $scope.getStatue()
        }, function (data) {
            layer.alert('服务器异常！请联系小明');
            console.log(data)
        })
    }


    $scope.getStatue = function () {
        asyncHttp.get(domain.statue + "?studentNum=" + $scope.studentNum, function (data, status, func, config) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('数据获取失败！请联系小明');
                return;
            }
            //输出状态
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
