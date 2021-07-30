module.exports = {
    extends: [
      'alloy',
      'alloy/vue',
      // 'alloy/typescript',
      '@vue/typescript'
    ],
    env: {
      // 你的环境变量（包含多个预定义的全局变量）
      //
      // browser: true,
      // node: true,
      // mocha: true,
      // jest: true,
      // jquery: true
    },
    globals: {
      // 你的全局变量（设置为 false 表示它不允许被重新赋值）
      //
      // myGlobal: false
    },
    rules: {
      // 自定义你的规则
      'vue/component-tags-order': ['off'],
      'vue/no-multiple-template-root': ['off'],// 关闭模板多个根元素的错误提示
    },
    parserOptions: {
      ecmaFeatures: {
        legacyDecorators: true, // 配置允许注解
      },
    },
  };