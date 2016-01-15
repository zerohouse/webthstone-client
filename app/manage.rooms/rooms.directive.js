ws.directive('rooms', function () {
    return {
        restrict: 'E',
        controller: 'roomsDirectiveController',
        templateUrl: '/manage.rooms/rooms.html',
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {}
    };
});
