/* @ngInject */
ws.controller('handDirectiveController', function (GameCard, $element, $window, JSocket, $scope) {
    this.cards = [new GameCard(), new GameCard(), new GameCard(), new GameCard(), new GameCard(), new GameCard()];

    JSocket.on('card.update', function(hand){
       console.log(hand);
    });

    var width = $element.width();
    angular.element($window).bind('resize', function () {
        if ($element === null)
            return;
        width = $element.width();
        $scope.$apply();
    });

    var self = this;

    this.cardStyle = function (index) {
        var result = {};
        if (!self.cards)
            return;
        var def = index / self.cards.length;
        result.left = width * def - 11;
        result.left += 'px';
        var degree = (30 * def - 12.5);
        result.transform = "rotate(" + degree + "deg)";
        var x = (width / 2) - (width * def - 11) - 58;
        result.top = getTanDeg(degree) * x * (-1);
        result.top += 'px';
        return result;

        function getTanDeg(deg) {
            var rad = deg * Math.PI / 180;
            return Math.tan(rad);
        }
    };
});
