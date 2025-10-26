import Moovies from "./Moovie/Moovies"
import "../Styles/Home.css"

function Home() {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="home-header">
          <h1 className="home-title">🎥 CinemaDB</h1>
          <p className="home-subtitle">Your Personal Movie Collection Manager</p>
        </div>
        
        <div className="feature-highlight">
          <div className="feature-card">
            <div className="feature-icon">🎬</div>
            <div className="feature-title">Add Movies</div>
            <div className="feature-description">Easily add new movies to your collection with all the details</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <div className="feature-title">Search & Browse</div>
            <div className="feature-description">Find movies by ID or browse through your entire collection</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✏️</div>
            <div className="feature-title">Edit & Manage</div>
            <div className="feature-description">Update movie information and manage your collection</div>
          </div>
        </div>
        
        <div className="home-content">
          <Moovies/>
        </div>
      </div>
    </div>
  )
}

export default Home