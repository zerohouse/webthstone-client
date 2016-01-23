ws.controller('deckController', function (http, $stateParams, $scope, fb, effect) {
    var self = this;
    self.effect = effect;
    this.getDeck = function () {
        http.get('/api/deck', {deckId: $stateParams.id}).then(function (deck) {
            self.deck = deck;
            $scope.$watch(function () {
                return self.deck.name;
            }, function (name) {
                http.put('/api/deck/name', {deckId: deck.id, name: name}).then(function () {
                    if (fb.user)
                        fb.user.deckList.findById(deck.id).name = name;
                });
            });
        });
    };

    this.getDeck();

    this.delete = function (card) {
        http.delete('/api/deck', {deckHasCardId: card.deckHasCardId}).then(function () {
            self.deck.cards.remove(card);
        });
    };


});
