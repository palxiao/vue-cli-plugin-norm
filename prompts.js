module.exports = [
    {
        name: 'commit',
        type: 'confirm',
        message: '添加commit校验?',
        default: true
    }, {
        name: 'style',
        type: 'confirm',
        message: '添加代码美化及校验?',
        default: true
    }, {
        type: 'list',
        name: 'version',
        message: '请选择Vue版本:',
        choices: [{ name: 'Vue 2.x', value: '3' }, { name: 'Vue 3.x', value: '^4.1.0' }],
        when(answers) {
            return answers.style;
        }
    }, {
        type: 'confirm',
        name: 'ts',
        message: '是否添加TypeScript支持:',
        when(answers) {
            return answers.style;
        },
        default: false
    }
]