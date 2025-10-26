import { useCallback, useState } from "react"
import "../../Styles/Moovies.css"

import { 
    addNewMovie, 
    getAllMoovies, 
    getMovieById ,
    updateMovie,
    removeMovie
} from "../../Helpers/dbRequestsUtils"

import Moovie from "./Moovie"
import AddNewMoovie from "./AddNewMoovie"

function Moovies() {
    const [idInput, setIdInput] = useState()
    const [moovies, setMoovies] = useState([
        { _id: "1", name: "Delta", director: "Anton Rusakov", primieredYear: 2020 },
    ])

    // useEffect(() => {
    //     const fetchMoovies = async () => {
    //         const response = await getAllMoovies();
    //         setMoovies(response);
    //     }
    //     // fetchMoovies();
    // }, [])

    const deleteHandler = useCallback(async (id) => {
        const { data } = await removeMovie(id);
        await getAllMovies();
    })

    const updateHandler = useCallback(async (id, movieObj) => {
        if (movieObj && id) {
            const { data } = await updateMovie(id, movieObj);
        }
    })

    const newMovieHandler = useCallback( async (newMovieObject) => {
        if (newMovieObject) {
            const result = await addNewMovie(newMovieObject);
            setMoovies([...moovies, { ...result.data }]);
        }
    })

    const getAllMovies = async () => {
        const { data } = await getAllMoovies();
        setMoovies(data);
    }

    const getMovie = async () => {
        if (idInput) {
            const { data } = await getMovieById(idInput);
            setMoovies([data]);
        }
    }


    return (
        <div className="movies-container">
            <h1 className="movies-title">🎬 Movie Collection</h1>
            
            <div className="add-movie-section">
                <h3>Add New Movie</h3>
                <AddNewMoovie addNewMoviecallback={newMovieHandler} />
            </div>
            
            <div className="controls-section">
                <button className="get-all-btn" onClick={getAllMovies}>Get All Movies</button>
                
                <div className="search-container">
                    <input 
                        className="search-input"
                        placeholder="Enter the movie ID" 
                        type="text" 
                        onChange={e => setIdInput(e.target.value)} 
                    />
                    <button className="search-btn" onClick={getMovie}>Get Movie by ID</button>
                </div>
            </div>
            
            <div className="movies-section">
                <h3>Movies</h3>
                {moovies &&
                    <table className="movies-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Director</th>
                                <th>Premiered Year</th>
                                <th>Actions</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {moovies.map(moovie => {
                                return (
                                    <tr key={moovie._id}>
                                        <Moovie movieData={moovie} deleteCallback={deleteHandler} updateCallback={updateHandler} />
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default Moovies