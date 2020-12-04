const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=db507e0606dc049b21f06df8f91e9e50&query='+ latitude + ',' + longitude +'&units=f'

    request({ url, json: true }, (error, response) => {
        const { current, error: responseError } = response.body
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(responseError) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, current.weather_descriptions[0] + '. It is currently '+ current.temperature + ' degrees out. It feels like '+ response.body.current.feelslike + " degrees out");
        }
    })
}

module.exports = forecast