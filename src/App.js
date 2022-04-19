import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import styles from './App.module.css';
import Home from "./Home";
import Artist from "./Artist"

class App extends Component {
    render (){
        return (
            <div>
                <div className={styles.logoContainer}>
                    <img
                        className={styles.logo}
                        src="https://cdn2.downdetector.com/static/uploads/logo/Spotify_Logo_RGB_Green.png"
                        alt=""
                    />
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Artist/:id" element={<Artist/>}/>
                </Routes>

            </div>
        )
    }
}

export default App;