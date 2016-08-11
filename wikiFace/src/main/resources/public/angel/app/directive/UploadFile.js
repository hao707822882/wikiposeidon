/**
 * 将file绑定到$scope中去
 * Created by Administrator on 2016/3/10.
 */
myAppModule.directive("upload", function ($rootScope) {
        return {
            restrict: 'A',
            replace: true,
            link: function (scope, $element, $attrs) {//注册事件监测


                var key = eval("(" + $attrs.upload + ")");

                console.log(key)

                var name = key.name;
                var url = key.url;
                var key = key.key;


                scope.$on("fileSelected", function (event, data) {
                    if (key == data.key) {
                        //key是匹配的，需要处理上传
                        console.log("处理上传")
                        console.log(url)
                        console.log(name)
                    }
                })

            }
        }
    }
)