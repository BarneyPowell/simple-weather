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
There are no built-in components to HTML that would allow this kind of view - it's quite specific to a mobile framework such as Swift or Android.  As a result, we take advantage of the ability for browsers to hide the scrollbars nowadays on content that overflows. 

The thought process behind the UI went as follows:

We need a UI to display weather data for the next 5 days. This needs to be a mobile-first solution. This data naturally falls into a tabular structure, with days as rows, and hourly (or three-hourly) forecasts as columns.

However, it isn't practical to display all this content on a small screen. This means that a user will be scrolling to find the information that they require.  If we to render the information as a pure table, with no fixed columns, then the UI action would force a user, who is potentially scanning through to find the first instance of a particular weather type, to scroll to the right, then back to the left and down, repeating for every row.

This is because while the data is predisposed to a tabular format, the user might only rarely be comparing two identical times of different days. They are more likely to be scanning for a spike in temperature, or a break in cloud-cover / rain, or for a specific time.

By allowing each individual row to scroll independently, there is only one lateral scroll action per row, rather than back and forth.

The two caveats to this approach are that it becomes necessary to place the time of day (hour) into the weather cell, as it isn't possible to scroll a time 'header' row with individual rows without adding additional complexity (for example, to 'select' a row to give the component the context it needs).  The second caveat is that it makes it more difficult to compare the same time across different days.

## To-do
-   Add icons for the weather type
-   Add empty hourly forecast elements to ensure each day returned has the same number of cells
    -   This should be calculated from the mode of the number of returned forecasts. This will ensure that if the forecasts is changed to hourly, rather than three-hourly, it'll automatically fix the display.
-   Improve location detection
    -   Use geolocation within device
    -   Use location lookup service for 'autocomplete' or suggestion list
    -   Handle city not found with better messaging
-   Offline device detection
-   Improve UI on scrollable temperatures to indicate scrollability / further results
-   Add tests to ensure event handlers are found
-   Export the parser from the WeatherApi to make it testable
    -   and add tests