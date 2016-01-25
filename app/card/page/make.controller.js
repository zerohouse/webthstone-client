/* @ngInject */
ws.controller('cardMakeController', function (http, effect, $q, $scope) {
    var self = this;
    this.card = {fighter: {effects: []}, effect: {params: []}};
    this.saveCard = function (card) {
        http.post('/api/card', card, true).then(function (res) {
            card.id = res;
        });
    };

    this.addEffect = function () {
        self.card.fighter.effects.push(new effect.Effect());
    };

    this.effect = effect;

    $scope.$watch(function () {
        return self.img;
    }, function (img) {
        isImage(img).then(function (test) {
            self.imgInvalid = !test;
            if (test)
                self.card.img = img;
        });
    });


    function isImage(src) {
        var deferred = $q.defer();

        var image = new Image();
        image.onerror = function () {
            deferred.resolve(false);
        };
        image.onload = function () {
            deferred.resolve(true);
        };
        image.src = src;

        return deferred.promise;
    }

});
