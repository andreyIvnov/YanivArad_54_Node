import { memo, useState } from "react"
import "../../Styles/Moovie.css"

function Moovie({ movieData, deleteCallback, updateCallback }) {
    const [movieDataToShow, setMovieDataToShow] = useState(movieData)
    const [toUpdate, setToUpdate] = useState(false)
    const [justUpdatedData, setJustUpdatedData] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJustUpdatedData({ ...justUpdatedData, [name]: value });
        setMovieDataToShow({ ...movieDataToShow, [name]: value });
    }

    const updateData = () => {
        if (toUpdate) {
            setToUpdate(!toUpdate);
            if (justUpdatedData && Object.keys(justUpdatedData).length > 0) {
                updateCallback(movieData._id, justUpdatedData);
            }
        } else {
            setToUpdate(!toUpdate);
        }
    }

    return (
        <>
            <td className="movie-id">{movieData._id}</td>
            {toUpdate &&
                <>
                    <td className="movie-field">
                        <input onChange={handleChange} type="text" name="name" defaultValue={movieDataToShow.name} />
                    </td>
                    <td className="movie-field">
                        <input onChange={handleChange} type="text" name="director" defaultValue={movieDataToShow.director} />
                    </td>
                    <td className="movie-field">
                        <input onChange={handleChange} type="number" name="primieredYear" defaultValue={movieDataToShow.primieredYear} />
                    </td>
                </>
            }
            {!toUpdate &&
                <>
                    <td className="movie-field">{movieDataToShow.name}</td>
                    <td className="movie-field">{movieDataToShow.director}</td>
                    <td className="movie-field">{movieDataToShow.primieredYear}</td>
                </>
            }
            <td className="action-buttons">
                <button className="delete-btn" onClick={e => { deleteCallback(movieData._id) }}>🗑️ Delete</button>
            </td>
            <td className="action-buttons">
                <button className={`update-btn ${toUpdate ? 'saving' : ''}`} onClick={updateData}>
                    {toUpdate ? '💾 Save' : '✏️ Edit'}
                </button>
            </td>
        </>
    )
}

export default memo(Moovie)