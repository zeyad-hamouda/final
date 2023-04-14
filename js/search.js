/*const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim(); // Get search query from input field
  if (query) {
    fetch(`/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        // Display search results here
      })
      .catch(err => console.error(err));
  }
});
