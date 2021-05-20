const numbers = '۰۱۲۳۴۵۶۷۸۹'

export const getPersianNumber = number => 
Array.from(number.toString()).map(
  char => isNaN(Number(char)) ? 
  char : 
  Array.from(numbers)[Number(char)]
).join('')

export const getNumber = (number, language) => {
  return language.toLowerCase() === 'fa' ? getPersianNumber(number) : number
}