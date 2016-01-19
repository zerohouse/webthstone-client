/* @ngInject */
ws.controller('loggerDirectiveController', function (Alert) {
    this.logs = Alert.log;
});
