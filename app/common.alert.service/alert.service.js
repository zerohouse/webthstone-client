/* @ngInject */
ws.service('Alert', function (toastr) {

    this.log = [];

    this.raw = function (type, title, msg, notLog) {
        toastr[type](msg, title);
        if (!notLog)
            this.log.unshift(new Log(type, msg));
    };

    this.success = function (msg) {
        toastr.success(msg, '성공');
        this.log.unshift(new Log('success', msg));
    };

    this.info = function (msg) {
        toastr.info(msg, '알림');
        this.log.unshift(new Log('info', msg));
    };

    this.warning = function (msg) {
        toastr.warning(msg, '경고');
        this.log.unshift(new Log('warning', msg));
    };

    this.error = function (msg, err) {
        toastr.error(msg, '오류');
        this.log.unshift(new Log('error', msg));
        if (bowser.chrome) {
            if (err) {
                console.table({
                    'message': msg,
                    'error': err
                });
            } else {
                console.log({'message': msg, 'error': err});
            }
        }
    };

    function Log(type, msg) {
        this.type = type;
        this.msg = msg;
    }
});
