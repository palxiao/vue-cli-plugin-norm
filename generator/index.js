const commit = require('./commit')
const style = require('./style')

module.exports = (api, option) => {
    if (option.style) {
        style(api, option)
        console.log('π¦  ζεθΏιδΈ­: prettier eslint')
    }
    if (option.commit) {
        commit(api)
        console.log('π¦  ζεθΏιδΈ­: husky, commitlint, conventional-changelog')
    }
}
