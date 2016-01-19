ws.directive('gameCard', function () {
    return {
        restrict: 'E',
        controller: 'cardDirectiveController',
        templateUrl: '/game/card/card.html',
        scope: {
            card: '='
        }
    };
});
