ws.controller('cardMakeController', function (JSocket) {
    var self = this;
    this.saveCard = function () {
        JSocket.send("card.save", self.card);
    };

    JSocket.on("card.list", function (list) {
        console.log(list);
    });
});
