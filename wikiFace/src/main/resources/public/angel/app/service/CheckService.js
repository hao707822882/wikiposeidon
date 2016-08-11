/**
 * Created by Administrator on 2016/3/9.
 */
myAppModule.service("DataCheckService", function () {
        var rt = {};
        //错误，返回true
        rt.check$HttpError = function (date, statue) {

            //检测数据是不是Josn。不是json，说明登录超时，代表需要跳转登录页
            if (date.error == null || date.error == undefined) {
                window.location.href = "/"
                return;
            }

            if (!statue || statue != 200) {
                window.location.href = "/"
                return;
            }

            if (!date) {
                return true;
            }

            if (date.error) {
                return true;
            }
        }
        return rt;
    }
)
