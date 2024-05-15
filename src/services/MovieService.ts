import { Movie } from '@/types/Movie';
import axiosInstance from './axios';

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
    const response = await axiosInstance.get('', { params: request });
    return response?.data;
  }
}