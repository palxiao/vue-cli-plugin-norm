const commit = require('./commit')
const style = require('./style')

module.exports = (api, option) => {
    if (option.style) {
        style(api, option)
        console.log('📦  打包运送中: prettier eslint')
    }
    if (option.commit) {
        commit(api)
        console.log('📦  打包运送中: husky, commitlint, conventional-changelog')
    }
}
