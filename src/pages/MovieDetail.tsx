import MovieCard from "@/components/movie/movie-card";
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

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center">
      {data && <MovieCard movie={data} />}
    </div>
  );
};

export default MovieDetail;
