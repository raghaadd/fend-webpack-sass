// Define the getWeather function
const getWeather = async (baseURL, zip, apiKey) => {
    const res = await fetch(`${baseURL}${zip},us&appid=${apiKey}`);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

// Export the getWeather function
export { getWeather };
