import DataGrid from "@/components/data-grid/data-grid";
import DataGridPagination from "@/components/data-grid/data-grid-pagination";
import ImagePlaceholder from "@/components/image-placeholder";
import MovieFilter from "@/components/movie/movie-filter";
import { INIITAL_SEARCH_TERM, QUERY_KEYS } from "@/constants";
import { MovieService, SearchMovieResponse } from "@/services/MovieService";
import { Movie } from "@/types/Movie";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Column } from "@/types/DataGrid";

const MovieList = () => {
  const [filters, setFilters] = useState({
    s: INIITAL_SEARCH_TERM,
    type: "",
    y: "",
  });

  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const { data, isLoading, isRefetching } = useQuery<SearchMovieResponse>({
    queryKey: [QUERY_KEYS.MOVIES, page, filters],
    queryFn: () => MovieService.getMovies({ ...filters, page }),
    enabled: filters.s.length > 2,
  });

  const columns: Column<Movie>[] = [
    {
      key: "Poster",
      title: "Poster",
      dataIndex: "Poster",
      render: (value: string, row: Movie) =>
        value !== "N/A" ? (
          <img
            className="h-20 w-16 rounded-lg object-cover"
            src={value}
            alt={row.Title}
          />
        ) : (
          <ImagePlaceholder width={16} height={20} className="text-[8px]" />
        ),
    },
    { key: "imdbID", title: "Imdb ID", dataIndex: "imdbID" },
    { key: "Title", title: "Title", dataIndex: "Title" },
    { key: "Year", title: "Year", dataIndex: "Year" },
  ];

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 px-2 py-8 sm:px-0 ">
      <MovieFilter filters={filters} setFilters={setFilters} />
      {data && (
        <DataGrid
          data={data?.Search}
          isEmpty={data?.Response === "False"}
          isLoading={isLoading || isRefetching}
          columns={columns}
          rowKey="imdbID"
        >
          <DataGridPagination
            page={page}
            onPageChange={setPage}
            totalResults={data?.totalResults}
          />
        </DataGrid>
      )}
    </div>
  );
};

export default MovieList;
