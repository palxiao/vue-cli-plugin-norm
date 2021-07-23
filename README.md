<!--
 * @Author: ShawnPhang
 * @Date: 2021-07-08 14:27:29
 * @Description: 
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-07-23 14:35:29
 * @site: book.palxp.com / blog.palxp.com
-->
# vue-cli-plugin-norm

Build Code style and validation, Git commit specification, quickly and fully automated! support Vue & React.

  <a href="https://www.npmjs.org/package/vue-cli-plugin-norm">
    <img src="https://img.shields.io/npm/v/vue-cli-plugin-norm.svg">
  </a>

  <a href="https://npmcharts.com/compare/vue-cli-plugin-norm?minimal=true">
    <img src="http://img.shields.io/npm/dt/vue-cli-plugin-norm.svg">
  </a>

English / [简体中文](./README.zh-CN.md)

### Your vscode need to install plugin：`prettier` `eslint`

Now code validation support vue2/3 + TypeScript.

Features: It is not validated at Commit, but every time if you Save File, auto fix style and validation rules.

### before Start

Currently rely on Vue-cli, even if you're not using Vue.

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### At your project:

```
vue add vue-cli-plugin-norm
```

### Start, enjoy code!

new commit:

```
npm run c / npm run commit
```

commit log view:

```
npm run clog
```

alloyteam's Doc : [ESlint reference Doc.](https://alloyteam.github.io/eslint-config-alloy/?hideOff=1)

![](http://book.palxp.com/images/norm/v.png)

### How to uninstall

```
yarn remove commitizen commitlint conventional-changelog-cli husky right-pad

yarn remove babel-eslint eslint eslint-plugin-vue vue-eslint-parser eslint-config-alloy
```

delete `commitlint.config.js` `.eslintrc.js` `.prettierrc.js` at your root directory.
