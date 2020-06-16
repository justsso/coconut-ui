module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true
    },
    extends: ['alloy', 'alloy/react', 'alloy/typescript'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {}
};
