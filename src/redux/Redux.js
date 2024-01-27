


const initialTheme = localStorage.getItem('theme') === 'true'; // load theme from local storage

const initialState = {
  theme: initialTheme,
  bgColor: initialTheme ? '#243238' : '#fff',
  color: {
    h2: initialTheme ? '#FF7F3F' : '#FF7F3F',
    text: !initialTheme ? '#243238' : ' whitesmoke'
  },
  cardColor: initialTheme ? '#243238' : '#fff'
};

export default function Redux(state = initialState, action) {
  switch (action.type) {
    case 'theme':
      const newTheme = !state.theme;
      localStorage.setItem('theme', newTheme); // save new theme to local storage
      return {
        ...state,
        bgColor: newTheme ? '#243238' : '#fff',
        theme: newTheme,
        color: {
          h2: newTheme ? '#FF7F3F' : '#FF7F3F',
          text: !newTheme ? '#243238' : ' whitesmoke'
        },
        cardColor: newTheme ? '#243238' : '#fff'
      };
    default:
      return state;
  }
}


/******************* documentation:  ************************
 * const initialState = {

This declares a constant variable initialState and assigns an object to it.

theme :localStorage.getItem('theme') === 'true',

This initializes the theme property of the initialState object with a boolean value based on whether the localStorage value for 'theme' is equal to the string value 'true'.

bgColor : "",

This initializes the bgColor property of the initialState object with an empty string value.

color : {h2:'',text:''},

This initializes the color property of the initialState object with an object that has two properties h2 and text, both of which are initialized to empty string values.

cardColor : ""

This initializes the cardColor property of the initialState object with an empty string value.

}

This closes the initialState object.

export default function Redux(state=initialState, action) {

This exports a function as the default export of the module. This function takes two arguments: state, which is assigned a default value of the initialState object, and action, which is the Redux action that is dispatched to update the state.

initialState.bgColor = initialState.theme?'#243238':"#fff"

This updates the bgColor property of the initialState object with either the string '#243238' or '#fff' based on the value of the theme property.

state.color.h2 = !state.theme?"#FF7F3F":"#FF7F3F"

This updates the h2 property of the color property of the state object with either the string '#FF7F3F' or '#FF7F3F' based on the inverse of the value of the theme property.

state.color.text = !state.theme?"#243238":"#fff"

This updates the text property of the color property of the state object with either the string '#243238' or '#fff' based on the inverse of the value of the theme property.

switch (action.type) {

This opens a switch statement that checks the type property of the action argument to determine what action to take.

case 'theme':

This is the first case of the switch statement, and it matches when the type property of the action argument is 'theme'.

return {

This is the return statement of the case block. It returns a new state object with updated properties based on the previous state and the dispatched action.

...state,

This is an object spread operator that copies all the properties of the state object into a new object.

bgColor: state.theme ? '#fff' : '#243238',

This updates the bgColor property of the new state object with either the string '#fff' or '#243238' based on the value of the theme property of the previous state.

theme: !state.theme,

This updates the theme property of the new state object to the inverse of the theme property of the previous state.

color: {

This initializes a new object for the color property of the new state object.
const newTheme = !theme creates a new variable newTheme and assigns the opposite value of the theme variable to it. So if theme is true, newTheme will be false, and vice versa.

localStorage.setItem('theme', newTheme) stores the new theme value in the browser's localStorage. The first argument is the key name to store the value under, and the second argument is the actual value to store.

By doing this, whenever the user toggles the theme, the new theme value will be stored in localStorage. And when the user refreshes the page, the theme value will be initialized from the stored value in localStorage, instead of the default value in the Redux state.
 
 * */ 