import { isEmpty } from "@/lib/utils";

interface MoviePosterProps {
  Poster: string;
  Title: string;
}

const MoviePoster = ({ Poster, Title }: MoviePosterProps) => {
  return (
    <>
      {!isEmpty(Poster) ? (
        <img className="md:min-h-72 " src={Poster} alt={Title} />
      ) : (
        <div className="flex min-h-72 w-72 items-center justify-center bg-gray-200 text-gray-400">
          <p>Poster Not Available</p>
        </div>
      )}
    </>
  );
};

export default MoviePoster;
