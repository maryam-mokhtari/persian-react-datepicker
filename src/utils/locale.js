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
  BIRTHDAY: {
    FA: 'تولد',
    EN: '',
  }
}

String.prototype.Capitalize = function () { return this[0].toUpperCase() + this.substr(1).toLowerCase() }

const localeText = (language = 'FA') =>
  Object.keys(text).reduce(
    (newText, key) => ({ ...newText, [key]: text[key][language] || key.Capitalize() }), {}
  )

export default localeText