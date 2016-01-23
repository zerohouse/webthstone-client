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
ws.service('fb', function fb($rootScope, JSocket) {
    var self = this;
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
