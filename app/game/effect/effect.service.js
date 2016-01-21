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

    this.rangeNames = {
        "ALL_FIELD_FIGHTERS": "모든 필드 하수인",
        "ALL_FIGHTERS": "모든 캐릭터",
        "ENEMY_FIELD_FIGHTER": "적 필드 하수인",
        "ENEMY_FIGHTER": "적 캐릭터",
        "MY_FIELD_FIGHTERS": "내 필드 하수인",
        "MY_FIGHTERS": "내 캐릭터",
        "BOTH_HERO": "모든 영웅",
        "MY_HERO": "내 영웅",
        "ENEMY_HERO": "적 영웅"
    };

    var self = this;

    //http.get('/api/card/effect').then(function (effects) {
    //    self.effects = effects;
    //});

    this.effects = {
        "rand_target_assinate": {
            "id": "rand_target_assinate",
            "name": "무작위 타겟 제거",
            "params": [
                "제거 수"
            ],
            "rangeSelect": true,
            "range": [
                "ALL_FIELD_FIGHTERS",
                "MY_FIELD_FIGHTERS",
                "ENEMY_FIELD_FIGHTER"
            ]
        },
        "manaadd": {
            "id": "manaadd",
            "name": "마나획득",
            "params": [
                "마나량"
            ],
            "rangeSelect": false,
            "range": null
        },
        "rand_amount_attack": {
            "id": "rand_amount_attack",
            "name": "무작위 타겟(혹은 영웅지정) 무작위 피해(치료)",
            "params": [
                "최소 횟수",
                "최대 횟수",
                "최소 피해",
                "최대 피해"
            ],
            "rangeSelect": true,
            "range": [
                "ALL_FIELD_FIGHTERS",
                "ALL_FIGHTERS",
                "ENEMY_FIELD_FIGHTER",
                "ENEMY_FIGHTER",
                "MY_FIELD_FIGHTERS",
                "MY_FIGHTERS",
                "BOTH_HERO",
                "MY_HERO",
                "ENEMY_HERO"
            ]
        },
        "rand_attack": {
            "id": "rand_attack",
            "name": "무작위 타겟(혹은 영웅지정) 피해(치료)",
            "params": [
                "반복횟수",
                "피해량"
            ],
            "rangeSelect": true,
            "range": [
                "ALL_FIELD_FIGHTERS",
                "ALL_FIGHTERS",
                "ENEMY_FIELD_FIGHTER",
                "ENEMY_FIGHTER",
                "MY_FIELD_FIGHTERS",
                "MY_FIGHTERS",
                "BOTH_HERO",
                "MY_HERO",
                "ENEMY_HERO"
            ]
        },
        "rand_many_target_assinate": {
            "id": "rand_many_target_assinate",
            "name": "무작위 타겟 여러번 제거",
            "params": [
                "최소 제거",
                "최대 제거"
            ],
            "rangeSelect": true,
            "range": [
                "ALL_FIELD_FIGHTERS",
                "MY_FIELD_FIGHTERS",
                "ENEMY_FIELD_FIGHTER"
            ]
        },
        "manaadd_rand": {
            "id": "manaadd_rand",
            "name": "랜덤 마나 획득",
            "params": [
                "최소마나",
                "최대마나"
            ],
            "rangeSelect": false,
            "range": null
        },
        "target_assinate": {
            "id": "target_assinate",
            "name": "타겟 제거",
            "params": [],
            "rangeSelect": true,
            "range": [
                "ALL_FIELD_FIGHTERS",
                "MY_FIELD_FIGHTERS",
                "ENEMY_FIELD_FIGHTER"
            ]
        }
    };

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
