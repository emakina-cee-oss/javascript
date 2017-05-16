# eslint-config-emakinacee-base

[![npm version](https://badge.fury.io/js/eslint-config-emakinacee-base.svg)](http://badge.fury.io/js/eslint-config-emakinacee-base)

This package contains all ESLint baseline rules, including ES6+.

## Dependencies
+ `eslint`
+ `eslint-plugin-import`
+ `eslint-plugin-promise`
+ `eslint-plugin-standard`

## Usage
1. Install all dependencies mentioned above. Required versions can be listed by the command:
    ```sh
    npm info "eslint-config-emakinacee-base@latest" peerDependencies
    ```

2. Extend the config in your .eslintrc by adding `"extends": "emakinacee-base"`
