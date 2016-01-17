/* @ngInject */
ws.controller('heroDirectiveController', function (JSocket) {
    this.endTurn = function () {
        JSocket.send("game.end_turn");
    };
});
