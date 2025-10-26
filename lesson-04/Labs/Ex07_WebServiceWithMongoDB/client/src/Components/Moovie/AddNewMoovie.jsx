import { useState } from "react"
import "../../Styles/AddNewMoovie.css"

function AddNewMoovie({ addNewMoviecallback }) {
  const [newMovieData, setNewMovieData] = useState({ name: "", director: "", primieredYear: 0 })

  const addNewMovie = () => {
    if (newMovieData && newMovieData.name !== "") {
      addNewMoviecallback(newMovieData);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovieData({ ...newMovieData, [name]: value });
  }

  return (
    <div className="add-movie-form">
      <div className="input-group">
        <input 
          className="add-movie-input"
          placeholder="🎬 Movie Name" 
          onChange={handleChange} 
          type="text" 
          name="name" 
          required 
        />
      </div>
      <div className="input-group">
        <input 
          className="add-movie-input"
          placeholder="🎭 Director Name" 
          onChange={handleChange} 
          type="text" 
          name="director" 
        />
      </div>
      <div className="input-group">
        <input 
          className="add-movie-input"
          placeholder="📅 Premiered Year" 
          onChange={handleChange} 
          type="number" 
          name="primieredYear" 
        />
      </div>
      <button className="add-movie-btn" onClick={addNewMovie}>
        ➕ Add Movie
      </button>
    </div>
  )
}

export default AddNewMoovie