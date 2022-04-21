import styles from './Home.module.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchArtists } from './services';
import { Button, InputGroup, Input, InputGroupText } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    input: '',
    artist: [],
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      input: value,
    });
  };

  handleSearch = () => {
    console.log(`handleSearch pre ${this.state.input}`);
    fetchArtists(this.state.input).then((artist) => {
      console.log(`handleSearch infetch ${this.state.input}`);
      this.setState({
        artist,
        //artistImages: artist.images
      });
    });
  };

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.inputContainer}>
          <InputGroup>
            <InputGroupText>Artist</InputGroupText>
            <Input
              type="text"
              id="getArtist"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <Button onClick={this.handleSearch}>Search</Button>
          </InputGroup>
        </div>

        <div className={styles.artistContainer}>
          {this.state.artist.map((artistInfo) => {
            return (
              <Link
                to={`/Artist/${artistInfo.id}`}
                className={styles.artistResults}
              >
                <img
                  className={styles.artistImage}
                  src={artistInfo.image}
                  alt=""
                />
                <h4>{artistInfo.name}</h4>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
