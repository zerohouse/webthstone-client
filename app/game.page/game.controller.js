angular.module('ws').controller('gameController', function () {

    this.sendMessage = sendMessage;
    var eventBus = this.eventBus = new EventBus("/eventbus");
    eventBus.onopen = function () {
        eventBus.registerHandler("chat.to.client", function (err, msg) {
            console.log(msg.body);
        });
    };


    function sendMessage() {
        eventBus.publish("chat.to.server", "abc");
    }


});