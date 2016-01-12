angular.module('ws').controller('wsmain', function(eventBus){

    var self = this;
    this.send = function(){
        eventBus.publish("chat.to.server", this.m);
    };
    console.log(eventBus);
});