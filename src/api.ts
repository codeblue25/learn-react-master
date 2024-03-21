const API_KEY = "d01483cfdf1d7e31860cc087fa98c08f";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
}

export interface IMovieResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: IMovie[];
}

export function getMovies() {
  return fetch(
    `${BASE_PATH}/discover/movie?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}
