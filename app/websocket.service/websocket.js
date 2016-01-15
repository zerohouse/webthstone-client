ws.service('JSocket', function () {
    var events = {};
    var sock = new SockJS('http://localhost:9000/socket');

    sock.onconnect = function (frame) {
        console.log("socket established ", frame);
    };

    sock.onmessage = function (response) {
        var jeo = JSON.parse(response.data);
        if (typeof events[jeo.type] !== "function")
            return;
        events[jeo.type](jeo.result);
    };

    this.on = function (event, fn) {
        events[event] = fn;
    };


    this.send = function (event, params) {
        var jeo = new Jeo(event, params);
        sock.send(JSON.stringify(jeo));
    };

    function Jeo(type, params){
        this.type = type;
        this.params = params;
    }

});