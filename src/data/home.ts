import imgDriveMyCar from "../assets/popular-collections/drive-my-car.png";
import imgDuna from "../assets/popular-collections/duna.png";
import imgEuphoria from "../assets/popular-collections/euphoria.png";
import imgMoneyHeist from "../assets/popular-collections/money-heist.png";
import imgPeacemaker from "../assets/popular-collections/peacemaker.png";
import imgTickTickBoom from "../assets/popular-collections/tick-tick-boom.png";

import imgMoonfall from "../assets/new-releases/moonfall.png";
import imgKingRichard from "../assets/new-releases/king-richard.png";
import imgArchive81 from "../assets/new-releases/archive-81.png";
import imgTickTickBookLarge from "../assets/new-releases/tick-tick-boom.png";

export const data = {
    destaque: {
        ano: 2021,
        contentRating: "PG-13",
        duration: "2h 28m",
        title: "Spider-Man: No Way Home",
        categories: ["Action", "Adventure", "Fantasy"],
    },
    popularCollections: [
        {
            cover: imgPeacemaker,
        },
        {
            cover: imgEuphoria,
        },
        {
            cover: imgDriveMyCar,
        },
        {
            cover: imgDuna,
        },
        {
            cover: imgMoneyHeist,
        },
        {
            cover: imgTickTickBoom,
        },
    ],
    newReleases: [
        {
            cover: imgMoonfall,
            title: "Moonfall",
            categories: ["Action", "Adventure", "Sci-Fi"],
        },
        {
            cover: imgKingRichard,
            title: "King Richard",
            categories: ["Sport", "Drama"],
        },
        {
            cover: imgArchive81,
            title: "Archive 81",
            categories: ["Action", "Adventure", "Sci-Fi"],
        },
        {
            cover: imgTickTickBookLarge,
            title: "Tick Tick Book",
            categories: ["Music", "Drama"],
        },
    ],
};
