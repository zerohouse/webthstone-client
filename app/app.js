var ws = angular.module('ws', [
    'ngAnimate',
    'ngCookies',
    'ngMaterial',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngFileUpload',
    'toastr',
    'anim-in-out'
    /* @ngInject */
]);

ws.config(function ($locationProvider, toastrConfig, $httpProvider, $mdThemingProvider) { //RestangularProvider,
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    //RestangularProvider.setBaseUrl('/api/v1/');
    angular.extend(toastrConfig, {
        timeOut: 3000,
        closeButton: true
    });
    $mdThemingProvider.theme('default');
    //.primaryPalette('pink')
    //.accentPalette('orange');
});

