module.exports = {
    rules: {
        // limit the number of angular components per file
        'angular/component-limit': 'error',

        // disallow assignments to $scope in controllers
        'angular/controller-as': 'error',

        // require and specify a capture variable for this in controllers
        'angular/controller-as-vm': 'off',

        // require the use of controllerAs in routes or states
        'angular/controller-as-route': 'error',

        // use $q(function(resolve, reject){}) instead of $q.deferred
        'angular/deferred': 'error',

        // disallow unused DI parameters
        'angular/di-unused': 'error',

        // disallow any other directive restrict than 'A' or 'E'
        'angular/directive-restrict': ['error', {
            explicit: 'always'
        }],

        // disallow empty controllers
        'angular/empty-controller': 'error',

        // disallow use of controllers (according to the component first pattern)
        'angular/no-controller': 'error',

        // disallow the use of inline templates
        'angular/no-inline-template': ['error', {
            allowSimple: false
        }],

        // keep run functions clean and simple
        'angular/no-run-logic': 'off',

        // disallow DI of specified services for other angular components ($http for controllers, filters and directives)
        'angular/no-services': ['error', ['$http', '$resource']],

        // require $on and $watch deregistration callbacks to be saved in a variable
        'angular/on-watch': 'error',

        // prefer components over directives
        'angular/prefer-component': 'off'
    }
};
