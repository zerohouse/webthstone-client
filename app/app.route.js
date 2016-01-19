/* @ngInject */
angular.module('ws').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("game", {
            name: "game",
            url: "/",
            templateUrl: "/game/page/game.html"
        })
        .state("deck", {
            name: "deck",
            url: "/deck",
            templateUrl: "/deck/page/deck.html"
        });
    $urlRouterProvider.otherwise("/");
});