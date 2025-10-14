Lab03 README.md
---------------
## Overview
Overall, I found this lab challenging but ultimately rewarding. This was the first time I really played around with pulling data/information from an API,
and I foresee doing much more of this in the future. At first, I was extremely worried about how I would work on the lab without surpassing the API call
limits for the three APIs I used (OpenWeatherMap, Colormind, and VisualCrossing). Whereas Colormind has no apparent daily limit for API calls, OpenWeatherMap
and VisualCrossing do seem to have their own respective limits on the free tier. Fortunately, I figured out that I can call each of these APIs once in the browser,
save the .json file that gets returned, and then prototype/test with these .json files instead of calling the APIs over and over again. This worked suprisingly well,
and gave me peace-of-mind while working on this lab.

## APIs
In addition to OpenWeatherMap, I used Colormind and VisualCrossing for some additional flare. Colormind is used to generate the colors for the background of the site (random color palette generator), and VisualCrossing is used to retrieve the current moon phase, a detail that is left out of the OpenWeatherMap data.
When it came to parsing the data, I tried to encorporate helpful visuals for certain datapoints (weather, wind direction, and moon phase).

## Resources / Citations:
https://stackoverflow.com/questions/48474970/saving-fetched-json-into-variable \
https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb \
https://openweathermap.org/current \
https://openweathermap.org/weather-conditions \
https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/ \
https://www.visualcrossing.com/weather-query-builder/ \
https://www.visualcrossing.com/resources/documentation/weather-api/how-to-include-sunrise-sunset-and-moon-phase-data-into-your-api-requests/#h-moon-phase-number \
http://colormind.io/api-access/ \
https://www.geeksforgeeks.org/javascript/string-strip-in-javascript/# \
https://www.geeksforgeeks.org/javascript/javascript-program-to-capitalize-the-first-letter-of-every-sentence-in-a-string/ \
https://www.w3schools.com/js/js_functions.asp \
https://www.w3schools.com/js/js_type_conversion.asp \
https://www.youtube.com/watch?v=37vxWr0WgQk \
https://www.color4bg.com/en/generator/pastel-gradient-background?
