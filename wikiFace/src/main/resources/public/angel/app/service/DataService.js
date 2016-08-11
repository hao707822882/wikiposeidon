/**
 * Created by Administrator on 2016/3/10.
 */
myAppModule.service("DateService", function () {
        var rt = {};
        //错误，返回true
        rt.toDateStr = function (sjc) {
            if (!sjc) {
                return "时间未确定";
            }
            return new Date(parseInt(sjc)).toLocaleString().replace(/:\d{1,2}$/, ' ');
        }
        return rt;
    }
)