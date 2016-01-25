/* @ngInject */
ws.controller('gameController', function (JSocket, Alert, $interval, fb) {

    var TURN_TIME_OUT = 30;

    var self = this;

    this.fb = fb;


    this.heros = {
        healer: "치료", magician: "데미지", warrior: "방어도", hunter: "적 영웅 공격"
    };

    this.playGame = function (deckId, hero) {
        JSocket.send("game.play", {deckId: deckId, hero: hero});
    };

    JSocket.on('game.player_update', function (player) {
        self.playing = true;
    });

    JSocket.on("message", function (message) {
        Alert.info(message);
    });

    JSocket.on("game.card_dek_null", function (damage) {
        Alert.raw('error', "탈진", "덱에 카드가 없어 피해를 입습니다. -" + damage);
    });

    JSocket.on("game.use_card", function (cardname) {
        Alert.raw('success', "카드사용", cardname + "카드를 사용했습니다.");
    });

    JSocket.on("game.attack", function (cardname) {
        Alert.raw('error', "공격!", cardname);
    });

    JSocket.on("game.enemy_use_card", function (cardname) {
        Alert.raw('error', "카드사용", "상대가 " + cardname + "카드를 사용했습니다.");
    });

    JSocket.on("game.warn", function (message) {
        Alert.warning(message);
    });

    JSocket.on("game.start_turn", function () {
        Alert.info("내 차례입니다.");
        self.turn = true;
        resetTimer();
    });

    JSocket.on("game.enemy_turn", function () {
        Alert.info("상대의 차례입니다.");
        self.turn = false;
        resetTimer();
    });

    JSocket.on("game.start", function () {
        Alert.info("게임을 시작합니다.");
        self.playing = true;
    });

    function resetTimer() {
        self.remainSeconds = TURN_TIME_OUT;
    }

    self.remainSeconds = TURN_TIME_OUT;

    $interval(function () {
        if (self.remainSeconds > 0)
            self.remainSeconds--;
    }, 1000);

});
