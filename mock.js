// Mock data simulating Unsplash API response
const mockData = {
  results: [
    {
      urls: {
        small: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
      }
    }
  ]
};

// Mock fetch function
function mockFetch(url) {
  return new Promise((resolve) => {
    resolve({
      ok: true,
      json: () => Promise.resolve(mockData)
    });
  });
}

// Use mockFetch instead of fetch for testing
mockFetch('https://api.unsplash.com/search/photos?query=dog&client_id=YOUR_KEY')
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.results[0].urls.small;
    document.getElementById('dog-photo').src = imageUrl;
  });
