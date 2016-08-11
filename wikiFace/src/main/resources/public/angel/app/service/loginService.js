/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.provider("LoginStatue", function () {
    this.statueUrl = "/auth/authStatue"
    this.loginUrl = "/index.html"
    this.setStatueUrl = function (newUrl) {
        if (newUrl) this.statueUrl = newUrl;
    }
    this.setLoginUrl = function (newLoginUrl) {
        if (newLoginUrl) this.loginUrl = newLoginUrl;
    }

    this.$get = function (syncHttp) { // injectables go here
        var self = this;
        var userStatue = {};
        //获取
        function errorHandler() {
            throw new Error("获取登录状态失败")
            //获取登录状态失败，5秒跳转到登录页
            setTimeout(function () {
                window.location.href = self.loginUrl
            }, 5000);
        }

        userStatue.user = syncHttp.Get(self.statueUrl, null, errorHandler);
        //
        //$http.get(self.statueUrl).success(function (data) {
        //    userStatue.user = data
        //}).error(function () {
        //
        //})

        var service = {
            get: function () {
                return userStatue.user
            }
        };
        return service;
    }
})
