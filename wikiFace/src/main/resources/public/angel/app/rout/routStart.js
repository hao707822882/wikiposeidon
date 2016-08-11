/**
 * Created by Administrator on 2016/3/8.
 */
myAppModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/index', {
            templateUrl: '/angel/app/temp/index.html',
            controller: 'indexController'
        }).when('/oneToOneService', {
            templateUrl: '/angel/app/temp/oneToOneService.html',
            controller: 'oneToOneServiceController'
        }).when('/oneToOneDoneService', {
            templateUrl: '/angel/app/temp/OneToOneDoneService.html',
            controller: 'OneToOneDoneServiceController'
        }).when('/oneToOneFinishService', {
            templateUrl: '/angel/app/temp/OneToOneFinishService.html',
            controller: 'OneToOneFinishServiceController'
        }).when('/oneToOneServiceHistroy', {
            templateUrl: '/angel/app/temp/oneToOneServiceSearch.html',
            controller: 'OneToOneServiceSearchController'
        }).when('/oneToOneSwitch', {
            templateUrl: '/angel/app/temp/oneToOneSwitch.html',
            controller: 'oneToOneSwitchController'
        }).when('/growthImport', {
            templateUrl: '/angel/app/temp/growthImportPlan.html',
            controller: 'growthImportController'
        }).when('/growthService', {
            templateUrl: '/angel/app/temp/growthService.html',
            controller: 'growthServiceController'
        }).when('/video', {
            templateUrl: '/angel/app/temp/video.html',
            controller: 'videoController'
        }).when('/lab', {
            templateUrl: '/angel/app/temp/lab.html',
            controller: 'labController'
        }).when('/consult', {
            templateUrl: '/angel/app/temp/consult.html',
            controller: 'consultController'
        }).when('/changeTeacher', {
            templateUrl: '/angel/app/temp/changeGrowthService.html',
            controller: 'changeGrowthTeacherController'
        }).when('/oneToOneServiceAction', {
            templateUrl: '/angel/app/temp/oneToOneServiceAction.html',
            controller: 'oneToOneServiceActionController'
        }).when('/ssjServiceAction', {
            templateUrl: '/angel/app/temp/SSJServiceAction.html',
            controller: 'ssjServiceActionController'
        }).when('/ssjChangeTeacher', {
            templateUrl: '/angel/app/temp/ssjChangeTeacher.html',
            controller: 'changeSSJTeacherController'
        }).when('/ssj', {
            templateUrl: '/angel/app/temp/SSJService.html',
            controller: 'SSJServiceController'
        }).when('/ssjDone', {
            templateUrl: '/angel/app/temp/SSJDoneService.html',
            controller: 'SSJDoneServiceController'
        }).when('/ssjFinish', {
            templateUrl: '/angel/app/temp/SSJFinishService.html',
            controller: 'SSJFinishServiceController'
        }).when('/ssjSearchService', {
            templateUrl: '/angel/app/temp/SSJServiceSearch.html',
            controller: 'SSJServiceSearchController'
        }).when('/teamFire', {
            templateUrl: '/angel/app/temp/TeamFireService.html',
            controller: 'TeamFireServiceController'
        }).when('/teamFireDone', {
            templateUrl: '/angel/app/temp/TeamFireDoneService.html',
            controller: 'TeamFireDoneServiceController'
        }).when('/teamFireFinish', {
            templateUrl: '/angel/app/temp/TeamFireFinishService.html',
            controller: 'TeamFireFinishServiceController'
        }).when('/teamFireAction', {
            templateUrl: '/angel/app/temp/TeamFireServiceAction.html',
            controller: 'TeamFireServiceActionController'
        }).when('/editer', {
            templateUrl: '/angel/app/temp/editer.html',
            controller: 'TeamFireServiceActionController'
        }).when('/teacherHome', {
            templateUrl: '/angel/app/temp/teacherHomePage.html',
            controller: 'TeacherHomePageController'
        }).when('/userAction', {
            templateUrl: '/angel/app/temp/UserService.html',
            controller: 'UserServiceController'
        }).
        otherwise({
            redirectTo: '/oneToOneService'
        });
}])

