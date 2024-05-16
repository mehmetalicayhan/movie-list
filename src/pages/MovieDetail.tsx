import MovieCard from "@/components/movie/movie-card";
import MovieSkeleton from "@/components/movie/movie-skeleton";
import { QUERY_KEYS } from "@/constants";
import { MovieService } from "@/services/MovieService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { imdbID } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.MOVIE, imdbID],
    queryFn: () => MovieService.getMovieById(imdbID),
  });

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center">
      {isLoading && <MovieSkeleton />}
      {data && <MovieCard movie={data} />}
    </div>
  );
};

export default MovieDetail;
