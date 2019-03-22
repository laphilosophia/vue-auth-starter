import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VeeValidate from 'vee-validate'
import messages from './messages'
import validationMessagesEN from 'vee-validate/dist/locale/en'
import validationMessagesTR from 'vee-validate/dist/locale/tr'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'tr',
  messages
})

Vue.use(VeeValidate, {
  i18nRootKey: 'validations',
  i18n,
  dictionary: {
    en: validationMessagesEN,
    tr: validationMessagesTR
  }
})

export default i18n
