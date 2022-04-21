const token =
  'BQAa4DiVen89o5MyPM61JdLLTFN74i3HFHvrrQ4dzOWgjHy9vTji3p5X5eFxdc1xq626Ak54cJqxBcCp07NuEDJD4jWNFGAARveGGohPoDJ3_XvMfs_q_xLQ7ul0tz-rQOZVP7w_gcx-YE9gJlQWxktyheoIMKBjOqE';

export function fetchArtists(artistName) {
  const type = 'artist';
  console.log(`Artist ${artistName}`);
  return fetch(
    `https://api.spotify.com/v1/search?q=${artistName}&type=${type}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => res.json())
    .then(({ artists: { items } }) =>
      items.map(({ name, images, id }) => {
        let image = null;
        if (images && images[1]) {
          image = images[1].url;
        }
        return {
          name,
          image,
          id,
        };
      })
    );
  //Aquí tomé el objeto items... no era necesario hacer un map y se cambió
}

export function fetchAlbums(id) {
  return fetch(`https://api.spotify.com/v1/artists/${id}/albums`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then(({ items }) =>
      items.map(({ name, images, total_tracks, artists }) => {
        let image = null;
        if (images && images[1]) {
          image = images[1].url;
        }
        let artist = artists[0].name;
        let type = artists[0].type;
        return {
          name,
          image,
          total_tracks,
          artist,
          type,
        };
      })
    );
}

export function fetchArtist(id) {
  return fetch(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((artist) => {
      let image = null;
      if (artist.images && artist.images[0]) {
        image = artist.images[0].url;
      }
      let name = artist.name;
      let type = artist.type;
      return {
        image,
        name,
        type,
      };
    });
}
