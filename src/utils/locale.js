const language = 'FA'

const text = {
  FARVARDIN: {
    FA: 'فروردین', 
    EN: '',
  },
  ORDIBEHESHT:{
    FA: 'اردیبهشت',
    EN: '',
  }
}

const localeText = 
  Object.keys(text).reduce(
    (newText, key) => ({...newText, [key]: text[key][language]}), {}
  )

export default localeText