module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'warn',
    'no-dupe-keys': 'warn',
    'no-undef': 'warn',
    'vue/no-dupe-keys': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
