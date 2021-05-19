const language = 'FA'

const locale = {
  SUBMIT: {
    FA: 'ثبت', 
    EN: '',
  }
}

const localeText = 
Object.keys(locale).reduce((newLocale, key) => 
  ({...newLocale, [key]: locale[key][language]}), 
  {}
)

export default localeText