module.exports = {
    rules: {
        // use angular.element instead of $ or jQuery
        'angular/angularelement': 'warn',

        // use angular.isDefined and angular.isUndefined instead of other undefined checks
        'angular/definedundefined': 'error',

        // use $document instead of document
        'angular/document-service': 'error',

        // use angular.forEach instead of native Array.prototype.forEach
        'angular/foreach': 'off',

        // use $interval instead of setInterval
        'angular/interval-service': 'error',

        // use angular.fromJson and 'angular.toJson' instead of JSON.parse and JSON.stringify
        'angular/json-functions': 'error',

        // use the $log service instead of the console methods
        'angular/log': 'warn',

        // require to use angular.mock methods directly
        'angular/no-angular-mock': 'off',

        // disallow to wrap angular.element objects with jQuery or $
        'angular/no-jquery-angularelement': 'error',

        // use $timeout instead of setTimeout
        'angular/timeout-service': 'error',

        // use angular.isArray instead of typeof
        'angular/typecheck-array': 'off',

        // use angular.isDate instead of typeof
        'angular/typecheck-date': 'off',

        // use angular.isFunction instead of typeof
        'angular/typecheck-function': 'off',

        // use angular.isNumber instead of typeof
        'angular/typecheck-number': 'off',

        // use angular.isObject instead of typeof
        'angular/typecheck-object': 'off',

        // use angular.isString instead of typeof
        'angular/typecheck-string': 'off',

        // use $window instead of window
        'angular/window-service': 'error'
    }
};
