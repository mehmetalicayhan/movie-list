import { Movie, MovieDetail } from '@/types/Movie';
import apiClient from './axios';

interface SearchMovieRequest {
  s: string; // search
  page?: number;
  y?: string; // year
  type?: string;
}

export interface SearchMovieResponse {
  Search: Movie[];
  totalResults: number;
  Response: string;
}



export class MovieService {
  static async getMovies(request: SearchMovieRequest): Promise<SearchMovieResponse> {
    const response = await apiClient.get('', { params: request });
    return response?.data;
  }

  static async getMovieById(imdbID?: string): Promise<MovieDetail> {
    const response = await apiClient.get('', { params: { i: imdbID } });
    return response?.data;
  }
}
