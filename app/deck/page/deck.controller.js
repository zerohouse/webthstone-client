ws.controller('deckController', function (JSocket, Alert, $interval) {

    this.getList = function () {
        JSocket.send("card.list");

    };

    JSocket.on("card.list", function (list) {
        console.log(list);
    });


});
