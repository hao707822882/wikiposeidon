/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('oneToOneServiceActionController', ["asyncHttp", "tableService", "DataCheckService",
    "ScopeService", "ClassService", "TeacherService", "ChampionService", 'LabService', "LoginStatue", "AreaService", "$scope",
    function (asyncHttp, tableService, DataCheckService, ScopeService, ClassService,
              TeacherService, ChampionService, LabService, LoginStatue, AreaService, $scope) {
        $scope.allClass = ClassService.getAll();
        $scope.allTeacher = TeacherService.getAll();

        $scope.allArea = AreaService.getAll();

        $scope.champions = ChampionService.getChampionBySlice(10);

        $scope.showWhich = function (data) {
            if (data == 0) {
                $("#championDialog").modal()
            }
        }

        $scope.skillTeach = []
        $scope.skillTeachStr = ["对线学习", "补刀学习", "打野学习"]
        $scope.teachMode = []
        $scope.teachModeStr = ["SOLO教学", "实战教学", "录像教学"]
        $scope.areaName = "艾欧尼亚"
        $scope.continued = 0
        var domain = {"teacherSubmitApply": "/admin/teacherSubmitApply"}

        $scope.startTime = new Date()

        $scope.addChatContent = function () {
            console.log($scope)
        }

        $scope.doSelectChampion = function (id, name) {
            $scope.championName = name;
            $scope.championId = id;
            $("#championDialog").modal("hide")
        }

        $scope.getTeacherEvaluate = function () {
            if (!($scope.dx && $scope.zy && $scope.sc && $scope.fy && $scope.tz && $scope.zhpj)) {
                layer.alert("评论数据缺失！")
                throw new Error();
            }
            var d = {dx: $scope.dx, zy: $scope.zy, sc: $scope.sc, fy: $scope.fy, tz: $scope.tz, zhpj: $scope.zhpj}
            return JSON.stringify(d);
        }

        $scope.getTeachModeStr = function () {
            var str = "";
            for (var a = 0; a < $scope.teachMode.length; a++) {
                if ($scope.teachMode[a]) {
                    str = str + ($scope.teachModeStr[a] == null ? "" : $scope.teachModeStr[a] + ",");
                }
            }
            return str;
        }

        $scope.getSkillTeachStr = function () {
            if ($scope.teachModeType != 1) {
                return null;
            }
            var str = "";
            for (var a = 0; a < $scope.skillTeach.length; a++) {
                if ($scope.skillTeach[a]) {
                    str = str + ($scope.skillTeachStr[a] == null ? "" : $scope.skillTeachStr[a] + ",");
                }
            }
            return str;

        }

        //提交
        $scope.addApply = function () {

            var classId = $scope.classId;
            var studentNum = $scope.studentNum;
            var areaName = $scope.areaName;
            var teachModeType = $scope.teachModeType;
            var championName = $scope.championName;
            var championId = $scope.championId;
            var skillTeach = $scope.getSkillTeachStr();
            var continued = $scope.continued;
            var teachMode = $scope.getTeachModeStr();
            var desrieWay = $scope.desrieWay
            var chatDate = $scope.chatDate;


            //获取评价
            var teacherEvaluate = $scope.getTeacherEvaluate();
            if (classId == undefined) {
                layer.alert("班级ID未定义！")
                return;
            }
            if (studentNum == undefined) {
                layer.alert("学号未定义！")
                return;
            }

            if (areaName == undefined) {
                layer.alert("大区未定义！")
                return;
            }

            if (teachModeType == undefined) {
                layer.alert("教学类型为定义！")
                return;
            }

            if (teachModeType == 0) {
                //英雄教学
                if (championId == undefined) {
                    layer.alert("英雄ID未定义！")
                    return;
                }
                //英雄教学
                if (desrieWay == undefined) {
                    layer.alert("位置信息未定义！")
                    return;
                }
            } else {
                if (skillTeach == undefined) {
                    layer.alert("技巧教学内容为空！")
                    return;
                }
            }

            if (continued == undefined) {
                layer.alert("教学持续时间未定义！")
                return;
            }
            if (teachMode == undefined) {
                layer.alert("教学类型未定义！")
                return;
            }


            var data = {
                "studentNum": studentNum,
                "teacherEvaluate": teacherEvaluate,
                "areaName": areaName,
                "teachModeType": teachModeType,
                "skillTeach": skillTeach,
                "desrieWay": desrieWay,
                "championId": championId,
                "championName": championName,
                "continued": continued,
                "teachMode": teachMode,
                "chatDate": chatDate,
                "serviceType": 0
            }

            if ($scope.teachModeType == 0) {
                data.skillTeach = null;
            }
            if ($scope.teachModeType == 1) {
                data.championId = null;
                data.championName = null;
            }

            console.log(data);
            asyncHttp.create(domain.teacherSubmitApply, data, function (data, status) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert("提交一对一记录失败！原因：" + data.msg)
                    return;
                }

                if (data.error) {
                    layer.alert("提交一对一记录失败！")
                    return;
                }
                if (data.data) {
                    layer.alert("复制链接：" + "http://localhost:8999/school/notNeedLogin//getOneToOneServiceEvaluate/" + data.data.id + "/" + data.data.consultId)
                } else {
                    layer.alert("提交一对一记录失败成功！")
                }
                $scope.htmlcontent = "";
            }, function (data) {
                layer.alert('提交一对一记录失败！');
            })
        }


    }])
;