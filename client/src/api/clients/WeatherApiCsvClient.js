import testDataUrl from './data/weather.csv';

const fetchForecast = (location) => {

    return fetch(testDataUrl)
        .then((result) => {
            return result.text();
        })
        .then((data) => {

            const listArray = data.replace( /\n/g, '##' ).split('##');
            const list = [];

            for(let x = 0; x < listArray.length; x++) {
                const row = listArray[x].split(',');
                list.push({
                    dt: row[0],
                    main: {
                        temp: parseFloat(row[1])
                    },
                    weather: [
                        {
                            main: row[2]
                        }
                    ]
                })
            }
            


            return {
                list,
                city: {
                    name: 'Test Data',
                    country: 'XX'
                }
            };
        });
}
export default {
    fetchForecast
}