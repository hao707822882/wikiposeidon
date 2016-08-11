/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.provider("AreaService", function () {
    this.setStatueUrl = function (newUrl) {
        if (newUrl) this.statueUrl = newUrl;
    }

    this.$get = function (syncHttp) { // injectables go here
        var self = this;

        var allArea = [{"version": 0, "id": 1, "name": "艾欧尼亚", "code": "电信一", "net": "电信"}, {
            "version": 0,
            "id": 3,
            "name": "祖安",
            "code": "电信二",
            "net": "电信"
        }, {"version": 0, "id": 4, "name": "诺克萨斯", "code": "电信三", "net": "电信"}, {
            "version": 0,
            "id": 5,
            "name": "班德尔城",
            "code": "电信四",
            "net": "电信"
        }, {"version": 0, "id": 7, "name": "皮尔特沃夫", "code": "电信五", "net": "电信"}, {
            "version": 0,
            "id": 8,
            "name": "战争学院",
            "code": "电信六",
            "net": "电信"
        }, {"version": 0, "id": 10, "name": "巨神峰", "code": "电信七", "net": "电信"}, {
            "version": 0,
            "id": 11,
            "name": "雷瑟守备",
            "code": "电信八",
            "net": "电信"
        }, {"version": 0, "id": 13, "name": "裁决之地", "code": "电信九", "net": "电信"}, {
            "version": 0,
            "id": 14,
            "name": "黑色玫瑰",
            "code": "电信十",
            "net": "电信"
        }, {"version": 0, "id": 15, "name": "暗影岛", "code": "电信十一", "net": "电信"}, {
            "version": 0,
            "id": 17,
            "name": "钢铁烈阳",
            "code": "电信十二",
            "net": "电信"
        }, {"version": 0, "id": 18, "name": "水晶之痕", "code": "电信十三", "net": "电信"}, {
            "version": 0,
            "id": 19,
            "name": "均衡教派",
            "code": "电信十四",
            "net": "电信"
        }, {"version": 0, "id": 22, "name": "影流", "code": "电信十五", "net": "电信"}, {
            "version": 0,
            "id": 23,
            "name": "守望之海",
            "code": "电信十六",
            "net": "电信"
        }, {"version": 0, "id": 24, "name": "征服之海", "code": "电信十七", "net": "电信"}, {
            "version": 0,
            "id": 25,
            "name": "卡拉曼达",
            "code": "电信十八",
            "net": "电信"
        }, {"version": 0, "id": 27, "name": "皮城警备", "code": "电信十九", "net": "电信"}, {
            "version": 0,
            "id": 2,
            "name": "比尔吉沃特",
            "code": "网通一",
            "net": "网通"
        }, {"version": 0, "id": 6, "name": "德玛西亚", "code": "网通二", "net": "网通"}, {
            "version": 0,
            "id": 9,
            "name": "弗雷尔卓德",
            "code": "网通三",
            "net": "网通"
        }, {"version": 0, "id": 12, "name": "无畏先锋", "code": "网通四", "net": "网通"}, {
            "version": 0,
            "id": 16,
            "name": "恕瑞玛",
            "code": "网通五",
            "net": "网通"
        }, {"version": 0, "id": 20, "name": "扭曲丛林", "code": "网通六", "net": "网通"}, {
            "version": 0,
            "id": 26,
            "name": "巨龙之巢",
            "code": "网通七",
            "net": "网通"
        }, {"version": 0, "id": 21, "name": "教育网专区", "code": "教育网", "net": "教育"}];

        var allAreaMap = {}
        //如果数据存在
        if (angular.isArray(allArea)) {
            angular.forEach(allArea, function (data) {
                allAreaMap[data.id] = data;
            })
        }

        var service = {
            getAll: function () {
                return allArea
            },
            get: function (id) {
                return allArea[id];
            }
        };
        return service;
    }
})
