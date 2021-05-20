import { useState, useEffect, useRef } from 'react';
import '../assets/css/date-picker.css';
import moment from 'moment-jalaali';
import months from '../utils/months';
import localeText from '../utils/locale';
import { getNumber } from '../utils/number';
import themeColors from '../utils/theme';

const PersianDatePicker = ({
  value = moment(),
  onChange,
  maxYear = moment().jYear(),
  minYear = 1301,
  themeColor = "black",
  language = 'fa',
}) => {
  const [day, setDay] = useState(value.jDate())
  const [month, setMonth] = useState(value.jMonth() + 1)
  const [year, setYear] = useState(value.jYear())

  const dayElement = useRef()
  const monthElement = useRef()
  const yearElement = useRef()

  const optionHeight = 40
  const count = 5
  const margin = 10

  useEffect(() => {
    const date = moment([year, month, day].join('/'), 'jYYYY/jM/jD')
    if (typeof onChange === 'function' && date.format('jYYYY/jM/jD') !== value.format('jYYYY/jM/jD')) {
      onChange(date)
    }

    dayElement.current.scrollTop = (day - 1) * optionHeight - margin
    monthElement.current.scrollTop = (month - 1) * optionHeight - margin
    yearElement.current.scrollTop = (year - minYear) * optionHeight - margin

  }, [day, month, year, minYear, value, onChange])

  const daysRange = month <= 6 ? 31 : month < 12 ? 30 : moment.jIsLeapYear(year) ? 30 : 29

  const getDateElement = e => {
    e.stopPropagation()
    return Math.round((e.target.scrollTop + margin) / optionHeight)
  }

  const scrollDay = e => setDay(getDateElement(e) + 1)
  const scrollMonth = e => setMonth(getDateElement(e) + 1)
  const scrollYear = e => setYear(getDateElement(e) + minYear)

  const selectStyle = {
    padding: `${2 * optionHeight}px 0`,
    height: optionHeight * count - margin,
  }

  const getOptionStyle = value => value ?
    ({
      fontWeight: 'bold',
      color: themeColors[themeColor] || themeColor,
      height: optionHeight
    }) : ({
      height: optionHeight
    })

  return (
    <div
      className="date-picker"
      style={{ fontFamily: language.toLowerCase() === 'fa' ? 'yekan' : 'arial' }}
    >
      <div
        ref={dayElement}
        className="select"
        style={selectStyle}
        onScroll={e => scrollDay(e)}
      >
        {Array(daysRange).fill().map((d, index) =>
          <div
            key={index}
            style={getOptionStyle(day === index + 1)}
            className="option"
            onClick={e => {
              setDay(index + 1)
              e.target.parentElement.scrollTop = index * optionHeight - margin
            }}>
            {getNumber(index + 1, language)}
          </div>
        )}
      </div>
      <div
        ref={monthElement}
        className="select"
        style={selectStyle}
        onScroll={e => scrollMonth(e)}
      >
        {months.map((m, index) =>
          <div
            key={index}
            style={getOptionStyle(month === index + 1)}
            className="option"
            onClick={e => {
              setMonth(index + 1)
              e.target.parentElement.scrollTop = index * optionHeight - margin
            }}>
            {localeText(language.toUpperCase())[m]}
          </div>
        )}
      </div>
      <div
        ref={yearElement}
        className="select"
        style={selectStyle}
        onScroll={e => scrollYear(e)}
      >
        {Array(maxYear - minYear + 1).fill().map((y, index) =>
          <div
            key={index}
            style={getOptionStyle(year === index + minYear)}
            className="option"
            onClick={e => {
              setYear(index + minYear)
              e.target.parentElement.scrollTop = index * optionHeight - margin
            }}>
            {getNumber(index + minYear, language)}
          </div>
        )
        }
      </div>
    </div>
  )
}

export default PersianDatePicker