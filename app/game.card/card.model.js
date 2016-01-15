ws.factory('GameCard', function () {
    function GameCard() {
        this.cost = 3;
        this.attack = 3;
        this.vital = 3;
        this.title = "abc";
        this.desc = "abcafa";
        this.img = "http://www.koreanhero.net/images/Admiral_Yi_Sun-sin02.jpg";
    }

    return GameCard;
});