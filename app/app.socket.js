angular.module('ws').factory('eventBus', function () {
    var eventBus = new EventBus("/eventbus");
    eventBus.onopen = function () {
        eventBus.registerHandler("chat.to.client", function (err, msg) {
            console.log(msg.body);
        });
    };
    return eventBus;

});