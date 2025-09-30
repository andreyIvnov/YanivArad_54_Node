const jf = require("jsonfile");
const axios = require("axios");

const MOVIES_JSON = "HW/HW03_AccessRestAPI/data/movies.json"
const SHOWS_ENDPOINT = "https://api.tvmaze.com/shows";


const fillTheJsonFile = async () => {
    const { movies: moviesNameFromJson } = await jf.readFile(MOVIES_JSON);
    const { data: showsWS } = await getMovieFullShowsData();

    const moviesData = moviesNameFromJson.map(movieName => {
        const show = showsWS.find(show => show.name === movieName);

        if (show) {
            return { name: movieName, premiered: show.premiered }
        } else {
            return { name: movieName }
        }
    })

    const response = await jf.writeFile(MOVIES_JSON, { movies: moviesData.filter(movie => movie != null) });
}

const getMovieFullShowsData = () => axios.get(SHOWS_ENDPOINT)

module.exports = { fillTheJsonFile };
