ws.controller('deckController', function (http, effect) {
    var self = this;
    this.card = {fighter: {effects: []}};
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

    this.addEffect = function () {
        self.card.fighter.effects.push(new effect.Effect());
    };

    this.effect = effect;


});
