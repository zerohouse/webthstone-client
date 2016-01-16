/* @ngInject */
ws.controller('cardDirectiveController', function ($scope, JSocket) {

    var card = $scope.card;
    $scope.submit = function () {
        JSocket.send('card.submit', {id: card.id});
    };

});
