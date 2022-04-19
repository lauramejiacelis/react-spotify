import { Component } from "react";
import { fetchAlbums } from "./services";
import { withRouter } from "./withRouter";

class Artist extends Component {
    state = {
        artist : []
    }

    componentDidMount(){
        const {id} = this.props.params
        fetchAlbums(id).then((artist) =>{
            console.log(artist)
            this.setState({artist})
        })
    }

    render(){
        return (
            <div>
                <h1>Artist Detail</h1>
                {this.state.artist.map((artistAlbums)=>{
                    return (
                        <div>
                            <img src={artistAlbums.image} alt=""/>
                            {artistAlbums.name}
                            {artistAlbums.total_tracks}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default withRouter(Artist);