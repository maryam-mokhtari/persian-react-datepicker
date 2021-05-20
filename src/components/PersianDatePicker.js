import React, { useEffect, useState } from 'react';
import '../assets/css/date-picker.css';
import moment from 'moment-jalaali';
import months from '../utils/months';
import localeText from '../utils/locale';
import { getPersianNumber } from '../utils/number';


const PersianDatePicker = ({
  onChange,
  value = moment(),
  maxYear = moment().jYear()
}) => {
  const [day, setDay] = useState(value.jDate())
  const [month, setMonth] = useState(value.jMonth() + 1)
  const [year, setYear] = useState(value.jYear())
  // console.log(day, month, year);

  const optionHeight = 40
  const shownCount = 5

  useEffect(() => {
    const date = moment([year, month, day].join('/'), 'jYYYY/jM/jD').format()
    console.log(date);
    typeof onChange === 'function' && onChange(new Date(date).getTime())
  },[day,month,year,onChange])

  const leapYears = [0, 34, 8, 13, 17, 21, 25, 29, 33, 37, 41, 46, 50, 54, 58, 62, 66, 70, 75, 79, 83, 87, 91, 95, 99, 103, 107, 111, 115, 120, 124]
  const daysRange = month <= 6 ? 31 : month < 12 ? 30 : year - 1300 in leapYears ? 30 : 29

  const getDateElement = e => {
    e.stopPropagation()
    const isFirst = e.target.scrollTop === 0
    const isLast = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop === 0

    const innerMargin = shownCount * optionHeight - e.target.clientHeight

    return (
      Math.round((e.target.scrollTop - innerMargin) / optionHeight) +
      Math.floor(shownCount / 2) + Number(isLast) - Number(isFirst)
    )
  }

  const scrollDay = e => { }// setDay(getDateElement(e))
  const scrollMonth = e => { }//setMonth(getDateElement(e))
  const scrollYear = e => { }//setYear(maxYear - getDateElement(e) + 1)

  const selectStyle = {
    padding: `${2 * optionHeight}px 0`,
    height: optionHeight,
  }

  return (
    <div className="date-picker">
      <div
        className="select"
        style={selectStyle}
        onScroll={e => scrollDay(e)}
      >
        {Array(daysRange).fill().map((d, index) =>
          <div
            key={index}
            className={`option ${day === index + 1 ? 'selected' : ''}`}
            onClick={e => {
              setDay(index + 1)
              // e.target.parentElement.scrollTop = index * optionHeight
            }}>
            {getPersianNumber(index + 1)}
          </div>
        )}
      </div>
      <div
        className="select"
        style={selectStyle}
        onScroll={e => scrollMonth(e)}
      >
        {months.map((m, index) =>
          <div
            key={index}
            className={`option ${month === index + 1 ? 'selected' : ''}`}
            onClick={e => {
              setMonth(index + 1)
              // e.target.parentElement.scrollTop = index * optionHeight
            }}>
            {localeText[m]}
          </div>
        )}
      </div>
      <div
        className="select"
        style={selectStyle}
        onScroll={e => scrollYear(e)}
      >
        {Array(maxYear - 1300).fill().map((y, index) =>
          <div
            key={index}
            className={`option ${year === maxYear - index ? 'selected' : ''}`}
            onClick={e => {
              setYear(maxYear - index)
              // e.target.parentElement.scrollTop = (index+1) * optionHeight
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