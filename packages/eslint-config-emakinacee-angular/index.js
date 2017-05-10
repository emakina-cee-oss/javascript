module.exports = {
    extends: [
        // TODO: replace with npm module name of base config - add to as dependency in package.json
        // 'eslint-config-emakinacee-base',
        '../eslint-config-emakinacee-base',
        './rules/best-practices',
        './rules/conventions',
        './rules/deprecated',
        './rules/errors',
        './rules/misspelling',
        './rules/naming',
        './rules/wrappers'
    ].map(require.resolve),

    globals: {
        angular: true
    },

    plugins: [
        'angular'
    ],
};
