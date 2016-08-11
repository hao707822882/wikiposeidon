/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('TeacherHomePageController', ["asyncHttp", "tableService", "DataCheckService", "ScopeService", "MD5Service",
    "syncHttp", "ChampionService", "$scope",
    function (asyncHttp, tableService, DataCheckService, ScopeService, MD5Service, syncHttp, ChampionService, $scope) {


        var domain = {"myInfo": "/admin/getTeacherInfo", "update": "/admin/updateTeacherInfo"};
        $scope.champions = ChampionService.getChampionBySlice(10);

        $scope.canEdit = false;
        $scope.staticRoot = "http://static.iboom.tv/static/img/";
        $scope.getMyInfo = function () {
            asyncHttp.get(domain.myInfo, function (data, status, func, config) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert('数据获取失败！请联系小明');
                    return;
                }
                var teacherInfo = data.data;
                if (!teacherInfo) {
                    teacherInfo = {"goodAtChampion": []};
                }
                $scope.da = teacherInfo
                console.log($scope.tabDate)
            }, function (data) {
                layer.alert('服务器异常！请联系小明');
                console.log(data)
            })
        }


        //添加新的擅长英雄
        $scope.doAddChampion = function (id) {
            $scope.da.goodAtChampion.push({"championId": id})
            var name = ChampionService.findChampionName(id);
            layer.alert("擅长英雄添加：" + name);
        }

        $scope.delChampion = function (index) {
            console.log($scope.da.goodAtChampion)
            delete $scope.da.goodAtChampion[index]
            var newDaChampions = [];
            for (d in  $scope.da.goodAtChampion) {
                $scope.da.goodAtChampion[d].championId == undefined ? "" : (newDaChampions.push({"championId": $scope.da.goodAtChampion[d].championId}))
            }
            console.log(newDaChampions)
            $scope.da.goodAtChampion = newDaChampions;
        }

        //显示英雄选择对话框
        $scope.showChampionDialog = function () {
            $("#championDialog").modal("show")
        }

        $scope.save = function () {
            if ($scope.header) {
                MD5Service.getFileMd5($scope.header, function (md5) {
                    //处理文件的上传逻辑
                    var data = {'file': $scope.header, 'md5': md5};
                    syncHttp.upload("/admin/upload", data, function (data) {
                        layer.alert("图像上传成功！")
                        //提交其他数据
                        $scope.da.header = data.data;
                        asyncHttp.create(domain.update, $scope.da, function (data) {
                            $scope.da = data.data;
                            console.log(data)
                            if (data.error) {
                                layer.alert("信息更新失败！")
                            } else {
                                layer.alert("信息更新成功！")
                            }
                        }, function (data) {
                            layer.alert("信息更新失败！")
                        })

                    }, function (data) {
                        console.log(data)
                    })

                })
            } else {
                asyncHttp.create(domain.update, $scope.da, function (data) {
                    $scope.da = data.data;
                    console.log(data)
                    if (data.error) {
                        layer.alert("信息更新失败！")
                    } else {
                        layer.alert("信息更新成功！")
                    }
                }, function (data) {
                    layer.alert("信息更新失败！")
                })
            }

        }

        $scope.edit = function () {
            $scope.canEdit = !$scope.canEdit;
        }

        //默认
        $scope.getMyInfo();
    }]);
