/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('consultController', ["asyncHttp", "tableService", "DataCheckService",
    "ScopeService", "ClassService", "TeacherService", "ChampionService", 'LabService', "LoginStatue", "$scope",
    function (asyncHttp, tableService, DataCheckService, ScopeService, ClassService,
              TeacherService, ChampionService, LabService, LoginStatue, $scope) {
        $scope.allClass = ClassService.getAll();
        $scope.allTeacher = TeacherService.getAll();
        $scope.allLab = LabService.getAll();

        $scope.orightml = ""
        $scope.htmlcontent = $scope.orightml;
        $scope.disabled = false;


        var user = LoginStatue.get();
        if (user.id > 100) {//招生组
            $scope.group = "招生组"
            $scope.chatType = "遗留咨询"
            $scope.result = 0;
        } else {//教学组
            $scope.group = "教学组"
            $scope.chatType = "当前咨询"
            $scope.contentType = "服务相关"
            $scope.result = 0;
        }


        var domain = {"addQuestion": "/admin/addQuestion"}

        $scope.addChatContent = function () {
            var group = $scope.group;
            var result = $scope.result;
            var contentType = $scope.contentType;
            var question = $scope.question;
            var classId = $scope.classId
            var studentNum = $scope.studentNum;
            var answer = $scope.htmlcontent
            var chatType = $scope.chatType;
            var targetGroup = $scope.targetGroup;
            var chatContentType = $scope.chatContentType;

            if (group == undefined) {
                layer.alert("组类别缺失");
                return;
            }

            if (group == "招生组") {
                if (result == undefined) {
                    layer.alert("结果缺失")
                    return;
                }
                if (chatType == undefined) {
                    layer.alert("聊天类型缺失")
                    return;
                }
                if (answer == undefined) {
                    layer.alert("聊天内容缺失")
                    return;
                }
            }


            if (group == "教学组") {
                if (chatContentType == undefined) {
                    layer.alert("聊天内容类型缺失")
                    return;
                }
                if (chatType == undefined) {
                    layer.alert("聊天类型缺失")
                    return;
                }
                if (studentNum == undefined) {
                    layer.alert("学号缺失")
                    return;
                }
                if (classId == undefined) {
                    layer.alert("班级缺失")
                    return;
                }
                if (contentType == undefined) {
                    layer.alert("类型缺失")
                    return;
                }
                if (answer == undefined || "" == answer || null == answer) {
                    layer.alert("聊天内容缺失")
                    return;
                }
            }

            var data = {
                "studentNum": studentNum,
                "classId": classId,
                "question": question,
                "answer": answer,
                "group": group,
                "contentType": contentType,//教学组有游戏问题，或者其他问题
                "result": result,
                "chatType": chatType,//遗留咨询，或者是发公告的咨询
                "targetGroup": targetGroup,//来源群
                "chatContentType": chatContentType
            }

            asyncHttp.create(domain.addQuestion, data, function (data, status) {
                if (DataCheckService.check$HttpError(data, status)) {
                    layer.alert("上传咨询记录失败！请转化为普通文本")
                    return;
                }

                if (data.error) {
                    layer.alert("上传咨询记录失败！")
                    return;
                }
                if (data.data) {
                    layer.alert("复制链接：" + "http://localhost:8999/school/notNeedLogin/getConsultEvaluateDetail/" + data.data)
                } else {
                    layer.alert("上传咨询记录成功！")
                }
                $scope.htmlcontent = "";
            }, function (data) {
                layer.alert('获取成长计划失败！');
            })

        }

        //获取所有的标签
        //英雄的独立开来，不算标签


    }]);