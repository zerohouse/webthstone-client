ws.directive('player', function () {
    return {
        restrict: 'E',
        controller: 'playerDirectiveController',
        templateUrl: '/game/player/player.html',
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
        }
    };
});
