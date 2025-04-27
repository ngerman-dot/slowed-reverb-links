const searchInput = document.getElementById('search');
const songList = document.getElementById('songList');
let songs = [];

fetch('data/songs.json')
  .then(response => response.json())
  .then(data => {
    songs = data;
    renderSongs(songs);
  })
  .catch(error => {
    console.error('Error al cargar las canciones:', error);
  });

function renderSongs(songsToRender) {
  songList.innerHTML = '';
  songsToRender.forEach(song => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = song.link;
    a.target = '_blank';
    a.textContent = song.name;
    li.appendChild(a);
    songList.appendChild(li);
  });
}

searchInput.addEventListener('keyup', function() {
  const filter = searchInput.value.toLowerCase();
  const filteredSongs = songs.filter(song => song.name.toLowerCase().includes(filter));
  renderSongs(filteredSongs);
});
