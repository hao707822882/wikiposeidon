/**
 * Created by Administrator on 2016/3/10.
 */
myAppModule.directive("ueidter", function ($rootScope) {
        return {
            restrict: 'EA',
            require: 'ngModel',
            compile: function (element, attributes) {
                console.log(element)
                //获取ID
                var editerId = attributes.eid;
                //创建编辑器节点
                element.append($('<script type="text/plain" id="' + editerId + '">'));
                var editerId = attributes.eid;
                var um = UM.getEditor(editerId);
                return {
                    pre: function preLink(scope, element, attributes) {
                        //初始化编辑器
                        um.setWidth(attributes.ewidth ? attributes.ewidth : "98%")
                        um.setHeight(attributes.eheight ? attributes.eheight : "80%")
                    },
                    post: function postLink(scope, element, attributes, ngModel) {
                        //设置编辑器数据变化对应model的绑定
                        var planText = attributes.ptext;
                        um.addListener('contentChange', function () {//双向绑定
                            if (!scope.$$phase) {
                                scope.$apply(function () {
                                    //html格式的
                                    ngModel.$setViewValue(um.getContent());
                                    //设置文本格式
                                    planText && (scope[planText] = um.getPlainTxt());
                                    console.log(um.getPlainTxt())
                                });
                            }
                        });

                        ngModel.$render = function () {
                            var _initContent = ngModel.$isEmpty(ngModel.$viewValue) ? '' : ngModel.$viewValue;
                            console.log(ngModel)
                            um.setContent(_initContent);//双向绑定
                            console.log(arguments)
                        };


                        $rootScope.$on('$routeChangeStart', function () {
                            try {
                                um && um.destroy();
                            } catch (e) {
                                console.log(e)
                            }
                        });
                    }
                };
            }
        }
    }
)
