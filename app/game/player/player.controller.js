/* @ngInject */
ws.controller('playerDirectiveController', function (JSocket, $scope, select) {

    var self = this;

    JSocket.on('game.player_update', function (player) {
        self.player = player;
        $scope.$apply();
    });

    this.attackSelect = function (e, id) {
        select.enemy(e, "공격 대상 선택", function (target) {
            if (id !== undefined && target !== undefined)
                JSocket.send('game.fighter_attack', {by: id, target: target});
        });
    };

});
