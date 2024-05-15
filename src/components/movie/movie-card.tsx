import { Movie } from "@/types/Movie";
import { Card } from "../ui/card";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card className="flex rounded-xl">
      <img
        className="rounded-l-lg"
        width={100}
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className="p-4">
        <h3 className="text-2xl">{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </Card>
  );
};

export default MovieCard;
