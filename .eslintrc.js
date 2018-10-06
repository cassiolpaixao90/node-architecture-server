module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': ['off'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  globals: {
    document: true,
  },
  plugins: ['prettier'],
};
