/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.provider("TeacherService", function () {
    this.statueUrl = "/admin/getAllTeacher";
    this.setStatueUrl = function (newUrl) {
        if (newUrl) this.statueUrl = newUrl;
    }

    this.$get = function (syncHttp) { // injectables go here
        var self = this;
        var allTeacher = {};
        //获取
        function errorHandler() {
            layer.alert("获取所有老师失败");
        }

        allTeacher = syncHttp.Get(self.statueUrl, null, errorHandler);

        allTeacher = allTeacher.data;

        var allTeacherMap = {}
        //如果数据存在
        if (angular.isArray(allTeacher)) {
            angular.forEach(allTeacher, function (data) {
                allTeacherMap[data.id] = data;
            })
        }

        var service = {
            getAll: function () {
                return allTeacher
            },
            get: function (id) {
                return allTeacherMap[id];
            },
            getByRole: function (searchRole) {
                var rteachers = [];
                if (angular.isArray(allTeacher)) {
                    angular.forEach(allTeacher, function (teacher) {
                        if (teacher) {
                            if (angular.isArray(teacher.roles)) {
                                angular.forEach(teacher.roles, function (role) {
                                    console.log("---------" + role.role)
                                    if (role.role == searchRole) {
                                        rteachers.push(teacher);
                                    }
                                })
                            }
                        }
                    })
                }
                return rteachers;
            }

        };
        return service;
    }
})
