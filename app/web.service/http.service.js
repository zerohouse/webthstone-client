/* @ngInject */
ws.factory('http', function ($http, $q) {
    var http = function (method, url, params, success, error, json) {
        var options = {
            method: method, url: url
        };
        if (json)
            options.headers = {'Content-Type': 'application/json'};
        else
            options.headers = {'Content-Type': 'application/x-www-form-urlencoded'};

        if (method === "GET" || method === "DELETE")
            options.params = params;
        else if (json)
            options.data = params;
        else {
            options.transformRequest = function (obj) {
                var str = [];
                for (var p in obj) {
                    if (obj[p] === undefined || obj[p] === "" || typeof obj[p] === "function" || obj[p] === null || obj[p] === "null")
                        continue;
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                return str.join("&");
            };
            options.data = params;
        }

        $http(options).success(function (response) {
            if (!success)
                return;
            success(response);
        }).error(function (e) {
            if (!error)
                return;
            error(e);
        });
    };
    http.get = function (url, params) {
        return $q(function (resolve, reject) {
            http("GET", url, params, resolve, reject);
        });
    };
    http.post = function (url, params, json) {
        return $q(function (resolve, reject) {
            http("POST", url, params, resolve, reject, json);
        });
    };
    http.put = function (url, params, json) {
        return $q(function (resolve, reject) {
            http("PUT", url, params, resolve, reject, json);
        });
    };
    http.delete = function (url, params) {
        return $q(function (resolve, reject) {
            http("DELETE", url, params, resolve, reject);
        });
    };
    return http;
});
