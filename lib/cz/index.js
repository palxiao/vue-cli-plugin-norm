'format cjs';
const engine = require('./engine');

module.exports = engine({
  types: {
    feat: {
      description: ' 🌟 添加新特性',
      title: '🌟 新功能'
    },
    fix: {
      description: '🐛 修复了bugs ',
      title: '🐛 Bug 修复'
    },
    style: {
      description: '  🎨 UI/样式改动',
      title: '🎨 样式'
    },
    docs: {
      description: ' 📝 文档补充或变更',
      title: '📝 文档'
    },
    test: {
      description: ' 🔧 测试用例/测试代码',
      title: '🔧 测试'
    },
    code: {
      description: ' 🔨 代码优化/重构/代码回滚',
      title: '🔨 代码重构'
    },
    // chore: {
    //   description: '🏠  影响构建系统或外部依赖的更改（例如：gulp，npm，webpack）',
    //   title: '🏠 构建'
    // },
    // ci: {
    //   description: '📦  持续集成的配置文件和脚本的改变（例如: Travis, Circle）',
    //   title: '📦 持续集成'
    // },
    // revert: {
    //   description: '🔙  撤销上一次的提交',
    //   title: '🔙 撤销'
    // }
  },
  scopes: {
    custom: {
      description: '  手动输入',
      title: 'custom'
    },
    component: {
      description: '     影响组件使用',
      title: 'component'
    },
    data: {
      description: '数据变化',
      title: 'data'
    },
  }
});
