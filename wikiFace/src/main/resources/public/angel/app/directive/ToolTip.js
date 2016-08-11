/**
 * toolTip展现学员的QQ
 * Created by Administrator on 2016/3/10.
 */
myAppModule.directive("tipq", function (StudentService) {
        return {
            restrict: 'AE',
            replace: true,
            controller: function ($scope, $element, $attrs) {
            },
            link: function ($scope, $element, $attrs) {//注册事件监测
                var date = $($element);
                date.hover(function () {
                    var student = StudentService.get($attrs.tipq)
                    date.tooltip({'title': student == null ? "学员未空" : student.qq})
                    date.tooltip("show")
                }, function () {
                    date.tooltip("hide")
                })

            }
        }
    }
)

/**
 * 展示学员的评论
 */
myAppModule.directive("tipe", function () {
        return {
            restrict: 'AE',
            replace: true,
            controller: function ($scope, $element, $attrs) {
            },
            link: function ($scope, $element, $attrs) {//注册事件监测
                var date = $($element);
                date.hover(function () {
                    date.tooltip({'title': $scope.partners.teamFireEvaluate == null ? "暂无评论" : $scope.partners.teamFireEvaluate.teacherAttitudeEvaluate})
                    date.tooltip("show")
                }, function () {
                    date.tooltip("hide")
                })

            }
        }
    }
)