/**
 * Created by Administrator on 2016/3/10.
 */
myAppModule.directive("lock", function (LoginStatue) {
        return {
            restrict: 'AE',
            replace: true,
            controller: function ($scope, $element, $attrs) {
            },
            link: function ($scope, $element, $attrs) {//注册事件监测
                //获取锁屏Id
                var lockScreenId = $attrs.lockid
                $(document).mousemove(function () {
                    $scope.timestamp = Date.parse(new Date());
                })

                setInterval(function () {
                    if (Date.parse(new Date()) - $scope.timestamp > 3000) {
                        $("#" + lockScreenId).css("display", "block")
                        console.log("-----")
                    }
                }, 1000 * 3000)
            }
        }
    }
)