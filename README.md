# vue-cli-plugin-norm
Code style and validation, git commit specification. Fully automated!

  <a href="https://npmcharts.com/compare/element-plus?minimal=true">
    <img src="http://img.shields.io/npm/dm/element-plus.svg">
  </a>

  <a href="https://npmcharts.com/compare/vue-cli-plugin-norm?minimal=true">
    <img src="http://img.shields.io/npm/dm/vue-cli-plugin-norm.svg">
  </a>

English / [简体中文](./README.zh-CN.md)

### Your vscode need to install plugin：`prettier` `eslint`

### Currently rely on Vue-cli
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
npm run c
``` 

commit log view: 
```
npm run clog
```

alloyteam's Doc : [ESlint reference Doc.](https://alloyteam.github.io/eslint-config-alloy/?hideOff=1)

### How to uninstall

```
yarn remove commitizen commitlint conventional-changelog-cli husky right-pad

yarn remove babel-eslint eslint eslint-plugin-vue vue-eslint-parser eslint-config-alloy
```
delete `commitlint.config.js` `.eslintrc.js` `.prettierrc.js` at your root directory.