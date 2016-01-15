ws.directive('enemy', function () {
    return {
        restrict: 'E',
        controller: 'enemyDirectiveController',
        templateUrl: '/game.enemy.player/enemy.html',
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
        }
    };
});
