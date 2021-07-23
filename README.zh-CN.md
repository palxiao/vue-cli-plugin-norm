<!--
 * @Author: ShawnPhang
 * @Date: 2021-06-26 10:33:08
 * @Description: 
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-07-23 14:31:50
 * @site: book.palxp.com / blog.palxp.com
-->
# vue-cli-plugin-norm

帮助你快速地对项目建立起全自动的代码风格校验，以及Git提交规范，支持 Vue 及 React 项目.

  <a href="https://www.npmjs.org/package/vue-cli-plugin-norm">
    <img src="https://img.shields.io/npm/v/vue-cli-plugin-norm.svg">
  </a>

  <a href="https://npmcharts.com/compare/vue-cli-plugin-norm?minimal=true">
    <img src="http://img.shields.io/npm/dt/vue-cli-plugin-norm.svg">
  </a>

[English](./README.md) / 简体中文

### 你的 vscode 需要安装以下插件：`prettier` `eslint`

代码校验已支持 Vue2/3 + TS 的项目.

插件有如下特性: 不在 Commit 时校验规则，而是每次保存文件时自动校验及格式化，包括可能存在的一些 auto fix(会自动修复掉).

### 开始之前

目前依赖 Vue-cli，全局安装即可，即使你不使用 Vue

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### 在你的项目上使用命令:

```
vue add vue-cli-plugin-norm
```

![](http://book.palxp.com/images/norm/install.png)

### 开始使用!

提交代码:

```
npm run c 或 npm run commit
```

![](http://book.palxp.com/images/norm/c.png)

查看提交的历史日志:

```
npm run clog
```

![](http://book.palxp.com/images/norm/docs.png)

本项目基于 alloyteam 团队使用的规范，你也可以根据情况自定义规则，参考文档：[ESlint reference Doc.](https://alloyteam.github.io/eslint-config-alloy/?hideOff=1)

![](http://book.palxp.com/images/norm/v.png)

### 卸载

```
yarn remove commitizen commitlint conventional-changelog-cli husky right-pad

yarn remove babel-eslint eslint eslint-plugin-vue vue-eslint-parser eslint-config-alloy
```

删除根目录下的 `commitlint.config.js` `.eslintrc.js` `.prettierrc.js`
