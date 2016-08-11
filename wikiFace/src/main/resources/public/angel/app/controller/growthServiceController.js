/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.controller('growthServiceController',
    ["asyncHttp", "tableService", "DataCheckService", "ScopeService", "ChampionService", "$scope",
        function (asyncHttp, tableService, DataCheckService, ScopeService, ChampionService, $scope) {

            $scope.list = true;
            $scope.champion = false;
            $scope.score = false;

            $scope.champions = ChampionService.getChampionBySlice(10);

            //展示英雄修改
            $scope.showChampion = function () {
                $scope.list = false;
                $scope.champion = true;
                $scope.score = false;
            }

            $scope.showScore = function () {
                $scope.list = false;
                $scope.champion = false;
                $scope.score = true;
            }


            $scope.showList = function () {
                $scope.list = true;
                $scope.champion = false;
                $scope.score = false;
            }


            var domainUrl = {
                growthPlanList: "/admin/growthPlan/myGrowthPlanList",
                open: "/admin/growthPlan/openService",
                detail: "/admin/growthPlan/getGrowthDetail",
                addChampion: "/admin/growthPlan/addChampion",
                delChampion: "/admin/growthPlan/delChampion",
                passZoukan: "/admin/growthPlan/passZoukan",
                passBudao: "/admin/growthPlan/passBudao",
                passKongxian: "/admin/growthPlan/passKongxian",
                getEvaluate: "/admin/growthPlan/getEvaluate",
                searchGrowthPlan: "/admin/growthPlan/searchGrowthPlan",
            }

            $scope.myPlanList = function () {
                asyncHttp.create(domainUrl.growthPlanList, null, function (data, status) {

                    if (data == "") {
                        layer.alert("当前无学员计划!")
                        return;
                    }

                    if (data.error) {
                        layer.alert("获取成长计划失败！")
                        return;
                    }

                    $scope.thisPage = tableService.tabDate(data)
                    console.log($scope.thisPage)
                }, function (data) {
                    layer.alert('获取成长计划失败！');
                })
            }


            $scope.getPage = function (page) {
                asyncHttp.get(domainUrl.growthPlanList + "?page=" + (page - 1), function (data, status) {
                    if (data == "") {
                        layer.alert("当前无学员计划!")
                        return;
                    }
                    if (data.error) {
                        layer.alert("获取成长计划失败！")
                        return;
                    }
                    $scope.thisPage = tableService.tabDate(data)
                    console.log($scope.thisPage)
                }, function (data) {
                    layer.alert('获取成长计划失败！');
                })
            }

            $scope.getGrowthPlan = function () {
                $scope.thisPage_back = $scope.thisPage;
                asyncHttp.get(domainUrl.searchGrowthPlan + "?studentNum=" + $scope.searchStudentNum, function (data, status) {
                    if (data == "") {
                        layer.alert("当前无学员计划!")
                        return;
                    }
                    if (data.error) {
                        layer.alert("获取成长计划失败！")
                        return;
                    }
                    $scope.thisPage = tableService.tabDate(data)
                    console.log($scope.thisPage)
                }, function (data) {
                    layer.alert('检索获取成长计划失败！');
                })
            }


            $scope.copy = function () {
                layer.alert("请复制召唤师名称在TGP中查找")
            }

            $scope.backList = function () {
                $scope.thisPage = $scope.thisPage_back
            }

            $scope.openService = function (id, studentNum, event) {
                if (id == "undefind") {
                    layer.alert("服务id为空，请刷新重试")
                    return;
                }

                //获取学员的成长计划详情
                asyncHttp.get(domainUrl.detail + "?studentNum=" + studentNum, function (data, status) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('获取成长计划详情失败！' + data.msg);
                        return;
                    }
                    var growthDetail = data.data;
                    var champions = growthDetail.championStages;
                    if (champions) {
                        //已经确定存在，在看看有几个英雄
                        if (champions.length >= 1) {
                            //英雄存在
                            asyncHttp.get(domainUrl.open + "?planId=" + id, function (data, status) {
                                if (DataCheckService.check$HttpError(data, status)) {
                                    layer.alert('开启成长计划失败！' + data.msg);
                                    return;
                                }
                                //改变状态
                                layer.alert("开启成长计划成功！")
                                var scope = ScopeService.scopeByEvent(event);
                                scope.cl.open = 1;
                            }, function (data) {
                                layer.alert('开启成长计划失败！');
                            })
                        } else {
                            layer.alert("当前学员无英雄，请先添加！")
                        }
                    }
                }, function (data) {
                    layer.alert('开启成长计划失败！');
                })
            }

            //显示当前学院成长页
            $scope.changChampion = function (plan) {
                //获取该学员已经需要学习的英雄
                $scope.nowPlan = plan;
                asyncHttp.get(domainUrl.detail + "?studentNum=" + plan.studentNum, function (data, status) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('获取成长计划详情失败！' + data.msg);
                        return;
                    }
                    //改变状态
                    $scope.growthDetail = data.data;
                    $scope.showChampion();
                }, function (data) {
                    layer.alert('获取成长计划详情失败！');
                })
            }

            $scope.addChampion = function (championId, championName) {

                //判断当前学员已经需要学的英雄是否超过两个
                var length = $scope.growthDetail.championStages.length;
                if (length >= 2) {
                    layer.alert("最多可以为学员指派两名英雄");
                    return;
                }

                asyncHttp.get(domainUrl.addChampion + "?studentNum=" + $scope.nowPlan.studentNum + "&championId=" + championId + "&classId=" + $scope.nowPlan.classId, function (data, status) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('添加英雄失败！' + data.msg);
                        return;
                    }
                    layer.alert("添加英雄成功！")
                    var data = {"studentNum": $scope.nowStudentNum, "championId": championId}
                    $scope.growthDetail.championStages.push(data);
                }, function (data) {
                    layer.alert('添加英雄失败！');
                })
            }

            $scope.delChampion = function (championId, index) {
                asyncHttp.get(domainUrl.delChampion + "?studentNum=" + $scope.nowPlan.studentNum + "&championId=" + championId, function (data, status) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('删除英雄失败！' + data.msg);
                        return;
                    }
                    $scope.growthDetail.championStages.remove($scope.growthDetail.championStages[index]);
                    console.log($scope.growthDetail.championStages)
                }, function (data) {
                    layer.alert('删除英雄失败！');
                })
            }


            $scope.submitScore = function (plan) {
                //获取该学员已经需要学习的英雄
                $scope.nowPlan = plan;
                asyncHttp.get(domainUrl.detail + "?studentNum=" + plan.studentNum, function (data, status) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('获取成长计划详情失败！' + data.msg);
                        return;
                    }
                    //改变状态
                    $scope.growthDetail = data.data;
                    $scope.showScore();
                }, function (data) {
                    layer.alert('获取成长计划详情失败！');
                })
            }

            $scope.passZoukan = function (data) {
                var d = data;
                asyncHttp.create(domainUrl.passZoukan, data, function (data, status) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('提交走砍成绩失败！' + data.msg);
                        return;
                    }
                    //处理，显示为该项同过
                    layer.alert("提交走砍成绩OK!")
                    d.status = 1;
                }, function (data) {
                    layer.alert('提交走砍成绩失败！');
                })
            }

            $scope.passKongxian = function (data) {
                var d = data;
                asyncHttp.create(domainUrl.passKongxian, data, function (data, status) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('提交控线成绩失败！' + data.msg);
                        return;
                    }
                    //处理，显示为该项同过
                    layer.alert("提交控线成绩OK!")
                    d.status = 1;
                }, function (data) {
                    layer.alert('提交控线成绩失败！');
                })
            }
            $scope.passBudao = function (data, event) {
                var d = data;
                asyncHttp.create(domainUrl.passBudao, data, function (data, status) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('提交补刀成绩失败！' + data.msg);
                        return;
                    }
                    //处理，显示为该项同过
                    layer.alert("提交补刀成绩OK!")
                    d.status = 1;
                }, function (data) {
                    layer.alert('提交补刀成绩失败！');
                })
            }

            //查看计划对应的评论
            $scope.showEvaluate = function (plan) {
                var studentNum = plan.studentNum
                asyncHttp.get(domainUrl.getEvaluate + "?studentNum=" + studentNum, function (data, status) {
                    if (DataCheckService.check$HttpError(data, status)) {
                        layer.alert('获取评价失败，请刷新重试！' + data.msg);
                        return;
                    }
                    //改变状态
                    var d = data.data;
                    if (d == null) {
                        layer.alert("暂无评价")
                        return;
                    }
                    var str = '计划得分：' + d.planScore + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计划评价：' + d.toPlanEvaluate + "<br/>" +
                        '服务得分：' + d.teacherServiceScore + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务的评价：" + d.toTeacherEvaluate;
                    layer.alert(str)
                }, function (data) {
                    layer.alert('获取评价失败，请刷新重试！');
                })
            }


            $scope.back = function () {
                $scope.showList();
            }

            $scope.myPlanList();

        }]);
