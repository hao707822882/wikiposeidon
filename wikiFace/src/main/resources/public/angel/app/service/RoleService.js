/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.provider("RoleService", function () {
    this.statueUrl = "/admin/getAllRoles";
    this.setStatueUrl = function (newUrl) {
        if (newUrl) this.statueUrl = newUrl;
    }

    this.$get = function (syncHttp) { // injectables go here
        var self = this;
        var allRole = {};
        //获取
        function errorHandler() {
            layer.alert("获取所有老师失败");
        }

        allRole = syncHttp.Get(self.statueUrl, null, errorHandler);

        allRole = allRole.data;

        var allTeacherMap = {}
        //如果数据存在
        if (angular.isArray(allRole)) {
            angular.forEach(allRole, function (data) {
                allTeacherMap[data.id] = data;
            })
        }

        var service = {
            getAll: function () {
                return allRole
            },
            get: function (id) {
                return allTeacherMap[id];
            }
        };
        return service;
    }
})
