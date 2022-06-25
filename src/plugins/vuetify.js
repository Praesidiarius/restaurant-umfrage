import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VueI18n from 'vue-i18n'

Vue.use(Vuetify);
Vue.use(VueI18n);

function loadLocaleMessages () {
  const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'de',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'de',
  messages: loadLocaleMessages()
})

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
})