/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('TeamFireServiceActionController', ["asyncHttp", "tableService", "DataCheckService",
    "ScopeService", "ClassService", "TeacherService", "ChampionService", 'LabService', "LoginStatue", "AreaService", "$compile", "$scope",
    function (asyncHttp, tableService, DataCheckService, ScopeService, ClassService,
              TeacherService, ChampionService, LabService, LoginStatue, AreaService, $compile, $scope) {
        $scope.allClass = ClassService.getAll();
        $scope.allTeacher = TeacherService.getAll();

        $scope.allArea = AreaService.getAll();

        $scope.champions = ChampionService.getChampionBySlice(10);


        var domain = {"teacherSubmitTeamFire": "/admin/teacherSubmitTeamFire"}


        $scope.getTeacherEvaluate = function () {
            if (!($scope.dx && $scope.zy && $scope.sc && $scope.fy && $scope.tz && $scope.zhpj)) {
                layer.alert("评论数据缺失！")
                throw new Error();
            }
            var d = {dx: $scope.dx, zy: $scope.zy, sc: $scope.sc, fy: $scope.fy, tz: $scope.tz, zhpj: $scope.zhpj}
            return JSON.stringify(d);
        }

        $scope.restEvaluate = function () {
            $scope.dx = "";
            $scope.zy = "";
            $scope.sc = "";
            $scope.fy = "";
            $scope.tz = "";
            $scope.zhpj = "";
        }

        $scope.cancle = function (index, event) {
            delete  $scope.studentNum[index]
            $(event.target).parent().remove();
        }

        $scope.parnterIndex = 0;
        $scope.studentNum = [];
        $scope.inputElements = []
        //提交
        $scope.addPartner = function () {
            var id = "student" + $scope.parnterIndex;
            var htmlTemp = '<div class="form-group"> <label for="' + id + '">队员学号：</label> <input type="text" class="form-control" id="' + id + '" placeholder="队员学号" ng-model="studentNum[' + $scope.parnterIndex + ']"> <span style="cursor: pointer" ng-click="cancle(' + $scope.parnterIndex + ',$event)">X</span> </div>'
            var element = $compile(htmlTemp)($scope)
            $("#firstForm").append(element);
            $scope.inputElements.push(element);
            $scope.parnterIndex++;
        }

        //添加队员
        $scope.addApply = function () {
            var studentNums = [];
            if (angular.isArray($scope.studentNum)) {
                angular.forEach($scope.studentNum, function (data) {
                    if (data && data != "") {
                        studentNums.push(data)
                    }
                })
            }

            var teacherEvaluate = $scope.getTeacherEvaluate();
            //凭凑数据
            var date = {
                'leaderStudentNum': $scope.leaderStudentNum,
                'partner': studentNums,
                'chatContent': $scope.chatDate,
                'teacherEvaluate': teacherEvaluate
            };

            if (date.partner.length == 0) {
                layer.alert("队员为0，不能添加")
                return;
            }


            layer.confirm("确认添加团战实训记录！", {
                btn: ['确认添加', '取消'] //按钮
            }, function () {
                asyncHttp.create(domain.teacherSubmitTeamFire, date, function (data, status, func, config) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('添加失败！' + data.msg);
                        return;
                    }
                    layer.alert("复制网址：school.iboom.tv/" + data.data.id)
                    //删除数据
                    $scope.studentNum = [];
                    $scope.leaderStudentNum = "";
                    $scope.chatDate = "";
                    angular.forEach($scope.inputElements, function (data) {
                        data.remove();
                    })
                    $scope.restEvaluate();

                }, function (data) {
                    layer.alert('添加失败！请联系小明');
                    console.log(data)
                })
            }, function () {
            })

        }

    }])
;