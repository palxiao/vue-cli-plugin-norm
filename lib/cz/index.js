'format cjs';
const engine = require('./engine');

module.exports = engine({
  types: {
    feat: {
      description: ' ð æ·»å æ°ç¹æ§',
      title: 'ð æ°åè½'
    },
    fix: {
      description: 'ð ä¿®å¤äºbugs ',
      title: 'ð Bug ä¿®å¤'
    },
    style: {
      description: '  ð¨ UI/æ ·å¼æ¹å¨',
      title: 'ð¨ æ ·å¼'
    },
    docs: {
      description: ' ð ææ¡£è¡¥åæåæ´',
      title: 'ð ææ¡£'
    },
    test: {
      description: ' ð§ æµè¯ç¨ä¾/æµè¯ä»£ç ',
      title: 'ð§ æµè¯'
    },
    code: {
      description: ' ð¨ ä»£ç ä¼å/éæ/ä»£ç åæ»',
      title: 'ð¨ ä»£ç éæ'
    },
    // chore: {
    //   description: 'ð   å½±åæå»ºç³»ç»æå¤é¨ä¾èµçæ´æ¹ï¼ä¾å¦ï¼gulpï¼npmï¼webpackï¼',
    //   title: 'ð  æå»º'
    // },
    // ci: {
    //   description: 'ð¦  æç»­éæçéç½®æä»¶åèæ¬çæ¹åï¼ä¾å¦: Travis, Circleï¼',
    //   title: 'ð¦ æç»­éæ'
    // },
    // revert: {
    //   description: 'ð  æ¤éä¸ä¸æ¬¡çæäº¤',
    //   title: 'ð æ¤é'
    // }
  },
  scopes: {
    custom: {
      description: '  æå¨è¾å¥',
      title: 'custom'
    },
    component: {
      description: '     å½±åç»ä»¶ä½¿ç¨',
      title: 'component'
    },
    data: {
      description: 'æ°æ®åå',
      title: 'data'
    },
  }
});
