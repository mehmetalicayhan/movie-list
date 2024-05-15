import { MovieDetail } from "@/types/Movie";
import MovieDetailList from "./movie-detail-list";
import MovieInfoBox from "./movie-info-box";

interface MovieContentProps {
  movie: MovieDetail;
}

const MovieContent = ({ movie }: MovieContentProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full items-center justify-between gap-1 text-xs opacity-80">
        <span className="text-xs text-gray-400">
          {movie.Year} | {movie.Runtime} | {movie.Rated}
        </span>
      </div>
      <p className="text-sm text-gray-400">{movie.Plot}</p>
      <div>
        <MovieDetailList
          items={[
            {
              title: "Genre",
              value: (
                <div className="flex items-center justify-center gap-2">
                  {movie?.Genre?.split(", ").map((genre: string) => (
                    <MovieInfoBox key={genre}>{genre}</MovieInfoBox>
                  ))}
                </div>
              ),
            },

            { title: "Director", value: movie.Director },
            { title: "Writer", value: movie.Writer },
            {
              title: "Actors",
              value: movie.Actors,
            },
            { title: "Language", value: movie.Language },
          ]}
        />
      </div>
    </div>
  );
};

export default MovieContent;
