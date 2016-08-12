/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/wikiItem', {
            templateUrl: '/angel/app/temp/wikiItem.html',
            controller: 'wikiItemController'
        })
        .otherwise({
            redirectTo: '/wikiItem'
        });
}])

