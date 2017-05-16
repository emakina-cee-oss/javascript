/**
 * Provoke some linting errors to see if linting works.
 */
angular
    .module('myApp', [
        'ngAnimate',
        'ngRoute',
        'ngCookies',
    ])
    .run(($document, $window, $log) => {
        console.log('FOO');
    });
