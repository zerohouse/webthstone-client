/* @ngInject */
ws.controller('cardListController', function (http, effect, $scope, fb) {
    this.effect = effect;
    var self = this;
    this.getList = function () {
        http.get('/api/card', {page: self.page, keyword: $scope.keyword}).then(function (cards) {
            self.cards = cards;
        });
    };

    this.getList();

    self.user = fb.user;

    self.addToDeck = function (deck, card) {
        http.put('/api/deck', {deckId: deck.id, cardId: card.id}).then(function (card) {
            deck.cards.push(card);
        });
    };

});
