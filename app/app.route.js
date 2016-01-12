/* @ngInject */
angular.module('ws').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("game", {
        name:"game",
        url:"/",
        templateUrl:"/game.page/game.html"
    });
    $urlRouterProvider.otherwise("/");
});