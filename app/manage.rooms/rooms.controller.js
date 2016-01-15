/* @ngInject */
ws.controller('roomsDirectiveController', function (JSocket, $scope) {

    var ctrl = this;
    ctrl.roomUpdate = function () {
        JSocket.send('get.rooms');
        console.log('get.rooms');
    };

    JSocket.on('get.rooms', function (rooms) {
        ctrl.rooms = rooms;
        console.log('get.rooms recived', rooms);
        $scope.$apply();
    });

    ctrl.makeRoom = function (name) {
        JSocket.send('make.room', {name: name});
        console.log('make.rooms');
    };

    JSocket.on('make.room', function (room) {
        if (!ctrl.rooms)
            ctrl.rooms = [];
        ctrl.rooms.push(room);
        console.log('make.rooms recived');
        $scope.$apply();
    });

});
