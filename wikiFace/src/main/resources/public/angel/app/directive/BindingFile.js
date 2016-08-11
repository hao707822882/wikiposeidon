/**
 * 将file绑定到$scope中去
 * Created by Administrator on 2016/3/10.
 */
myAppModule.directive("file", function ($rootScope) {
        return {
            restrict: 'A',
            replace: true,
            link: function (scope, $element, $attrs) {//注册事件监测

                var name = $attrs.file;
                $($element).on('change', function () { //逻辑添加....
                    var file = $element[0].files[0]
                    if (file != null) {
                        if (!scope.$$phase) {
                            scope.$apply(function () {
                                scope[name] = file;
                                console.log("file has attache to scope")
                                //广播文件选择事件
                                var data = {'key': name, file: file};
                                $rootScope.$broadcast('fileSelected', data);
                            });
                        }
                    }
                });
            }
        }
    }
)

