# eslint-config-emakinacee-base

[![npm version](https://badge.fury.io/js/eslint-config-emakinacee-base.svg)](http://badge.fury.io/js/eslint-config-emakinacee-base)

This package contains all ESLint baseline rules, including ES6+.

## Dependencies
+ `eslint`
+ `eslint-plugin-import`
+ `eslint-plugin-promise`
+ `eslint-plugin-standard`

## Usage
1. Install the config and all dependencies mentioned above.
    ```sh
    npm install eslint eslint-plugin-import eslint-plugin-promise eslint-plugin-standard eslint-config-emakinacee-base
    ```

2. Extend the config in your .eslintrc by adding `"extends": "emakinacee-react"` e.g.:
    ```json
    {
        "extends": [
            "emakinacee-base"
        ]
    }
    ```
