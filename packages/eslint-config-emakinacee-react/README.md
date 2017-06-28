# eslint-config-emakinacee-react

[![npm version](https://badge.fury.io/js/eslint-config-emakinacee-react.svg)](http://badge.fury.io/js/eslint-config-emakinacee-react)

This package contains all ESLint react specific rules.
We recommend to use these react specific rules in addition to our [base rules]().

## Dependencies
+ `eslint`
+ `eslint-plugin-jsx-a11y`
+ `eslint-plugin-react`

## Usage
1. Install the config and all dependencies mentioned above.
    ```sh
    npm install eslint eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-emakinacee-react
    ```

2. Extend the config in your .eslintrc by adding `"extends": "emakinacee-react"` e.g.:
    ```json
    {
        "extends": [
            "emakinacee-react"
        ]
    }
    ```
