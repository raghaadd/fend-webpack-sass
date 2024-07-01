import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForName);

alert("I EXIST")
const apiKey = 'faaddc053cae8bfefb6dc17d4d72cff8&units=imperial';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

/* Function to GET Web API Data */
const getWeather = async (baseURL, zip, apiKey) => {
    const res = await fetch(`${baseURL}${zip},us&appid=${apiKey}`);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

// Example usage
const zip = '90001'; 
getWeather(baseURL, zip, apiKey).then(data => {
    // Process the weather data here
    console.log("Weather Data:", data);
});


export {
    checkForName,
    handleSubmit
}
