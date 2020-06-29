const OFF = 0;

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
    rules: {
        '@typescript-eslint/explicit-member-accessibility': OFF,
        'max-params': [0, 20],   // 函数参数个数
    }
};
