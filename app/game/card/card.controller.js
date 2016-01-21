/* @ngInject */
ws.controller('cardDirectiveController', function ($scope, JSocket, effect) {

    var card = $scope.card;

    $scope.submit = function () {
        JSocket.send('card.submit', {id: card.id});
    };

    $scope.getString = effect.getString;

});
