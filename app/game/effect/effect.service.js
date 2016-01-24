/* @ngInject */
ws.service('effect', function (http) {
    this.timings = {};
    this.timings.START_TURN = "턴 시작";
    this.timings.END_TURN = "턴 종료";
    this.timings.heated = "맞을 때";
    this.timings.ATTACK = "때릴 때";
    this.timings.DRAW_CARD = "카드뽑을 때";
    this.timings.DIE = "죽을 때";
    this.timings.BIRTH = "전장에 나올 때";
    this.timings.TEAM_DIE = "아군 하수인이 죽을 때";
    this.timings.TEAM_BIRTH = "아군 하수인이 뽑을 때";
    this.timings.ENEMY_DIE = "적 하수인이 죽을 때";
    this.timings.ENEMY_BIRTH = "적 하수인이 뽑을 때";

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


    var self = this;

    http.get('/api/card/effect').then(function (effects) {
        self.effects = effects;
        self.fighterEffects = {};
        Object.keys(effects).forEach(function (key) {
            if (effects[key].targetNeed)
                return;
            self.fighterEffects[key] = effects[key];
        });
    });

    this.Effect = Effect;

    function Effect() {
        this.params = [];
    }

    this.getString = function (effect) {
        if (effect === undefined)
            return;

        return getTiming(self.timings[effect.timing]) + getRange(self.rangeNames[effect.range]) + getEvent(self.effects[effect.effect]);
        function getTiming(timing) {
            if (!timing)
                return "";
            return timing + " 때 ";
        }

        function getEvent(event) {
            if (!event)
                return "";
            var params = [];
            if (effect.params)
                event.params.forEach(function (ev, i) {
                    if (effect.params[i] !== undefined)
                        params.push(ev + ":" + effect.params[i]);
                });
            if (params.length === 0)
                return event.name;
            return event.name + "(" + params.join(",") + ")";
        }

        function getRange(range) {
            if (!range)
                return "";
            return range + "중에서  ";
        }
    };

});
