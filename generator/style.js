const myfs = require('../lib/utils/fs')
const normDir = './node_modules/vue-cli-plugin-norm/generator'

module.exports = (api, options) => {
  const devDependencies = {
    'babel-eslint': '^10.1.0',
    'eslint': '^7.29.0',
    'eslint-plugin-vue': '^7.12.1',
    'vue-eslint-parser': '^7.6.0',
    'eslint-config-alloy': `${options.version}`,
  }

  // vue-cli的render没办法把隐藏文件复制过去：
  myfs.copyDir(normDir + '/style_template', './')
  const framework = options.framework + (options.ts ? '__ts' : '')
  myfs.copyFile(normDir + '/eslint_template/' + framework + '/.eslintrc.js', './.eslintrc.js')

  if (options.ts) {
    if (options.framework === 'vue') {
      devDependencies['@vue/eslint-config-typescript'] = '^7.0.0'
    } else {
      devDependencies['@typescript-eslint/eslint-plugin'] = '^4.28.3'
      devDependencies['@typescript-eslint/parser'] = '^4.28.3'
    }
  }

  api.extendPackage({
    devDependencies,
    scripts: {},
  })
}
