function create_current_weather_object(temperature, uv, windSp, windDir, condition, feelslike, humidity, date, icon){
    return {
        temperature: temperature,
        uv: uv,
        windSp: windSp,
        windDir: windDir,
        condition: condition,
        feelslike: feelslike,
        humidity: humidity,
        date: date,
        icon: icon
    }
}

function create_forecast_weather_object(minTemp, maxTemp, rain, humidity){
    return {
        minTemp: minTemp,
        maxTemp: maxTemp,
        rain: rain,
        humidity: humidity
    }
}

function createHourlyWeatherObject(rain, temperature, time){
    return {
        rain: rain,
        temperature: temperature,
        time: time
    }
}

export { create_current_weather_object, create_forecast_weather_object, createHourlyWeatherObject}