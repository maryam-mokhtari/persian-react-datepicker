# Persian React Date Picker

This project is mainly developed to simulate IOS Date Picker for Progressive Web Applications with Persian Jalaali-Shamsi Date.

## Demo
![](https://raw.githubusercontent.com/mayyamak/persian-react-date-picker/master/images/persian-react-date-picker-demo.gif)
## Usage
Consider `example/Date.js` that is a simple usage of `PersianDatePicker`. There are two main properties:
- **value**: `value` contains the default date value and can be updated.
- **onChange**: `onChange` is for updating the `value`.
This is a simple code segment representing the best usage:
```React
  <PersianDatePicker
    value={date}
    onChange={newDate => setDate(newDate)}
  />
```
where `date` and `setDate` are pairs in a `setState`.

The other properties can be added in case needed. 
- **maxYear**: `maxYear` indicates the maximum year shown in PersianDatePicker.
- **minYear**: `minYear` indicates the minimum year shown in PersianDatePicker.
- **language**: `language` is the multiple language usability which is provided in PersianDatePicker.
- **themeColor**: `themeColor` is the value of color that helps the PersianDatePicker to be used in different theme colors. 
There are eight provided theme colors:
  - red
  - green
  - blue
  - cyan
  - gold
  - purple
  - pink
  - black
  
 There are some prepared themes and designs for the colors in the list. Furthurmore any new colors can be used by its own color code or name.

The following code segment utilizes these complementary properties for a more fancy usage.
```React
  <PersianDatePicker
    value={date}
    onChange={newDate => setDate(newDate)}
    maxYear={1402}
    minYear={1350}
    themeColor="cyan"
    language='en'
  />
```

## Commands
In the project directory, you can use the following commands:

### `yarn`
Installs packages.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

It has Hot reload inherently and the page will reload if you make edits.\
It has utilized react linter and you will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

## License
&copy; Maryam Mokhtari [@mayyamak](https://github.com/mayyamak) 

Email: [maryam.mokhtari@gmail.com](mailto:maryam.mokhtari@gmail.com)

Licensed under MIT license.
