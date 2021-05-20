import React, { useState } from 'react';
import '../assets/css/date-picker.css';
import moment from 'jalali-moment';
import months from '../utils/months';
import localeText from '../utils/locale';
import { getPersianNumber } from '../utils/number';

const PersianDatePicker = ({ onSubmit, maxBirthYear = 1390 }) => {
  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()


  const submitDate = () => {
    const date = moment.from(
      [year, month, day].join('/'),
      'fa',
      'YYYY/M/D'
    ).locale('en').format('YYYY/M/D')
    onSubmit(new Date(date).getTime()) // milliseconds
  }

  const daysRange = month <= 6 ? 31 : 30

  const scrollDay = e => {
    e.stopPropagation()
  }

  const scrollMonth = e => {
    e.stopPropagation()
  }

  const scrollYear = e => {
    e.stopPropagation()
  }

  return (
    <div className="date-picker">
      <div className="select" onScroll={e => scrollDay(e)}>
        {Array(daysRange).fill().map((d, index) =>
          <div className="option"
            key={index}
            className={`option ${day === index + 1 ? 'selected' : ''}`}
            onClick={e => {
              setDay(index + 1)
            }}>
            {getPersianNumber(index + 1)}
          </div>
        )}
      </div>
      <div className="select" onScroll={e => scrollMonth(e)}>
        {months.map((m, index) =>
          <div
            key={index}
            className={`option ${month === index + 1 ? 'selected' : ''}`}
            onClick={e => {
              setMonth(index + 1)
            }}>
            {localeText[m]}
          </div>
        )}
      </div>
      <div className="select" onScroll={e => scrollYear(e)}>
        {Array(maxBirthYear - 1300).fill().map((y, index) =>
          <div
            key={index}
            className={`option ${year === maxBirthYear - index ? 'selected' : ''}`}
            onClick={e => {
              setYear(maxBirthYear - index)
            }}>
            {getPersianNumber(maxBirthYear - index)}
          </div>
        )
        }
      </div>
    </div>
  )
}

export default PersianDatePicker