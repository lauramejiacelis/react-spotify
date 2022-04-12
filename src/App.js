import logo from './logo.svg';
import './App.css';
import styles from './styles.module.css';
import { Component } from 'react';

function fetchArtists(artistName) {
  const type = "artist";
  const token =
    "BQBUDx-HmVk0UZ_abeaogvAqTs5je_-sDVqQrun3lnkqF7WKHvpfxe6QiSHItkYkUCVyzWCgPuUDdBUKwiHPylz_xkV6o0NOyDTGt207cdlw_dECdxnNXU7aw-sv6-sT36SjCnwKDvvv1SHM_cbpLYhnL_8zhmjgz3Y";
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
      items.map(({ name, images }) => {
        let image = null;
        if (images && images[1]) {
          image = images[1].url;
        }
        return {
          name,
          image
        };
      })
    );
  //Aquí tomé el objeto items... no era necesario hacer un map y se cambió
}

class App extends Component {
  state = {
    input: "",
    artist: []
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      input: value
    });
  };

  handleSearch = () => {
    console.log(`handleSearch pre ${this.state.input}`);
    fetchArtists(this.state.input).then((artist) => {
      console.log(`handleSearch infetch ${this.state.input}`);
      this.setState({
        artist
        //artistImages: artist.images
      });
    });
  };

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src="https://cdn2.downdetector.com/static/uploads/logo/Spotify_Logo_RGB_Green.png"
            alt=""
          />
        </div>
        <label htmlFor="getArtist">Artist: </label>
        <input
          type="text"
          id="getArtist"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch}>Search</button>
        <div className={styles.artistContainer}>
          {this.state.artist.map((artistInfo) => {
            return (
              <div className={styles.artistResults}>
                <img className={styles.logo} src={artistInfo.image} alt="" />
                {artistInfo.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
