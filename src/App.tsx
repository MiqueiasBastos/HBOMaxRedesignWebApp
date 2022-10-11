import "./App.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";

import imdbLogo from "./assets/imdb-logo.svg";
import playButton from "./assets/play.svg";

import imgDriveMyCar from "./assets/popular-collections/drive-my-car.png";
import imgDuna from "./assets/popular-collections/duna.png";
import imgEuphoria from "./assets/popular-collections/euphoria.png";
import imgMoneyHeist from "./assets/popular-collections/money-heist.png";
import imgPeacemaker from "./assets/popular-collections/peacemaker.png";
import imgTickTickBoom from "./assets/popular-collections/tick-tick-boom.png";

import imgMoonfall from "./assets/new-releases/moonfall.png";
import imgKingRichard from "./assets/new-releases/king-richard.png";
import imgArchive81 from "./assets/new-releases/archive-81.png";
import imgTickTickBookLarge from "./assets/new-releases/tick-tick-boom.png";

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

                <h2>Popular Collections</h2>
                <div className="collections-carousel">
                    <a href="#">
                        <img src={imgPeacemaker} alt="" />
                    </a>
                    <a href="#">
                        <img src={imgEuphoria} alt="" />
                    </a>
                    <a href="#">
                        <img src={imgDriveMyCar} alt="" />
                    </a>
                    <a href="#">
                        <img src={imgDuna} alt="" />
                    </a>
                    <a href="#">
                        <img src={imgMoneyHeist} alt="" />
                    </a>
                    <a href="#">
                        <img src={imgTickTickBoom} alt="" />
                    </a>
                </div>
                <h2>New Releases</h2>
                <div className="releases-carousel">
                    <a href="#">
                        <span>
                            <h3>Moonfall</h3>
                            <p>Action | Adventure | Sci-Fi</p>
                        </span>
                        <img src={imgMoonfall} alt="" />
                    </a>
                    <a href="#">
                        <span>
                            <h3>King Richard</h3>
                            <p>Sports | Drama</p>
                        </span>
                        <img src={imgKingRichard} alt="" />
                    </a>
                    <a href="#">
                        <span>
                            <h3>Archive 81</h3>
                            <p>Action | Adventure | Sci-Fi</p>
                        </span>
                        <img src={imgArchive81} alt="" />
                    </a>
                    <a href="#">
                        <span>
                            <h3>Tick Tick Book</h3>
                            <p>Music | Drama</p>
                        </span>
                        <img src={imgTickTickBookLarge} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
