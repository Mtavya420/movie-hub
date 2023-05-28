import { create } from "zustand";

interface MovieQuery {
  genreId?: number;
  category?: string;
  sortOrder?: string;
  searchText?: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setCategory: (category: string) => void;
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
  setCategory: (category) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, category },
    })),
  setGenreId: (genreId) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, genreId },
    })),
}));

export default useMovieQueryStore;
