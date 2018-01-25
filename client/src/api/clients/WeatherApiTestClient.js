import testData from './data/weather.json';
const apikey = '049db2decc244c73f0a15ed9887b1ee9'; // Could load through env variable

const fetchForecast = (location) => {

    return new Promise((resolve) => {
        resolve(testData);
    });
}
export default {
    fetchForecast
}