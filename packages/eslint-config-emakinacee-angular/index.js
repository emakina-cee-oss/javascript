module.exports = {
    extends: [
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
