import { formatToUnits, isEmpty } from "@/lib/utils";
import { Award, StarIcon } from "lucide-react";
import MovieInfoBox from "./movie-info-box";

interface MovieHeaderProps {
  Title: string;
  imdbRating: string;
  imdbVotes: string;
  Awards: string;
}
const MovieHeader = ({
  Title,
  imdbRating,
  imdbVotes,
  Awards,
}: MovieHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">{Title}</h1>
      <div className="flex gap-2">
        <MovieInfoBox
          icon={
            <StarIcon className="fill-[#F5C518] stroke-[#F5C518]" size={16} />
          }
        >
          <span className="font-bold">
            {imdbRating}/
            <span className="text-gray-400">
              {imdbVotes && <span>({formatToUnits(imdbVotes)})</span>}
            </span>
          </span>
        </MovieInfoBox>

        {!isEmpty(Awards) && (
          <MovieInfoBox>
            <Award size={16} />
            <span> {Awards?.split(" ")?.[0]}</span>
          </MovieInfoBox>
        )}
      </div>
    </div>
  );
};

export default MovieHeader;
