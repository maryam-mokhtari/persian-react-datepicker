import { useState } from "react";
import PersianDatePicker from "./components/PersianDatePicker";
import localeText from "./utils/locale";
import moment from 'moment-jalaali';
import './assets/css/birthday.css'
import themeColors from "./utils/theme";

const App = () => {
  const [date, setDate] = useState(moment('1387-7-7', 'jYYYY-jM-jD'))
  const color = "cyan"
  return <>
    <div 
    className="birthday"
    style={{
      borderColor: themeColors[color],
      background: themeColors[color].replace('rgb','rgba').replace(')',',0.1)')
    }}
    >
      <label> {localeText().BIRTHDAY}: </label>
      <label style={{
        color: themeColors[color],
      }}>
        {date.format('jYYYY/jM/jD')}
      </label>
    </div>
    <PersianDatePicker
      value={date}
      onChange={newDate => setDate(newDate)}
      maxYear={1401}
      themeColor={color}
    />
  </>
}

export default App