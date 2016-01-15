ws.controller('gameController', function (JSocket, Alert) {

    this.playGame = function () {
        JSocket.send("game.play");
    };

    JSocket.on("message", function (message) {
        Alert.info(message);
    });

});
