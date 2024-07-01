import { getWeather } from './getWeather';
// Define your API key and base URL
const apiKey = 'faaddc053cae8bfefb6dc17d4d72cff8&units=imperial';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

function onBlur() {
    console.log("Input field lost focus");
}

function handleSubmit(event) {
    event.preventDefault();

    // Check what text was put into the form field
    let formText = document.getElementById('name').value;

    // Validate the input if necessary
    if (!formText) {
        alert("Please enter a ZIP code");
        return;
    }

    console.log("::: Form Submitted :::");

    // Fetch the weather data
    getWeather(baseURL, formText, apiKey)
        .then(data => {
            // Display the weather data in the results div
            document.getElementById('results').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            console.log("error", error);
        });

    // Fetch from the local server endpoint (if still needed)
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function(data) {
            document.getElementById('results').innerHTML += `<p>${data.message}</p>`;
        });
}

export { handleSubmit };
export { onBlur };