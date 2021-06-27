'format cjs';

// const wrap = require('word-wrap');
const longest = require('longest');
const rightPad = require('right-pad');
const chalk = require('chalk');

const filter = array => array.filter(x => x)

// 获取选择列表
const getList = (obj) => {
  const objLeng = longest(Object.keys(obj)).length * 2 + 1;
  return Object.keys(obj).map(key => ({
    name: `${rightPad(`${key}:`, objLeng / 2, '  ')} ${obj[key].description}`,
    value: key
  }));
};

module.exports = function (options) {
  const typeList = getList(options.types);
  const scopesList = getList(options.scopes);
  return {
    prompter(cz, commit) {
      cz.prompt([
        {
          type: 'list',
          name: 'type',
          message: '本次提交的类型:',
          choices: typeList
        }, {
          type: 'list',
          name: 'scope',
          message: '本次提交的影响范围:',
          choices: scopesList
        },
        {
          type: 'string',
          name: 'scope',
          message: '请输入影响的范围或模块:',
          when(answers) {
            return answers.scope === 'custom';
          }
        },
        {
          type: 'input',
          name: 'subject',
          validate(str) {
            const charLen = 1
            if (str.length > charLen) {
              return true
            } else { console.log(chalk.yellow(`(必填)请输入描述`)) }
          },
          message: '写一个简短的变化描述:'
        }, {
          type: 'input',
          name: 'body',
          validate(str) {
            const charLen = 100
            if (str.length < charLen) {
              return true
            } else { console.log(chalk.yellow(`字符长度不超过${charLen}`)) }
          },
          message: '（非必填）提供更详细的变更描述:'
        },
        // {
        //   type: 'confirm',
        //   name: 'isBreaking',
        //   message: '是否存在不兼容变更?',
        //   default: false
        // }, {
        //   type: 'input',
        //   name: 'breaking',
        //   message: '列出所有的不兼容变更:\n',
        //   when(answers) {
        //     return answers.isBreaking;
        //   }
        // }, {
        //   type: 'confirm',
        //   name: 'isIssueAffected',
        //   message: '此次变更是否影响某些打开的 issue ?',
        //   default: false
        // }, {
        //   type: 'input',
        //   name: 'issues',
        //   message: '列出此次改动引用的所有 issues （如："fix #123", "Closes #123, #124"）:\n',
        //   when(answers) {
        //     return answers.isIssueAffected;
        //   }
        // }
      ]).then((answers) => {
        const scope = answers.scope ? `(${answers.scope.trim()})` : '';
        const head = (`${answers.type + scope}: ${answers.subject.trim()}`);
        const body = answers.body
        // Apply breaking change prefix, removing it if already present
        let breaking = answers.breaking ? answers.breaking.trim() : '';
        // 如果手动输入了 不兼容变更，则过滤掉
        breaking = breaking ? `不兼容变更: ${breaking.replace(/^不兼容变更: /, '')}` : '';
        // const issues = answers.issues ? wrap(answers.issues, wrapOptions) : '';
        const issues = ''
        const footer = filter([breaking, issues]).join('\n\n');

        commit(`${head}\n\n${body}\n\n${footer}`);
      });
    }
  };
};
