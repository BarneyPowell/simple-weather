import generateTestWeather from './generateTestWeather';

it('should return an object with a location and 5 days daily weather', () => {
    const weather = generateTestWeather();

    expect(weather.location).toBeDefined();
    expect(weather.forecasts).toBeDefined();
    expect(weather.forecasts).toHaveLength(5);

    const firstDay = weather.forecasts[0];

    expect(firstDay.hours).toBeDefined();
    expect(firstDay.hours).toHaveLength(24);

});
