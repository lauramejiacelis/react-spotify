export function fetchArtists(artistName) {
    const type = "artist";
    const token =
        "BQABw3PJDJVBQCXcZ4zgC9Gmvg487eLf06KcfuK8lTd6j4J8_sHE7mJOd1WYsudTTfLtNO7Sql9-W_8LOEua7ElLXtlgcdKp4pAY5-Lm9VEdS6aBHjcieTzj7xyYCiSP4RHdu2QAeBujcn_5mXtn-goGogMwvxoO-Yc";
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
    //No sé por qué estaba tomando el valor con los : y se hace esto para quitarlo
    const token =
        "BQAoGJHAMz8v5mqp0DAU-GE4kCMOtRWV6N3JzP16Q0f-ty-869X3JJLS88xAnX1Dns8xNw5NTxTWJD0-WgIAlxNGp7z-HW4CVf4G7Oy9hUcZ_M6JMWzm8xOI0zDwWGQte80BfKDX4_lvi8QhjqfbY0CW_jWeRfl7djc";
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
            items.map(({ name, images, total_tracks, artists }) => {
                let image = null;
                if (images && images[1]) {
                    image = images[1].url;
                }
                let artist = artists[0].name
                let type = artists[0].type
                return {
                    name,
                    image,
                    total_tracks,
                    artist,
                    type
                };
            })
        );
}

export function fetchArtist (artistId){
    console.log(`Artist id prev ${artistId}`);
    const Id = artistId.slice(1);
    const token =
        "BQACBS2GkBE8N9-yhvyICO5Vm5dBDN9pIvI0pHWEgZbtRWPVJlNHAADjwulfWIRFeJbHZI31DNualX-NCvsLLrTbaE8Cie42Iej9jtS9E87fSQGceCy39Z-rxPVfywY5STfQgz_1qO1gWznpjZUeY23sSeo-yTx5xEM";
    console.log(`Artist id post ${Id}`);
    return fetch(
        `https://api.spotify.com/v1/artists/${Id}`,
        {
            headers: {
            Authorization: `Bearer ${token}`
            }
        }
    )
    .then((res) => res.json())
    .then((artist)=>{
        let image = null;
        if (artist.images && artist.images[0]) {
            image = artist.images[0].url;
        }
        let name = artist.name
        let type = artist.type
        return {
            image,
            name,
            type
        }
    })
}