/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('videoController', ["asyncHttp", "tableService", "DataCheckService",
    "ScopeService", "ClassService", "TeacherService", "ChampionService", "$scope", function (asyncHttp,
                                                                                             tableService, DataCheckService, ScopeService, ClassService,
                                                                                             TeacherService, ChampionService, $scope) {
        //视频controller
        //获取所有的老师
        //获取所有的班级

        $scope.showChampion = false;

        $scope.allClass = ClassService.getAll();
        $scope.allTeacher = TeacherService.getAll();

        $scope.champions = ChampionService.getChampionBySlice(10);
        //是否显示英雄
        $scope.changeShowChampion = function (type) {
            if (type == "英雄课") {
                $scope.showChampion = true;
            } else {
                $scope.showChampion = false;
            }
        }

        //选择英雄
        $scope.selectChampion = function (id, name) {
            $scope.championId = id;
            $scope.championName = name;
        }

        $scope.canSubmit = true;

        $scope.addVideo = function () {
            if (!$scope.canSubmit) {
                layer.alert("当前不允许提交")
                return;
            }
            //提交视频
            var video = {};
            //拼凑对象
            video['videoName'] = $scope.videoName;
            video['remark'] = $scope.remark;
            video['videoUrl'] = $scope.videoUrl;
            video['classId'] = $scope.classId;
            video['teacherId'] = $scope.teacherId;
            video['videoType'] = $scope.videoType;
            video['videoWayType'] = $scope.videoWayType;

            if (!video['videoName']) {
                layer.alert("数据缺失，无法提交！")
                return;
            }

            if (video['videoType'] == "英雄课") {
                video['championId'] = $scope.championId;
            }

            if ($scope.canSubmit) {
                $scope.canSubmit = false;
                asyncHttp.create("/admin/addVideo", video, function (data, status) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('添加视频失败！');
                        return;
                        $scope.canSubmit = true;
                    }
                    layer.alert('添加视频成功！');
                    $scope.canSubmit = true;
                    rest();
                }, function (data) {
                    layer.alert('添加视频失败！');
                    $scope.canSubmit = true;
                    rest();
                })
            }
        }

        function rest() {
            $scope.videoName = null;
            $scope.remark = null;
            $scope.videoUrl = null;
            $scope.classId = null;
            $scope.teacherId = null;
            $scope.videoType = null;
            $scope.videoWayType = null;
            $scope.championId = null;
        }

    }]);