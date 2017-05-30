# eslint-config-emakinacee-angular

[![npm version](https://badge.fury.io/js/eslint-config-emakinacee-angular.svg)](http://badge.fury.io/js/eslint-config-emakinacee-angular)

This package contains all ESLint angular specific rules.
We recommend to use these angular specific rules in addition to our [base rules]().

## Dependencies
+ `eslint`
+ `eslint-plugin-angular`

## Usage
1. Install the config and all dependencies mentioned above.
    ```sh
    npm install eslint eslint-plugin-angular eslint-config-emakinacee-angular
    ```

2. Extend the config in your .eslintrc by adding `"extends": "emakinacee-angular"` e.g.:
    ```json
    {
        "extends": [
            "emakinacee-angular"
        ]
    }
    ```
