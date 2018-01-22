import generateTestWeather from './generateTestWeather';

it('should return an object with a location and 5 days daily weather', () => {
    const weather = generateTestWeather();

    expect(weather.location).toBeDefined();
    expect(weather.forecast).toBeDefined();
    expect(weather.forecast).toHaveLength(5);

    const firstDay = weather.forecast[0];

    expect(firstDay.hours).toBeDefined();
    expect(firstDay.hours).toHaveLength(24);

});
