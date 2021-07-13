module.exports = [
    {
        name: 'commit',
        type: 'confirm',
        message: '添加commit校验 (commit verify) ?',
        default: true
    }, {
        name: 'style',
        type: 'confirm',
        message: '添加代码美化及校验 (code style verify) ?',
        default: true
    },{
        type: 'list',
        name: 'framework',
        message: '请选择你的框架 (choose framework) :',
        choices: [{ name: 'Vue', value: 'vue' }, { name: 'React', value: 'react' }],
        when(answers) {
            return answers.style;
        }
    }, {
        type: 'list',
        name: 'version',
        message: '请选择Vue版本:',
        choices: [{ name: 'Vue 2.x', value: '3' }, { name: 'Vue 3.x', value: '^4.1.0' }],
        when(answers) {
            return answers.framework === 'vue';
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