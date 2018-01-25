import React, { Component } from 'react';

import DailyWeatherContainer from './containers/DailyWeatherContainer'

import { WeatherApiProvider } from './providers/WeatherApiProvider';

class App extends Component {



  render() {

    return (
      <WeatherApiProvider>
        <div className="App">
          <DailyWeatherContainer className="main-weather" />
        </div>
      </WeatherApiProvider>
    );
  }
}

export default App;
