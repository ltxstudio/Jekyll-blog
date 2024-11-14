document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');

  searchInput.addEventListener('input', async function () {
    const query = this.value.trim();
    if (!query) {
      resultsContainer.innerHTML = '';
      return;
    }

    const response = await fetch('/search.json');
    const posts = await response.json();
    
    const results = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    
    resultsContainer.innerHTML = results.map(post => `
      <li>
        <a href="${post.url}" class="block hover:bg-gray-200 p-2 rounded">${post.title}</a>
      </li>
    `).join('');
  });
});
