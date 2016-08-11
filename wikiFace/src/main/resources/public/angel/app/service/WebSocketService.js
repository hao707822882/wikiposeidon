/**
 * Created by Administrator on 2016/3/13.
 */
myAppModule.provider("webSocketService", function () {
    this.stompClient = null;

    this.setStompClient = function (endPoint) {
        var socket = new SockJS("/" + endPoint);
        this.stompClient = Stomp.over(socket);
    }


    this.$get = function () {
        var self = this;
        var service = {
            createWebSocket: function (url, handler, scope) {
                self.stompClient.connect({}, function (frame) {
                    console.log(frame)
                    self.stompClient.subscribe(url, function (greeting) {
                        scope.$apply(function () {
                            handler(JSON.parse(greeting.body), scope)
                        });
                    });
                });
            }
        };
        return service;
    }
})
