import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const { posterPath, releaseDate, title, cast } = movie;
  console.log("MOVIECARD: ", posterPath);
  const moviePosterStyle = {
    backgroundImage: `url(${posterPath})`,
    backgroundSize: "cover",
    height: "40vmin",
  };

  return (
    <Link to={`/movies/${title}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-poster" style={moviePosterStyle}>
          <div className="movie-details">
            <h2>{title}</h2>
            <p>Release Date: {releaseDate}</p>
            <p>Cast: {cast.join(", ")}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}