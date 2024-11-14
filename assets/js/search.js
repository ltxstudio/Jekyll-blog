const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const posts = [
    {% for post in site.posts %}
    {
      title: "{{ post.title }}",
      url: "{{ post.url }}",
    },
    {% endfor %}
  ];

  searchResults.innerHTML = '';
  if (query) {
    const filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(query)
    );

    if (filteredPosts.length > 0) {
      searchResults.classList.remove('hidden');
      filteredPosts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${post.url}" class="block p-3 hover:bg-gray-200">${post.title}</a>`;
        searchResults.appendChild(li);
      });
    } else {
      searchResults.classList.add('hidden');
    }
  } else {
    searchResults.classList.add('hidden');
  }
});
