import { Component } from "react";
import { fetchAlbums, fetchArtist } from "./services";
import { withRouter } from "./withRouter";
import styles from "./Artist.module.css";
import { Link } from 'react-router-dom';

class Artist extends Component {
    state = {
        album : [],
        artist:{}
    }

    componentDidMount(){
        const {id} = this.props.params
        fetchAlbums(id).then((artist) =>{
            console.log(artist)
            this.setState({album:  artist })
        })
        fetchArtist(id).then((result)=>{
            console.log(`artista solito `)
            console.log(result.type)
            this.setState({artist: result})
        })
    }

    render(){
        return (
            <div className={styles.mainContainer}>
                <Link to="/" className={styles.link}> Home </Link>
                <div className={styles.infoContainer}>
                    <img className={styles.artistImage}  src={this.state.artist.image} alt=""/>
                    <h1>{this.state.artist.name}</h1>
                    <p>{this.state.artist.type}</p>
                </div>
                <h4> Albums</h4>
                <div className={styles.albumsContainer}>
                    
                    {this.state.album.map((artistAlbums)=>{
                        return (
                            <div className={styles.albumsResults}>
                                
                                <img className={styles.albumImage} src={artistAlbums.image} alt=""/>
                                <h5>{artistAlbums.name}</h5>
                                Total Tracks: {artistAlbums.total_tracks}
                                
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )
    }
}

export default withRouter(Artist);