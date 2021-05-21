import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import PersianDatePicker from './components/PersianDatePicker';
import Date from './example/Date';

ReactDOM.render(
  <React.StrictMode>
    <Date />
  </React.StrictMode>,
  document.getElementById('root')
);

export default PersianDatePicker