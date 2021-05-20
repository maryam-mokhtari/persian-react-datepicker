import { useState } from "react";
import PersianDatePicker from "./components/PersianDatePicker";
import localeText from "./utils/locale";
import moment from 'moment-jalaali';
import './assets/css/date-label.css'
import themeColors from "./utils/theme";

const App = () => {
  const [date, setDate] = useState(moment('1361-7-7', 'jYYYY-jM-jD'))
  const color = "black"
  return <>
    <div 
    className="date-label"
    style={{
      borderColor: themeColors[color],
      background: themeColors[color].replace('rgb','rgba').replace(')',',0.1)')
    }}
    >
      <label> {localeText().DATE}: </label>
      <label style={{
        color: themeColors[color],
        width: 200,
        textAlign: 'left',
      }}>
        {date.format('jYYYY/jM/jD')}
      </label>
    </div>
    <PersianDatePicker
      value={date}
      onChange={newDate => setDate(newDate)}
    />
  </>
}

export default App