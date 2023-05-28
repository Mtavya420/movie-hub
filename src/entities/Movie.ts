import { Genre } from "./Genre";

export interface Movie {
  id: number;
  title: string;
  genres: Genre[];
  poster_path: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
  release_date: string;
  video: string;
}
