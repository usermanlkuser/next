const searchString = (query) =>
    `http://api.weatherapi.com/v1/search.json?key=48c5b08c490f422188655412211910&q=${query}`;
    // `http://api.weatherapi.com/v1/search.json?key=48c5b08c490f422188655412211910&q=${query}&country_code=${lang}`;

const weatherString = (query) =>
`http://api.weatherapi.com/v1/current.json?key=48c5b08c490f422188655412211910&q=${query}&aqi=no`

export async function getWeatherData({query,lang}){
    let data = await fetch(searchString(query)).then((res) => res.json())
    return data;
}

// get current weather by city name
export async function getWeatherByCity({query,lang}){
    let data = await fetch(weatherString(query)).then((res) => res.json())
    return data;
}