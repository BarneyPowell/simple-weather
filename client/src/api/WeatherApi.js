import Moment from 'moment';
//import client from './clients/WeatherApiTestClient';
import apiClient from './clients/WeatherApiClient';
import csvClient from './clients/WeatherApiCsvClient';

// The forecast needs to be mapped to a different shape.
// This is largely to allow the underlying API to change
// the contract shape without affecting the UI.
//
// The data returned from the service is continuous, but
// we want it discreet, quantized by day.
const parseForecast = (data) => {
    
    
    const days = [{
        day: Moment.unix(data.list[0].dt).format(),
        hours: []
    }];

    
    for(let x = 0; x < data.list.length;x++) 
    {
        const forecast = data.list[x];
        const date = Moment.unix(forecast.dt);
        
        let currentDay = days[days.length-1];

        let isNewDay = !Moment(currentDay.day).isSame(date, 'day');

        if(isNewDay) {
            currentDay = {
                day: date.format(),
                hours: []
            };
        }

        currentDay.hours.push({
            time: date.format(),
            temp: forecast.main.temp,
            weather: forecast.weather[0].main
        });

        if(isNewDay) {
            days.push(currentDay);
        } else {
            days[days.length-1] = currentDay;
        }

    };
    return days;
};

const parseLocation = (data) => {
    return {
        name: data.city.name,
        country: data.city.country,
        coord: data.city.coord
    }
};


export function fetchForecast (location, options) {


    const client = options && options.shouldUseTestData
        ? csvClient
        : apiClient;

    return client
        .fetchForecast(location)
        .then(data => {
            if(data 
                && data.hasOwnProperty('list')
                && data.hasOwnProperty('city'))
                {
                return {
                    forecasts: parseForecast(data),
                    location: parseLocation(data)
                };          
            } else {
                return {
                    forecasts: [],
                    location: null
                }
            }  
        });
}
