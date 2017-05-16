module.exports = {
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/es6',
        './rules/imports',
        './rules/node',
        './rules/promise',
        './rules/standard',
        './rules/strict',
        './rules/style',
        './rules/variables',
    ].map(require.resolve),

    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
        sourceType: 'module',
    },

    globals: {
        'navigator': false,
        'document': false,
        'window': false
    }
};
