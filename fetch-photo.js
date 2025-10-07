fetch('https://api.unsplash.com/search/photos?query=dog&per_page=1&client_id=YOUR_ACCESS_KEY')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const imageUrl = data.results[0].urls.small;
    document.getElementById('dog-photo').src = imageUrl;
  });

  // https://api.openweathermap.org/data/2.5/weather?lat=42.73&lon=-73.69&appid=ACCESS_KEY WILL GIVE ME TROY WEATHER