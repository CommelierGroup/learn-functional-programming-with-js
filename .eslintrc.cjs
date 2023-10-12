module.exports = {
  env: {
    node: true,
    es2024: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:json/recommended',
  ],
  plugins: [
    'prettier', // Prettier 규칙을 적용
  ],
  rules: {
    'prettier/prettier': 'error',
  },
}
