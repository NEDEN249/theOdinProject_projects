const { get } = require("http")

function getWeather(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Sunny')
        }, 100)
    })
}

function getWeatherIcon(weather) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch(weather){
                case 'Sunny':
                    resolve('☀️')
                    break
                case 'Cloudy':
                    resolve('☁️')
                    break
                case 'Rainy':
                    resolve('🌧')
                    break
                default:
                    reject('Unknown Weather Icon Return Value')
            }
        }, 100)
    })
}

function onSuccess(data) {
    console.log(`Success ${data}`)
}

function onError(data) {
    console.log(`Error ${data}`)
}

getWeather() //the resolve value of getWeather (resolve('Sunny)) becomes the parameter given to the chained .then() method -> .then(getWeatherIcon) -> getWeatherIcon('Sunny') <- essentially is what we have (although not immediately intuitive this is what is happening)
    .then(getWeatherIcon) 
    //.then(onSuccess, onError) //the same occurs, above .then resolve becomes the parameter for onSuccess/onError <- resolve leads to onSuccess, reject leads to onError (LHS IS RESOLVE, RHS IS RESOLVE)
    .then(onSuccess)
    .catch(onError) //basically a then block that takes in one parameter and that one parameter is called when the creator side has a reject