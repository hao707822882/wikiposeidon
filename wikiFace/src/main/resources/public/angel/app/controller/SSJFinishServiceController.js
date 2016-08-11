/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('SSJFinishServiceController', ["asyncHttp", "tableService",
    "DataCheckService", "ScopeService", "MD5Service", "syncHttp", "$scope",
    function (asyncHttp, tableService, DataCheckService, ScopeService, MD5Service, syncHttp, $scope) {


        var domain = {
            "doneList": "/admin/getFinishedShengSiJu",
            "del": "/admin/delSSJ",
            'add': '/admin/ssj/addImg'
        }

    /**
     * 获取分页数据
     * @param pageLab
     */
    $scope.getPage = function (pageLab) {
        var data = {page: pageLab, size: 15}
        getInirtableDate(domain.doneList, data)
    }

    /**
     * 获取分页数据基础方法
     * data参数：{page: 0, size: 20}
     */
    function getInirtableDate(url, data) {
        asyncHttp.create(url, data, function (data, status, func, config) {
            if (DataCheckService.check$HttpError(data, status)) {
                layer.alert('数据获取失败！请联系小明');
                return;
            }
            $scope.tabDate = tableService.tabDate(data)
            console.log($scope.tabDate)
        }, function (data) {
            layer.alert('服务器异常！请联系小明');
            console.log(data)
        })
    }


    $scope.del = function (id, event) {
        layer.confirm("取消生死局！", {
            btn: ['确认取消', '取消'] //按钮
        }, function () {
            asyncHttp.get(domain.del + "?id=" + id, function (data, status, func, config) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert('数据获取失败！请联系小明');
                    return;
                }
                $(event.target).parents("tr").remove();
                layer.alert("删除生死局成功")
            }, function (data) {
                layer.alert('服务器异常！请联系小明');
                console.log(data)
            })
        }, function () {
        })
    }


        $scope.uploadFile = function (data) {
            var fileScope = data;
            MD5Service.getFileMd5(fileScope.header, function (md5) {
                //处理文件的上传逻辑
                var sizes = [40, 400]
                var data = {'file': fileScope.header, 'md5': md5, 'sizes': sizes};
                syncHttp.upload("/admin/upload", data, function (data) {
                    layer.alert("图像上传成功！")
                    //提交其他数据
                    if (!data.error) {
                        var addImgDate = {'applyId': fileScope.da.id, 'imgFile': data.data};
                        asyncHttp.create(domain.add, addImgDate, function (data) {
                            if (!data.error) {
                                //正常处理
                                fileScope.photos || (fileScope.photos = []);
                                fileScope.photos.push(data.data.photo);
                            }
                        }, function (data) {
                            layer.alert("图片信息添加失败！")
                        })
                    }
                }, function (data) {
                    console.log(data)
                })

            })
        }

    //默认
    getInirtableDate(domain.doneList, {page: 0, size: 15})
}]);
