/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.provider("StudentService", function () {
    this.statueUrl = "/admin/getByStudentNum";
    this.setStatueUrl = function (newUrl) {
        if (newUrl) this.statueUrl = newUrl;
    }

    this.$get = function (syncHttp) { // injectables go here
        var self = this;
        //ajax错误处理器
        function errorHandler() {
            layer.alert("获取学员失败！");
        }

        function getStudent(studentNum) {
            return syncHttp.Get(self.statueUrl + "?studentNum=" + studentNum, null, errorHandler).data;
        }

        var studentCacheMap = {}
        //如果数据存在

        var service = {
            get: function (studentNum) {
                var student = studentCacheMap[studentNum];
                if (!student) {
                    //当前缓存中没有数据
                    student = getStudent(studentNum);
                    if (student) {
                        studentCacheMap[student.studentNum] = student;
                    }
                }
                return student;
            }
        };
        return service;
    }
})
