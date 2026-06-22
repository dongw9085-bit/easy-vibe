import zhCn from './zh-cn.js'
import en from './en.js'

const locales = { 'zh-cn': zhCn, 'zh-tw': zhCn, 'en-us': en, en: en }

const getLocale = (lang) => locales[lang] || locales['en']

export const terminalIntroLocale = { zh: zhCn, en: en, get: getLocale }
