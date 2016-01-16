ws.directive('hero', function () {
    return {
        restrict: 'E',
        controller: 'heroDirectiveController',
        templateUrl: '/game.hero/hero.html',
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            hero: '=',
            deckSize:'=',
            handSize:'='
        }
    };
});
