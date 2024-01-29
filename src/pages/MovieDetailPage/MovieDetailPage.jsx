import { useParams } from "react-router-dom";
import { movies } from "../../data.js";

export default function MovieDetailPage() {
  const { movieName } = useParams();
  const movie = movies.find((m) => m.title === movieName);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const { title, releaseDate, posterPath, cast } = movie;

console.log(posterPath);
  return (
    <div className="movie-detail">
      <h2>{title}</h2>
      <p>Release Date: {releaseDate}</p>
      <img src={posterPath} alt={title} />
      <p>Cast: {cast.join(', ')}</p>
    </div>
  );
}