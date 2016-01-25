/* @ngInject */
ws.directive('fighter', function () {
    return {
        restrict: 'E',
        controller: 'fighterDirectiveController',
        templateUrl: '/game/fighter/fighter.html',
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            fighter: '='
        }
    };
});
