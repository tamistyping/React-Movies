import MovieCard from "../../components/MovieCard";
import { movies } from "../../data.js";

export default function MovieListPage() {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}