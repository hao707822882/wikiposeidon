/**
 * Created by Administrator on 2016/3/9.
 */
myAppModule.filter("rankText", function (RankService) {
        return function (input) {
            return RankService.rankTextStr(input)
        };
    }
)
myAppModule.filter("planStatus", function () {
        return function (input) {
            if (input == 0) {
                return ""
            } else if (input == 1) {
                return "学员不认可"
            } else if (input == 2) {
                return "进行中"
            } else {
                return "未确定"
            }
        };
    }
)

myAppModule.filter("dateText", function (DateService) {
        return function (input) {
            return DateService.toDateStr(input)
        };
    }
)


myAppModule.filter("teachMode", function (DateService) {
        return function (input) {
            if (input == null) {
                return "学习模式未确定"
            }
            return input == 0 ? "英雄教学" : "技巧教学"
        };
    }
)


myAppModule.filter("teacher", function (TeacherService) {
        return function (input) {
            var teacher = TeacherService.get(input);
            return teacher != null ? teacher.name : "老师未确定";
        };
    }
)


myAppModule.filter("championName", function (ChampionService) {
        return function (input) {
            if (input == null) {
                return "英雄未知"
            }
            return ChampionService.findChampionName(input);
        };
    }
)
myAppModule.filter("championImg", function (ChampionService) {
        return function (input) {
            if (input == null) {
                return "英雄未知"
            }
            return ChampionService.findChampionImg(input);
        };
    }
)


myAppModule.filter("studentNumToStudent", function (StudentService) {
        return function (input) {
            if (input == null) {
                return "学号为空"
            }
            return StudentService.get(input);
        };
    }
)

myAppModule.filter("studentNumToQQ", function (StudentService) {
        return function (input) {
            if (input == null) {
                return "学号为空"
            }
            var student = StudentService.get(input);
            if (student) {
                return student.qq
            } else {
                return "学员未找到";
            }
        };
    }
)

myAppModule.filter("status", function (ChampionService) {
        return function (input) {
            if (input == 0) {
                return "未通过"
            } else if (input == 1) {
                return "通过"
            } else {
                return "数值错误"
            }
        };
    }
)
myAppModule.filter("level", function (ChampionService) {
        return function (input) {
            if (input == 1) {
                return "初级"
            } else if (input == 2) {
                return "中级"
            } else {
                return "高级"
            }
        };
    }
)

myAppModule.filter("role", function (RoleService) {
        return function (input) {
            return RoleService.get(input) == null ? "未知角色" : RoleService.get(input).role;
        };
    }
)


