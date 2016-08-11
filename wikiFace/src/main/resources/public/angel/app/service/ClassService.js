/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.provider("ClassService", function () {
    this.statueUrl = "/admin/getAllClass";
    this.setStatueUrl = function (newUrl) {
        if (newUrl) this.statueUrl = newUrl;
    }

    this.$get = function (syncHttp) { // injectables go here
        var self = this;
        var allClass = {};
        //获取
        function errorHandler() {
            layer.alert("获取所有班级失败");
        }

        allClass = syncHttp.Get(self.statueUrl, null, errorHandler);
        allClass = allClass.data;

        var service = {
            getAll: function () {
                return allClass
            }
        };
        return service;
    }
})
