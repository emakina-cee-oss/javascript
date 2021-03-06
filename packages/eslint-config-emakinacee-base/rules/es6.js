// ESLint Rules related to ES6
// http://eslint.org/docs/rules/#nodejs-and-commonjs

module.exports = {
    env: {
        es6: true
    },

    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            generators: false,
            objectLiteralDuplicateProperties: false
        },
        sourceType: 'module'
    },

    rules: {
        // enforces no braces where they can be omitted
        // http://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': ['off', 'as-needed', {
            requireReturnForObjectLiteral: false,
        }],

        // require parens in arrow function arguments
        // http://eslint.org/docs/rules/arrow-parens
        'arrow-parens': ['warn', 'always'],

        // require space before/after arrow function's arrow
        // http://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': ['warn', { before: true, after: true }],

        // verify super() callings in constructors
        'constructor-super': 'warn',

        // enforce the spacing around the * in generator functions
        // http://eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': ['warn', { before: false, after: true }],

        // disallow modifying variables of class declarations
        // http://eslint.org/docs/rules/no-class-assign
        'no-class-assign': 'warn',

        // disallow arrow functions where they could be confused with comparisons
        // http://eslint.org/docs/rules/no-confusing-arrow
        'no-confusing-arrow': ['off', {
            allowParens: true,
        }],

        // disallow modifying variables that are declared using const
        'no-const-assign': 'warn',

        // disallow duplicate class members
        // http://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 'warn',

        // disallow importing from the same path more than once
        // http://eslint.org/docs/rules/no-duplicate-imports
        // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'no-duplicate-imports': 'off',

        // disallow symbol constructor
        // http://eslint.org/docs/rules/no-new-symbol
        'no-new-symbol': 'warn',

        // disallow specific imports
        // http://eslint.org/docs/rules/no-restricted-imports
        'no-restricted-imports': 'off',

        // disallow to use this/super before super() calling in constructors.
        // http://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 'warn',

        // disallow useless computed property keys
        // http://eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 'warn',

        // disallow unnecessary constructor
        // http://eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 'warn',

        // disallow renaming import, export, and destructured assignments to the same name
        // http://eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': ['off', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        }],

        // require let or const instead of var
        'no-var': 'warn',

        // require method and property shorthand syntax for object literals
        // http://eslint.org/docs/rules/object-shorthand
        'object-shorthand': ['off', 'always', {
            ignoreConstructors: false,
            avoidQuotes: true,
        }],

        // suggest using arrow functions as callbacks
        'prefer-arrow-callback': ['warn', {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],

        // suggest using of const declaration for variables that are never modified after declared
        'prefer-const': 'warn',

        // Prefer destructuring from arrays and objects
        // http://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': ['off', {
            array: true,
            object: true,
        }, {
            enforceForRenamedProperties: false,
        }],

        // disallow parseInt() in favor of binary, octal, and hexadecimal literals
        // http://eslint.org/docs/rules/prefer-numeric-literals
        'prefer-numeric-literals': 'off',

        // suggest using Reflect methods where applicable
        // http://eslint.org/docs/rules/prefer-reflect
        'prefer-reflect': 'off',

        // use rest parameters instead of arguments
        // http://eslint.org/docs/rules/prefer-rest-params
        'prefer-rest-params': 'off',

        // suggest using the spread operator instead of .apply()
        // http://eslint.org/docs/rules/prefer-spread
        'prefer-spread': 'warn',

        // suggest using template literals instead of string concatenation
        // http://eslint.org/docs/rules/prefer-template
        'prefer-template': 'warn',

        // disallow generator functions that do not have yield
        // http://eslint.org/docs/rules/require-yield
        'require-yield': 'warn',

        // enforce spacing between object rest-spread
        // http://eslint.org/docs/rules/rest-spread-spacing
        'rest-spread-spacing': ['warn', 'never'],

        // import sorting
        // http://eslint.org/docs/rules/sort-imports
        'sort-imports': ['off', {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],

        // require a Symbol description
        // http://eslint.org/docs/rules/symbol-description
        'symbol-description': 'off',

        // enforce usage of spacing in template strings
        // http://eslint.org/docs/rules/template-curly-spacing
        'template-curly-spacing': ['warn', 'never'],

        // enforce spacing around the * in yield* expressions
        // http://eslint.org/docs/rules/yield-star-spacing
        'yield-star-spacing': ['warn', {'before': false, 'after': true}]
    }
};
