const jFile = require("jsonfile")
const axios = require("axios")



async function getMovies() {
    const { movies: moviesFromFile } = await jFile.readFile("./movies.json") // Read local movie data from movies.json
    const { data: moviesFromWs } = await axios.get("http://api.tvmaze.com/shows") // Fetch external movie data from TVMaze API

    moviesFromFile.slice(0,4) // TTrim the array of movies to include 4 movies (so it matches the json file, the bigger the json file the higher the maximum number)

    const finalArr = moviesFromFile.map(movieName => { // Mapping over local movies to combine with external data
        const finalMovie = { name: movieName }

        const movieFromWs = moviesFromWs.find(movie => movie.name === movieName) // Finding matching movies in external data
        finalMovie.premiered = movieFromWs.premiered  // Add additional properties to final movie data 
        return finalMovie
    })
   
    await jFile.writeFile("./movies.json", {movies: finalArr})
   return "File overwrite completed"
}

module.exports = {getMovies}