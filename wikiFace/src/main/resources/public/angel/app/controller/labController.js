/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('labController', ["asyncHttp", "tableService", "DataCheckService",
    "ScopeService", "ClassService", "TeacherService", "ChampionService", "$scope", function (asyncHttp,
                                                                                             tableService, DataCheckService, ScopeService, ClassService,
                                                                                             TeacherService, ChampionService, $scope) {
        //视频controller
        //获取所有的老师
        //获取所有的班级

        $scope.addLabShow = false;
        $scope.parentId = 0;
        $scope.champions = ChampionService.getChampionBySlice(10);

        var domainUrl = {
            "add": "/admin/addLab",
            "parent": "/admin/parentLab",
            "child": "/admin/childLab",
            "del": "/admin/delLab",
        }


        //增加父标签
        $scope.addParentLab = function () {
            var parentLabName = $scope.parentLabName;
            if (!parentLabName) {
                layer.alert("数据缺失！")
                return;
            }
            var data = {"labName": parentLabName, "parentId": 0};

            layer.confirm("确认增加父标签", {
                btn: ['确定', '取消'] //按钮
            }, function () {
                addLab(data, "父", function (data) {
                    $scope.parentLabs.push(data.data);
                })
            }, function () {

            })
        }


        function addLab(data, tip, call) {
            asyncHttp.create(domainUrl.add, data, function (data, status) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert('添加' + tip + '标签失败！');
                    return;
                }
                layer.alert('添加' + tip + '标签成功！');
                if (call) {
                    call(data);
                }
            }, function (data) {
                layer.alert('添加' + tip + '标签失败！');
            })
        }


        //获取父标签集合
        $scope.getParentLab = function () {
            asyncHttp.get(domainUrl.parent, function (data, status) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert('获取父标签失败！');
                    return;
                }
                $scope.parentLabs = data.data;
            }, function (data) {
                layer.alert('获取父标签失败！');
            })
        }


        //获取子标签
        $scope.getChild = function (id) {
            asyncHttp.get(domainUrl.child + "?parentId=" + id, function (data, status) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert('获取子标签失败！');
                    return;
                }
                $scope.childLabs = data.data;
            }, function (data) {
                layer.alert('获取子标签失败！');
            })
        }

        $scope.parentId = 0;


        //展示出增加子标签的对话框
        //获取当前点击父标签的子标签
        $scope.showAddLab = function (id) {
            //设置fuID
            $scope.parentId = id;
            //显示出对话框
            $("#childLabDialog").modal()
            //获取当前标签的子标签
            $scope.getChild(id);
        }

        $scope.addChildLab = function () {
            var childLabName = $scope.childLabName;
            var parentId = $scope.parentId;
            if ((!childLabName) || (!parentId)) {
                layer.alert("数据缺失！")
                return;
            }
            var data = {"labName": childLabName, "parentId": parentId};

            layer.confirm("确认增加子标签", {
                btn: ['确定', '取消'] //按钮
            }, function () {
                addLab(data, "子", function (data) {
                    $("#childLabDialog").modal("hide")
                    $scope.childLabs.push(data.data);
                })
            }, function () {
            })

        }


        //删除标签
        $scope.delete = function (id, index, labs) {
            layer.confirm("确认删除标签", {
                btn: ['确定', '取消'] //按钮
            }, function () {
                asyncHttp.get(domainUrl.del + "?id=" + id,
                    function (data, status) {
                        if (DataCheckService.check$HttpError(data, status)) {
                            layer.alert('删除标签失败！');
                            return;
                        }
                        var lab = labs[index];
                        labs.remove(lab);
                        layer.alert("删除标签成功！");
                    }, function (data) {
                        layer.alert('删除标签失败！');
                    })
            }, function () {

            })
        }
        //初始化获取所有标签
        $scope.getParentLab();


    }]);