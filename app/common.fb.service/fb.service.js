/* @ngInject */
ws.run(function ($rootScope, $window, fb) {
    $window.fbAsyncInit = function () {
        FB.init({
            appId: '1662258297325035',
            status: true,
            cookie: true,
            xfbml: true,
            version: 'v2.4'
        });
        FB.Event.subscribe('auth.statusChange', function (res) {
            if (res.status === 'connected') {
                fb.getUserInfo();
            }
        });
    };
});

/* @ngInject */
ws.service('fb', function fb($rootScope, JSocket, http, Alert) {
    var self = this;

    JSocket.on('user.update', function (user) {
        self.user = user;
    });

    this.getUserInfo = function () {
        FB.api('/me', function (res) {
            self.user = res;
            $rootScope.$apply();
            JSocket.send('fb.user', res);

            FB.api('/' + res.id + '/picture', function (response) {
                self.user.profile = response.data.url;
                JSocket.send('fb.user', {img: response.data.url});
                $rootScope.$apply();
            });
        });
    };

    this.newDeck = function () {
        if (!self.user) {
            Alert.warning("로그인을 해주세요.");
            return;
        }
        http.post('/api/deck', {fbId: self.user.id}).then(function (deck) {
            if (!self.user.deckList)
                self.user.deckList = [];
            self.user.deckList.push(deck);
        });
    };


    this.logout = function () {
        FB.logout(function () {
            self.user = {};
        });
    };

    this.login = function fb_login() {
        FB.login(function (response) {
            if (response.authResponse) {
                self.access_token = response.authResponse.accessToken;
                self.user_id = response.authResponse.userID;
            }
        });
    };

});
