ws.controller('gameController', function (JSocket, Alert, $interval) {

    var TURN_TIME_OUT = 30;

    var self = this;

    this.playGame = function () {
        JSocket.send("game.play");
    };

    JSocket.on("message", function (message) {
        Alert.info(message);
    });

    JSocket.on("game.start_turn", function () {
        Alert.info("내 차례입니다.");
        self.turn = true;
        resetTimer();
    });

    JSocket.on("game.enemy_turn", function () {
        Alert.info("상대의 차례입니다.");
        self.turn = false;
        resetTimer();
    });

    JSocket.on("game.start", function () {
        Alert.info("게임을 시작합니다.");
    });

    function resetTimer() {
        self.remainSeconds = TURN_TIME_OUT;
    }

    self.remainSeconds = TURN_TIME_OUT;

    $interval(function () {
        if (self.remainSeconds > 0)
            self.remainSeconds--;
    }, 1000);

});
