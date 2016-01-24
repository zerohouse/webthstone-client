/* @ngInject */
ws.service('JSocket', function ($timeout) {
    var events = {};
    var sock = new SockJS('/socket');

    sock.onconnect = function (frame) {
        console.log("socket established ", frame);
    };

    var eventQue = [];

    sock.onmessage = function (response) {
        eventQue.unshift(response);
        queing(eventQue, function (r) {
            var jeo = JSON.parse(r.data);
            if (!events[jeo.type] || !events[jeo.type].forEach)
                return;
            events[jeo.type].forEach(function (fn) {
                if (typeof fn !== "function")
                    return;
                fn(jeo.result);
            });

        });
    };


    this.on = function (event, fn) {
        if (!events[event])
            events[event] = [];
        events[event].push(fn);
    };


    var sendQue = [];
    this.send = function (event, params) {
        var jeo = new Jeo(event, params);
        queing(sendQue, sendMessage);

        function sendMessage() {
            if (sock.readyState !== 1) {
                $timeout(sendMessage, 300);
                return;
            }
            sock.send(JSON.stringify(jeo));
        }
    };

    function Jeo(type, params) {
        this.type = type;
        this.params = params;
    }

    function queing(eventQue, fn) {
        var pop = eventQue.pop();
        fn(pop);
        if (eventQue.length === 0)
            return;
        queing(eventQue, fn);
    }

})
;