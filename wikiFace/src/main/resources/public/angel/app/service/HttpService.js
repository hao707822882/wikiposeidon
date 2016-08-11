/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.service("syncHttp", function () {
    var rt = {};
    if (!$)
        throw new Error("Jquery is not define")
    rt.Get = function (url, data, error) {
        var rt_data = null;
        $.ajax({
                async: false,
                type: "POST",
                url: url,
                data: data,
                beforeSend: function (request) {
                    request.setRequestHeader("Accept", "application/json");
                },
                success: function (msg) {
                    rt_data = msg;
                },
                error: error
            }
        );
        return rt_data;
    }
    rt.upload = function (url, data, success, error) {
        var fd = new FormData();
        for (var p in data) {
            fd.append(p, data[p]);
        }
        $.ajax({
            url: url,
            type: "POST",
            processData: false,
            contentType: false,
            data: fd,
            beforeSend: function (request) {
                request.setRequestHeader("Accept", "application/json");
            },
            success: success,
            error: error
        });
    }
    return rt;
})
myAppModule.service("asyncHttp", function ($http) {
    var rt = {
        get: function (url, success, error) {
            $http.get(url, {"headers": {"Accept": "application/json"}}).success(success).error(error)
        },
        create: function (url, data, success, error) {
            var timeout = 5000;
            if (data != null) {
                var t = data.timeout;
                if (t) {
                    timeout = t;
                }
            }
            $http.post(url, data, {'timeout': timeout, 'Accept': 'application/json'}).success(success).error(error)
        },
        update: function (url, data, success, error) {
            $http.put(url, data).success(success).error(error)
        },
        delete: function (url, success, error) {
            $http.delete(url).success(success).error(error)
        },
    };
    return rt;
})

