import en from "./locales/en.json"
import lv from "./locales/lv.json"

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    lv
  }
}))
