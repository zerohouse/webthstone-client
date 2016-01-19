/* @ngInject */
ws.controller('enemyDirectiveController', function (JSocket, $scope) {

    var self = this;

    JSocket.on('game.enemy_update', function (player) {
        self.player = player;
        $scope.$apply();
    });

});
