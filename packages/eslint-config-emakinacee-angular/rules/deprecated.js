module.exports = {
    rules: {
        // use $cookies instead of $cookieStore
        'angular/no-cookiestore': 'error',

        // disallow the $http methods success() and error()
        'angular/no-http-callback': 'error',

        // disallow the deprecated directive replace property
        'angular/no-directive-replace': 'error',
    }
};
