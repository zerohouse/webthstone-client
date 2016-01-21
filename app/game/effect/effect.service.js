/* @ngInject */
ws.service('effect', function (http) {
    this.timings = {};
    this.timings.start_turn = "턴 시작";
    this.timings.start_end = "턴 종료";
    this.timings.heated = "맞을 때";
    this.timings.attack = "때릴 때";
    this.timings.draw_card = "카드뽑을 때";
    this.timings.die = "죽을 때";
    this.timings.team_die = "아군 하수인이 죽을 때";
    this.timings.team_birth = "아군 하수인이 뽑을 때";
    this.timings.enemy_die = "적 하수인이 죽을 때";
    this.timings.enemy_birth = "적 하수인이 뽑을 때";

    var self = this;

    http.get('/api/card/effect').then(function (effects) {
        self.effects = effects;
    });

    this.Effect = Effect;

    function Effect() {
        this.params = [];
    }

    this.getString = function (effect) {
        if (effect === undefined)
            return;
        var timing = self.timings[effect.timing];
        if (timing === undefined)
            return "이 하수인은 "
        var event = self.effects[effect.effect];
        if (event === undefined)
            return "이 하수인은 " + timing + " 때 ";
        var params = [];
        if (params === undefined)
            return "이 하수인은 " + timing + " 때 " + event.name + "합니다.";
        event.params.forEach(function (ev, i) {
            if (effect.params[i] !== undefined)
                params.push(ev + ":" + effect.params[i]);
        });
        if (params.length === 0)
            return "이 하수인은 " + timing + " 때 " + event.name + "합니다.";
        return "이 하수인은 " + timing + " 때 " + event.name + "(" + params.join(",") + ")합니다.";
    };

});
