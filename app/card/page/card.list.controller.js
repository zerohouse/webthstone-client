ws.controller('cardListController', function (http, effect, $scope) {
    this.effect = effect;
    this.page = 0;
    var self = this;
    self.cards = [];
    this.getList = function () {
        http.get('/api/card', {page: self.page, keyword: $scope.keyword}).then(function (cards) {
            self.cards = self.cards.concat(cards);
            self.page++;
            self.more = cards.length === 10;
        });
    };

    $scope.$watch('keyword', function () {
        self.page = 0;
        self.cards = [];
        self.getList();
    });
});
