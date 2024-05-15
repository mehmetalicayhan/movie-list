import { MovieDetail } from "@/types/Movie";
import MovieHeader from "./movie-header";
import MoviePoster from "./movie-poster";
import MovieContent from "./movie-content";

interface MovieCardProps {
  movie: MovieDetail;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="flex w-full flex-col rounded-xl md:flex-row">
      <MoviePoster Poster={movie.Poster} Title={movie.Title} />
      <div className="flex flex-grow flex-col p-4">
        <MovieHeader
          Title={movie.Title}
          imdbRating={movie.imdbRating}
          imdbVotes={movie.imdbVotes}
          Awards={movie.Awards}
        />
        <MovieContent movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
