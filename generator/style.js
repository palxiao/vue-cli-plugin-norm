const myfs = require('../lib/utils/fs')
module.exports = (api, options) => {
    // vue-cli的render没办法把隐藏文件复制过去：
    myfs.copyDir('./node_modules/vue-cli-plugin-norm/generator/style_template', './')
    if (options.ts) {
        myfs.copyFile('./node_modules/vue-cli-plugin-norm/generator/style_ts_template/.eslintrc.js', './.eslintrc.js')
    } else { myfs.copyFile('./node_modules/vue-cli-plugin-norm/generator/style_noTs_template/.eslintrc.js', './.eslintrc.js') }
    api.extendPackage({
        devDependencies: {
            "babel-eslint": "^10.1.0",
            "eslint": "^7.29.0",
            "eslint-plugin-vue": "^7.12.1",
            "vue-eslint-parser": "^7.6.0",
            "eslint-config-alloy": `${options.version}`,
        },
        scripts: {}
    })
}