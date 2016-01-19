ws.directive('hand', function () {
    return {
        restrict: 'E',
        controller: 'handDirectiveController',
        templateUrl: '/game/hand/hand.html',
        controllerAs: 'hand',
        bindToController: true,
        scope: {
            cards: '='
        }
    };
});
