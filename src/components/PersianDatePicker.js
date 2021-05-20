import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/date-picker.css';
import moment from 'moment-jalaali';
import months from '../utils/months';
import localeText from '../utils/locale';
import { getPersianNumber } from '../utils/number';
import themeColors from '../utils/theme'

const PersianDatePicker = ({
  onChange,
  value = moment(),
  maxYear = moment().jYear(),
  themeColor = "black",
}) => {
  const [day, setDay] = useState(value.jDate())
  const [month, setMonth] = useState(value.jMonth() + 1)
  const [year, setYear] = useState(value.jYear())
  // console.log(day, month, year);

  const dayElement = useRef()
  const monthElement = useRef()
  const yearElement = useRef()

  const optionHeight = 40
  const shownCount = 5

  useEffect(() => {

    dayElement.current.scrollTop = (day - 1) * optionHeight
    monthElement.current.scrollTop = (month - 1) * optionHeight
    yearElement.current.scrollTop = (maxYear - year) * optionHeight
  }, [])

  useEffect(() => {
    const date = moment([year, month, day].join('/'), 'jYYYY/jM/jD').format()
    console.log(year, month, day, date);
    typeof onChange === 'function' && onChange(new Date(date).getTime())

  }, [day, month, year, onChange])

  const leapYears = [0, 34, 8, 13, 17, 21, 25, 29, 33, 37, 41, 46, 50, 54, 58, 62, 66, 70, 75, 79, 83, 87, 91, 95, 99, 103, 107, 111, 115, 120, 124]
  const daysRange = month <= 6 ? 31 : month < 12 ? 30 : leapYears.includes(year - 1300) ? 30 : 29

  const getDateElement = e => {
    e.stopPropagation()
    return Math.round((e.target.scrollTop) / optionHeight) + 1
  }

  const scrollDay = e => setDay(getDateElement(e))
  const scrollMonth = e => setMonth(getDateElement(e))
  const scrollYear = e => setYear(maxYear - getDateElement(e) + 1)

  const selectStyle = {
    padding: `${2 * optionHeight}px 0`,
    height: optionHeight,
  }

  const getOptionStyle = value => value ?
    ({
      fontWeight: 'bold',
      color: themeColors[themeColor] || themeColor,
    }) : ({})

  return (
    <div className="date-picker">
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
              e.target.parentElement.scrollTop = index * optionHeight
            }}>
            {getPersianNumber(index + 1)}
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
              e.target.parentElement.scrollTop = index * optionHeight
            }}>
            {localeText[m]}
          </div>
        )}
      </div>
      <div
        ref={yearElement}
        className="select"
        style={selectStyle}
        onScroll={e => scrollYear(e)}
      >
        {Array(maxYear - 1300).fill().map((y, index) =>
          <div
            key={index}
            style={getOptionStyle(year === maxYear - index)}
            className="option"
            onClick={e => {
              setYear(maxYear - index)
              e.target.parentElement.scrollTop = index * optionHeight
            }}>
            {getPersianNumber(maxYear - index)}
          </div>
        )
        }
      </div>
    </div>
  )
}

export default PersianDatePicker