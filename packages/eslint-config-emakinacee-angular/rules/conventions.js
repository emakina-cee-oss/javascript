module.exports = {
    rules: {
        // require DI parameters to be sorted alphabetically
        'angular/di-order': ['off', true],

        // require a consistent DI syntax
        'angular/di': ['error', 'function'],

        // unittest inject functions should only consist of assignments from injected values to describe block variables
        'angular/dumb-inject': 'error',

        // require and specify a consistent function style for components ('named' or 'anonymous')
        'angular/function-type': ['error', 'named'],

        // require a consistent order of module dependencies
        'angular/module-dependency-order': 'error',

        // use factory() instead of service()
        'angular/no-service-method': 'off',

        // require all DI parameters to be located in their own line
        'angular/one-dependency-per-line': 'off',

        // disallow different rest service and specify one of '$http', '$resource', 'Restangular'
        'angular/rest-service': 'off',

        // require and specify consistent use $scope.digest() or $scope.apply()
        'angular/watchers-execution': ['off', '$digest'],
    }
};
