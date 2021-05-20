const text = {
  FARVARDIN: {
    FA: 'فروردین',
    EN: '',
  },
  ORDIBEHESHT: {
    FA: 'اردیبهشت',
    EN: '',
  },
  KHORDAD: {
    FA: 'خرداد',
    EN: '',
  },
  TIR: {
    FA: 'تیر',
    EN: '',
  },
  MORDAD: {
    FA: 'مرداد',
    EN: '',
  },
  SHAHRIVAR: {
    FA: 'شهریور',
    EN: '',
  },
  MEHR: {
    FA: 'مهر',
    EN: '',
  },
  ABAN: {
    FA: 'آبان',
    EN: '',
  },
  AZAR: {
    FA: 'آذر',
    EN: '',
  },
  DEY: {
    FA: 'دی',
    EN: '',
  },
  BAHMAN: {
    FA: 'بهمن',
    EN: '',
  },
  ESFAND: {
    FA: 'اسفند',
    EN: '',
  },
  DATE: {
    FA: 'تاریخ',
    EN: '',
  }
}

const Capitalize =  textString => textString[0].toUpperCase() + textString.substr(1).toLowerCase()

const localeText = (language = 'FA') =>
  Object.keys(text).reduce(
    (newText, key) => ({ ...newText, [key]: text[key][language] || Capitalize(key) }), {}
  )

export default localeText