ws.service('select', function (Alert) {

    this.all = function (e, title, callback) {
        preSelect(e, title);
        $('fighter').addClass('target');
        $('hero').addClass('target');
        postSelect(callback);
    };

    this.enemy = function (e, title, callback) {
        preSelect(e, title);
        $('enemy fighter').addClass('target');
        $('enemy hero').addClass('target');
        postSelect(callback);
    };

    this.my = function (e, title, callback) {
        preSelect(e, title);
        $('player fighter').addClass('target');
        $('player hero').addClass('target');
        postSelect(callback);
    };


    function preSelect(e, title) {
        e.stopPropagation();
        Alert.raw('info', title, "대상을 선택해주세요.", true);
    }


    function postSelect(callback) {
        $('.target').on('click', exeCallback);

        var click = function () {
            remove();
        };

        var body = $('body');
        body.on('click', click);

        function remove() {
            var target = $('.target');
            target.off('click', exeCallback);
            target.removeClass('target');
            body.off('click', click);
        }

        function exeCallback(e) {
            callback(angular.element(e.target).scope().ctrl.id);
        }
    }

});