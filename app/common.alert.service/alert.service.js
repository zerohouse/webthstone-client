ws.service('Alert', alert);
/* @ngInject */
function alert(toastr) {

    this.success = function (msg) {
        toastr.success(msg, '성공');
    };
    this.info = function (msg) {
        toastr.info(msg, '알림');
    };
    this.warning = function (msg) {
        toastr.warning(msg, '경고');
    };
    this.error = function (msg, err) {
        toastr.error(msg, '오류');
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
}