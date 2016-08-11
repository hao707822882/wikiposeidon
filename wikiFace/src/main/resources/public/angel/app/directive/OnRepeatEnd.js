/**
 * Created by Administrator on 2016/3/10.
 */
myAppModule.directive('repeatFinish', function () {
    return {
        link: function (scope, element, attr) {
            console.log(scope.$index)
            if (scope.$last == true) {
                console.log('ng-repeat执行完毕')
                //向父控制器传递事件
                scope.$emit('to-parent');
                //向子控制器传递事件
                scope.$broadcast('to-child');
            }
        }
    }
})