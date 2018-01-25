//
// https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=049db2decc244c73f0a15ed9887b1ee9

const apikey = '049db2decc244c73f0a15ed9887b1ee9'; // Could load through env variable

const fetchForecast = (location, options) => {

    if(typeof location === 'string') {

    }

    

    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apikey}`)
        .then(results => {
            if(results.status === 200) return results.json();

            //console.log('resilts', results);
            //return results.json();
            return null;
        }).catch(err => {
            console.error(err);
        });
}

export default {
    fetchForecast
}