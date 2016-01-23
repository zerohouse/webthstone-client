ws.controller('deckController', function (http, effect) {
    var self = this;
    this.getList = function () {
        http.get('/api/deck').then(function (cards) {
            self.cards = cards;
        });
    };

});
