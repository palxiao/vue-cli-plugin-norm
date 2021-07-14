# vue-cli-plugin-norm
全自动的代码风格校验，以及Git代码提交规范，支持Vue及React项目

  <a href="https://www.npmjs.org/package/vue-cli-plugin-norm">
    <img src="https://img.shields.io/npm/v/vue-cli-plugin-norm.svg">
  </a>

  <a href="https://npmcharts.com/compare/vue-cli-plugin-norm?minimal=true">
    <img src="http://img.shields.io/npm/dm/vue-cli-plugin-norm.svg">
  </a>

[English](./README.md) / 简体中文

### 你的 vscode 需要安装以下插件：`prettier` `eslint`


注意: Vue项目中最好不选择引入TS校验，会有些奇怪的报错。


### 目前依赖 Vue-cli，全局安装即可，即使你不使用Vue
```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### 在你的项目上使用命令: 
```
vue add vue-cli-plugin-norm
```
![](./images/install.png)

### 开始使用!

提交代码: 
```
npm run c 或 npm run commit
``` 
![](./images/c.png)

查看提交的历史日志: 
```
npm run clog
```
![](./images/docs.png)

本项目基于alloyteam团队使用的规范，你也可以根据情况自定义规则，参考文档：[ESlint reference Doc.](https://alloyteam.github.io/eslint-config-alloy/?hideOff=1)

### 卸载

```
yarn remove commitizen commitlint conventional-changelog-cli husky right-pad

yarn remove babel-eslint eslint eslint-plugin-vue vue-eslint-parser eslint-config-alloy
```
删除根目录下的 `commitlint.config.js` `.eslintrc.js` `.prettierrc.js` 