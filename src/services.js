export function fetchArtists(artistName) {
    const type = "artist";
    const token =
        "BQAyp7mRZPxqc33fNcVjtgo9meARkceK7Mm_J2UswjCKwwXCTqLLu6XufQ0Jp1N-wV_y6S0F4IhcTYGEGaBVoRixup3qzUzUYOjMSWVgM5j77XUau9FOA0xEQovzy2bLysInr1eboRQ8IMscz8IBmhm76VLxu46Vrjw";
    console.log(`Artist ${artistName}`);
    return fetch(
        `https://api.spotify.com/v1/search?q=${artistName}&type=${type}`,
        {
            headers: {
            Authorization: `Bearer ${token}`
            }
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
                    id
                };
            })
        );
    //Aquí tomé el objeto items... no era necesario hacer un map y se cambió
}

export function fetchAlbums(artistId) {
    const Id = artistId.slice(1);
    const token =
        "BQAP9VxNy-gDBMS5eCgQJ109u5GA7tXeoPOgcQgN9rWDrCKklvc32cRzpWjC6i9tcPL6q0h4L0QmR1PL9kBXji2Oz43uU-g1T9E1evGlIrron3YYPfHcqcz5__qVHV9ArNMUGrfbEclKAIw7wc2clFiVZpLZyY-rD8E";
    console.log(`Artist id ${Id}`);
    return fetch(
        `https://api.spotify.com/v1/artists/${Id}/albums`,
        {
            headers: {
            Authorization: `Bearer ${token}`
            }
        }
    )
        .then((res) => res.json())
        .then(({ items }) =>
            items.map(({ name, images, total_tracks }) => {
                let image = null;
                if (images && images[1]) {
                    image = images[1].url;
                }
                return {
                    name,
                    image,
                    total_tracks
                };
            })
        );
    //Aquí tomé el objeto items... no era necesario hacer un map y se cambió
}