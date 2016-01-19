ws.controller('deckController', function (http) {
    var self = this;
    this.saveCard = function (card) {
        http.post('/api/card', card).then(function (res) {
            card.id = res;
        });
        self.cards.push(card);
    };

    this.getList = function () {
        http.get('/api/card').then(function (cards) {
            self.cards = cards;
        });
    };

    this.getList();

});
