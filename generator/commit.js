/*
 * @Author: ShawnPhang
 * @Date: 2021-06-26 11:04:49
 * @Description: 
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-17 19:47:30
 * @site: book.palxp.com / blog.palxp.com
 */
module.exports = (api) => {
    api.render('./commit_template');
    api.extendPackage({
        devDependencies: {
            "commitizen": "^4.0.3",
            "commitlint": "^8.2.0",
            "conventional-changelog-cli": "^2.0.28",
            "husky": "^3.0.9",
            "right-pad": "^1.0.1"
        },
        scripts: {
            "clog": "conventional-changelog --config ./node_modules/vue-cli-plugin-norm/lib/log -i CHANGELOG.md -s -r 0 && commit-log",
            "c": "git add . && git-cz",
            "commit": "git add . && git-cz"
        },
        "husky": {
            "hooks": {
                "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
            }
        },
        "config": {
            "commitizen": {
                "path": "./node_modules/vue-cli-plugin-norm/lib/cz"
            }
        }
    })
}