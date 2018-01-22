import React, { Component } from 'react';

import DailyWeather from './components/DailyWeather'
import generateTestWeather from './lib/generateTestWeather';

class App extends Component {
  render() {

    const weather = generateTestWeather();


    return (
      <div className="App">

        <DailyWeather className='main-weather' location={weather.location} forecast={weather.forecast} />

      </div>
    );
  }
}

export default App;
