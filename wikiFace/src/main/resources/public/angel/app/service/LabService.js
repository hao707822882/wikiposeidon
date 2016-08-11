/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.provider("LabService", function () {
    this.statueUrl = "/admin/getAllLab";
    this.setStatueUrl = function (newUrl) {
        if (newUrl) this.statueUrl = newUrl;
    }

    this.$get = function (syncHttp) { // injectables go here
        var self = this;
        var allLab = {};
        //获取
        function errorHandler() {
            layer.alert("获取所有老师失败");
        }

        allLab = syncHttp.Get(self.statueUrl, null, errorHandler);

        allLab = allLab.data;

        var service = {
            getAll: function () {
                return allLab
            }
        };
        return service;
    }
})
