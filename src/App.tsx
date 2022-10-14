import "./App.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";

import imdbLogo from "./assets/imdb-logo.svg";
import playButton from "./assets/play.svg";

import { data } from "./data/home";
import { Carousel } from "./components/Carousel";

function App() {
    return (
        <div className="overlayer">
            <div className="elipse"></div>
            <div className="container">
                <Header />
                <div className="infos">
                    <span className="info">2021 | PG-13 | 2h 28m</span>
                    <h1>
                        Spider-Man:
                        <br />
                        No Way Home
                    </h1>
                    <span className="categories">
                        Action | Adventure | Fantasy
                    </span>
                    <div className="imdb">
                        <img src={imdbLogo} alt="" /> 8.5
                    </div>
                    <Button icon={playButton}>Watch Now</Button>
                </div>
                <Carousel
                    title="Popular Collections"
                    data={data.popularCollections}
                />
                <Carousel title="New Releases" data={data.newReleases} details />
            </div>
        </div>
    );
}

export default App;
