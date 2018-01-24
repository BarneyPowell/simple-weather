# Simple Weather Forecast display

This is built using create-react-app. To get started, clone the repo and ensure you've got ```yarn``` installed.

```
$   pwd
/Users/<username>/Code/simple-weather
$   cd ./client
$   yarn install
$   yarn start
```

This will start the webpack development server and launch a browser, with the project running at ```http://localhost:3000```.

## Notes

## To-do
-   Add icons for the weather type
-   Add empty hourly forecast elements to ensure each day returned has the same number of cells
    -   This should be calculated from the mode of the number of returned forecasts. This will ensure that if the forecasts is changed to hourly, rather than three-hourly, it'll automatically fix the display.