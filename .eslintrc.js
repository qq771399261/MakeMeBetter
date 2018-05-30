module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    //函数括号前需要空格
    'space-before-function-paren': [0, 'always'],
    //语句强制分号结尾
    'semi': [2, 'always']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}