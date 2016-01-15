ws.directive('room', function () {
    return {
        restrict: 'E',
        controller: 'roomDirectiveController',
        templateUrl: '/manage.room/room.html',
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {}
    };
});
