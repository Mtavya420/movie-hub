import { create } from "zustand";

 interface MovieQuery {
  genreId?: number;
  categoryId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface MovieQueryStore{
  movieQuery:  MovieQuery;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setCategoryId: (categoryId: number) => void;
  setGenreId: (genreId: number) => void;

}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {},
  setSearchText: (searchText: string) =>
    set(() => ({
      movieQuery: { searchText },
    })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, sortOrder },
    })),
  setCategoryId: (categoryId) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery,categoryId },
    })),
  setGenreId: (genreId) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, genreId },
    })),
}));

export default useMovieQueryStore;