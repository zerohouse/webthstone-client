ws.directive('user', function () {
    return {
        restrict: 'E',
        controller: 'userDirectiveController',
        templateUrl: '/user/user.directive/user.html',
        scope: {
            user: '='
        }
    };
});
