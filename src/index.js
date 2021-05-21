import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import PersianDatePicker from './components/PersianDatePicker';

ReactDOM.render(
  <React.StrictMode>
    <PersianDatePicker />
  </React.StrictMode>,
  document.getElementById('root')
);

export default PersianDatePicker