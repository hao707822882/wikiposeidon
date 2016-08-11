/**
 * Created by Administrator on 2016/3/11.
 */
myAppModule.service("ScopeService", function ($http) {
    var rt = {
        scopeByEvent: function (event) {
            if (!event) {
                throw new Error("event can not be null")
            }
            return angular.element(event.target).scope();
        },
        scopeById: function (id) {
            if (!id) {
                throw new Error("event can not be null")
            }
            return angular.element("#" + id).scope();
        }

    };
    return rt;
})