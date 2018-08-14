module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  rules: {
    "semi": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "no-multiple-empty-lines": [2, { "max": 2, "maxEOF": 1 }],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    'no-trailing-spaces': ["error", { "ignoreComments": true }],
    'no-param-reassign': 0,
  },
}
