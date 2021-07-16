# vue-cli-plugin-norm

Code style and validation, git commit specification, for Vue/React, Fully automated!

  <a href="https://www.npmjs.org/package/vue-cli-plugin-norm">
    <img src="https://img.shields.io/npm/v/vue-cli-plugin-norm.svg">
  </a>

  <a href="https://npmcharts.com/compare/vue-cli-plugin-norm?minimal=true">
    <img src="http://img.shields.io/npm/dm/vue-cli-plugin-norm.svg">
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

![](./images/install.png)

### Start, enjoy code!

new commit:

```
npm run c / npm run commit
```

![](./images/c.png)

commit log view:

```
npm run clog
```

![](./images/docs.png)

alloyteam's Doc : [ESlint reference Doc.](https://alloyteam.github.io/eslint-config-alloy/?hideOff=1)

### How to uninstall

```
yarn remove commitizen commitlint conventional-changelog-cli husky right-pad

yarn remove babel-eslint eslint eslint-plugin-vue vue-eslint-parser eslint-config-alloy
```

delete `commitlint.config.js` `.eslintrc.js` `.prettierrc.js` at your root directory.
