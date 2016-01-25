
ws.directive('logger', function () {
    return {
        restrict: 'E',
        controller: 'loggerDirectiveController',
        templateUrl: '/game/logger/logger.html',
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
        }
    };
});
