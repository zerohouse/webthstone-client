/* @ngInject */
ws.controller('playerDirectiveController', function (JSocket, $scope) {

    var self = this;

    JSocket.on('game.player_update', function (player) {
        self.player = player;
        $scope.$apply();
    });

});
