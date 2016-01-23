/* @ngInject */
angular.module('ws').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("main", {
            name: "main",
            url: "/",
            templateUrl: "/main/main.html"
        })
        .state("game", {
            name: "game",
            url: "/game",
            templateUrl: "/game/page/game.html"
        })
        .state("card", {
            name: "card",
            url: "/card",
            templateUrl: "/card/page/card.html"
        })
        .state("card.list", {
            name: "list",
            url: "/list",
            templateUrl: "/card/page/list.html"
        })
        .state("card.make", {
            name: "make",
            url: "/make",
            templateUrl: "/card/page/make.html"
        })
        .state("card.deck", {
            name: "deck",
            url: "/deck",
            templateUrl: "/card/page/deck.html"
        });
    $urlRouterProvider.otherwise("/");
});