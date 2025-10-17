Lab04 README.md
---------------
# ChatGPT Prompts (Coding the Webapp)

### Prompt #1
Create a simple weather webapp (using basic HTML/CSS) that uses the OpenWeatherMap API. 
Please use AJAX to retrieve JSON data from OpenWeatherMap. 

The weather app will be EXCLUSIVELY for Troy, NY, so please don't add any search functionality. Keep it very simple.
The coordinates for Troy, NY are: 42.7284° N, 73.6918° W (so lat = 42.7284, lon = -73.6918).

The components I want in the app are:

Weather: The weather condition itself. For example: Clear Sky, Light Rain, etc.

Wind: Please include the speed (in mph), as well as the direction (cardinal).

Temperature: Please include temperature in fahrenheit.

Humidity: Please include humidity %.

My API key is [APIKEY].
___
### Prompt #2
This is a great start!

Now, I would like you to stylize the site as follows:
I want each weather attribute (Weather, Wind, Temperature, Humidity) to have its own "card" (div with rounded corners) running horizontally across the screen, in the order I just provided. So, from left to right, there should be 4 cards: Weather, Wind, Temperature, and Humidity.
___
### Prompt #3
I want ALL of the cards to be side-by-side, and a square aspect ratio.
___
### Prompt #4
Perfect! This is a great start.

Now, in addition to OpenWeatherMap API, I would like you to incorporate
the VisualCrossing API to also track the current Moonphase. Do not use any other data from VisualCrossing API, just the moonphase. 

Moonphase card should be to the right of the humidity card.

My API key for VisualCrossing is 78TL93DR6FF3D2RXWPMJMQ4XW.

___
### Prompt #5
Excellent! This is really coming together.

Now, I would like you to add icons to the Weather and Moonphase cards.

For the icons, you can just use emojis, with a very large font size.

Please use emojis that are appropriate to each respective weather condition/moonphase.

___
### Prompt #6
Great! This is coming along well.

Now, I would like you incorporate ANOTHER API, called Colormind.

The task is simple: Call the Colormind API and use the color palette you receive to stylize the colors on the site.

To avoid readability/contrast issues with text, please increase the brightness of each of the 5 colors you receive (by some constant amount) before applying them to the site.
___
### Prompt #7
index.html?serverWindowId=06576c9c-8794-465a-b047-4d12d74e80d5:266 Colormind failed: Network error
refreshAll @ index.html?serverWindowId=06576c9c-8794-465a-b047-4d12d74e80d5:266
colormind.io/api/:1  Failed to load resource: net::ERR_CERT_AUTHORITY_INVALID
___
### Prompt #8
Please fix the code/ apply changes as necessary to make the Colormind API work as I requested.
___
### Prompt #9
Awesome! This is working great. Thank you for fixing the code!

Now, can you please address the text contrast issue? Please lighten the Colormind color palette before applying it to the site.
___
### Prompt #10
The following requests are all aesthetic changes, so please bare with me.
1) Please change the text color of the "Refresh" button to black.
2) I would like you to include an icon for the Wind direction. I already have all of the icons you'll need. They are all 600x600px PNGs, and they are all in the same directory as index.html.

Here's how I'd like you to deal with them: \
a) If Wind Direction is N, use N.png. \
b) If Wind Direction is S, use S.png. \
c) If Wind Direction is E, use E.png. \
d) If Wind Direction is W, use W.png. \
e) If Wind Direction is NNE, NE, or ENE, use NE.png. \
f) If Wind Direction is SSE, SE, or ESE, use SE.png. \
g) If Wind Direction is NNW, NW, or WNW, use NW.png. \
h) If Wind Direction is SSW, SW, or WSW, use SW.png.

# Gemini Prompts (Generating Wind Direction Icons)
### Prompt #1
Please generate a flat icon (modern) that is an arrow pointing North.
___
### Prompt #2
Great. Using this same exact style, please generate an arrow pointing North East.
___
### Prompt #3
Great. Using this same exact style, please generate an arrow pointing East.
___
### Prompt #4
Great. Using this same exact style, please generate an arrow pointing South East.
___
### Prompt #5
Great. Using this same exact style, please generate an arrow pointing South.
___
### Prompt #6
Great. Using this same exact style, please generate an arrow pointing South West.
___
### Prompt #7
No, that is pointing East. Please generate an arrow pointing South West. Same style.
___
### Prompt #8
Great. Using this same exact style, please generate an arrow pointing West.
___
### Prompt #9
Great. Using this same exact style, please generate an arrow pointing North West.
___
# Used removal.ai to remove all the icon backgrounds.