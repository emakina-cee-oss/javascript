module.exports = {
    extends: [
        // TODO: replace with npm module name of base config - add to as dependency in package.json
        // 'eslint-config-emakinacee-base',
        '../eslint-config-emakinacee-base',
        './rules/react',
        './rules/react-a11y',
    ].map(require.resolve)
};
