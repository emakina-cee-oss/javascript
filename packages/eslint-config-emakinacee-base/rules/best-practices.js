// ESLint Rules related to Best Practices
// http://eslint.org/docs/rules/#best-practices

module.exports = {
    rules: {
        // enforces getter/setter pairs in objects
        'accessor-pairs': 'warn',

        // enforces return statements in callbacks of array's methods
        // http://eslint.org/docs/rules/array-callback-return
        'array-callback-return': 'warn',

        // treat var statements as if they were block scoped
        'block-scoped-var': 'off',

        // specify the maximum cyclomatic complexity allowed in a program
        complexity: ['off', 11],

        // enforce that class methods use "this"
        // http://eslint.org/docs/rules/class-methods-use-this
        'class-methods-use-this': ['warn', {
            exceptMethods: [],
        }],

        // require return statements to either always or never specify values
        'consistent-return': 'off',

        // specify curly brace conventions for all control statements
        curly: ['error', 'multi-line'],

        // require default case in switch statements
        'default-case': 'off',

        // encourages use of dot notation whenever possible
        'dot-notation': 'off',

        // enforces consistent newlines before or after dots
        // http://eslint.org/docs/rules/dot-location
        'dot-location': 'off',

        // require the use of === and !==
        // http://eslint.org/docs/rules/eqeqeq
        eqeqeq: 'error',

        // make sure for-in loops have an if statement
        'guard-for-in': 'off',

        // disallow the use of alert, confirm, and prompt
        'no-alert': 'warn',

        // disallow use of arguments.caller or arguments.callee
        'no-caller': 'warn',

        // disallow lexical declarations in case/default clauses
        // http://eslint.org/docs/rules/no-case-declarations.html
        'no-case-declarations': 'warn',

        // disallow division operators explicitly at beginning of regular expression
        // http://eslint.org/docs/rules/no-div-regex
        'no-div-regex': 'off',

        // disallow else after a return in an if
        'no-else-return': 'off',

        // disallow empty functions, except for standalone funcs/arrows
        // http://eslint.org/docs/rules/no-empty-function
        'no-empty-function': 'off',

        // disallow empty destructuring patterns
        // http://eslint.org/docs/rules/no-empty-pattern
        'no-empty-pattern': 'warn',

        // disallow comparisons to null without a type-checking operator
        'no-eq-null': 'off',

        // disallow use of eval()
        'no-eval': 'warn',

        // disallow adding to native types
        'no-extend-native': 'warn',

        // disallow unnecessary function binding
        'no-extra-bind': 'warn',

        // disallow Unnecessary Labels
        // http://eslint.org/docs/rules/no-extra-label
        'no-extra-label': 'off',

        // disallow fallthrough of case statements
        'no-fallthrough': 'warn',

        // disallow the use of leading or trailing decimal points in numeric literals
        'no-floating-decimal': 'off',

        // disallow reassignments of native objects or read-only globals
        // http://eslint.org/docs/rules/no-global-assign
        'no-global-assign': ['warn', { exceptions: [] }],
        // deprecated in favor of no-global-assign
        'no-native-reassign': 'off',

        // disallow implicit type conversions
        // http://eslint.org/docs/rules/no-implicit-coercion
        'no-implicit-coercion': ['off', {
            boolean: false,
            number: true,
            string: true,
            allow: [],
        }],

        // disallow var and named functions in global scope
        // http://eslint.org/docs/rules/no-implicit-globals
        'no-implicit-globals': 'off',

        // disallow use of eval()-like methods
        'no-implied-eval': 'warn',

        // disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 'off',

        // disallow usage of __iterator__ property
        'no-iterator': 'warn',

        // disallow use of labels for anything other then loops and switches
        'no-labels': ['warn', { allowLoop: false, allowSwitch: false }],

        // disallow unnecessary nested blocks
        'no-lone-blocks': 'warn',

        // disallow creation of functions within loops
        'no-loop-func': 'warn',

        // disallow magic numbers
        // http://eslint.org/docs/rules/no-magic-numbers
        'no-magic-numbers': ['off', {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        }],

        // disallow use of multiple spaces
        'no-multi-spaces': 'warn',

        // disallow use of multiline strings
        'no-multi-str': 'warn',

        // disallow use of new operator when not part of the assignment or comparison
        'no-new': 'warn',

        // disallow use of new operator for Function object
        'no-new-func': 'warn',

        // disallows creating new instances of String, Number, and Boolean
        'no-new-wrappers': 'warn',

        // disallow use of (old style) octal literals
        'no-octal': 'warn',

        // disallow use of octal escape sequences in string literals, such as
        // var foo = 'Copyright \251';
        'no-octal-escape': 'warn',

        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        // rule: http://eslint.org/docs/rules/no-param-reassign.html
        'no-param-reassign': ['off', {
            props: true,
            ignorePropertyModificationsFor: [
                'acc', // for reduce accumulators
                'e', // for e.returnvalue
                'ctx', // for Koa routing
                'req', // for Express requests
                'request', // for Express requests
                'res', // for Express responses
                'response', // for Express responses
                '$scope', // for Angular 1 scopes
            ]
        }],

        // disallow usage of __proto__ property
        'no-proto': 'warn',

        // disallow declaring the same variable more then once
        'no-redeclare': 'warn',

        // disallow certain object properties
        // http://eslint.org/docs/rules/no-restricted-properties
        'no-restricted-properties': ['off', {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated',
        }, {
            property: '__defineGetter__',
            message: 'Please use Object.defineProperty instead.',
        }, {
            property: '__defineSetter__',
            message: 'Please use Object.defineProperty instead.',
        }, {
            object: 'Math',
            property: 'pow',
            message: 'Use the exponentiation operator (**) instead.',
        }],

        // disallow use of assignment in return statement
        'no-return-assign': ['warn', 'always'],

        // disallow redundant `return await`
        'no-return-await': 'off',

        // disallow use of `javascript:` urls.
        'no-script-url': 'off',

        // disallow self assignment
        // http://eslint.org/docs/rules/no-self-assign
        'no-self-assign': 'warn',

        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 'warn',

        // disallow use of comma operator
        'no-sequences': 'warn',

        // restrict what can be thrown as an exception
        'no-throw-literal': 'warn',

        // disallow unmodified conditions of loops
        // http://eslint.org/docs/rules/no-unmodified-loop-condition
        'no-unmodified-loop-condition': 'off',

        // disallow usage of expressions in statement position
        'no-unused-expressions': ['off', {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
        }],

        // disallow unused labels
        // http://eslint.org/docs/rules/no-unused-labels
        'no-unused-labels': 'off',

        // disallow unnecessary .call() and .apply()
        'no-useless-call': 'warn',

        // disallow useless string concatenation
        // http://eslint.org/docs/rules/no-useless-concat
        'no-useless-concat': 'warn',

        // disallow unnecessary string escaping
        // http://eslint.org/docs/rules/no-useless-escape
        'no-useless-escape': 'warn',

        // disallow redundant return; keywords
        // http://eslint.org/docs/rules/no-useless-return
        'no-useless-return': 'warn',

        // disallow use of void operator
        // http://eslint.org/docs/rules/no-void
        'no-void': 'warn',

        // disallow usage of configurable warning terms in comments: e.g. todo
        'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

        // disallow use of the with statement
        'no-with': 'warn',

        // require using Error objects as Promise rejection reasons
        // http://eslint.org/docs/rules/prefer-promise-reject-errors
        'prefer-promise-reject-errors': ['warn', { allowEmptyReject: true }],

        // require use of the second argument for parseInt()
        radix: 'off',

        // require `await` in `async function` (note: this is a horrible rule that should never be used)
        // http://eslint.org/docs/rules/require-await
        'require-await': 'off',

        // requires to declare all vars on top of their containing scope
        'vars-on-top': 'off',

        // require immediate function invocation to be wrapped in parentheses
        // http://eslint.org/docs/rules/wrap-iife.html
        'wrap-iife': 'warn',

        // require or disallow Yoda conditions
        yoda: 'warn',
    }
};
