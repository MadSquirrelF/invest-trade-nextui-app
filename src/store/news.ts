import { create } from "zustand";

export interface NewsStore {
  searchTerm: string;
  currentPage: number;
  totalPages: number;
  date: string;
  sortBy: "views" | "createdAt" | "title";
  orderBy: "asc" | "desc";
  limit: number;
  totalCount: number;

  setSearchTerm: (term: string) => void;
  setDate: (date: string) => void;
  setTotalCount: (count: number) => void;
  setSortBy: (sortBy: "views" | "createdAt" | "title") => void;
  setCurrentPage: (page: number) => void;
  setOrderBy: (orderBy: "asc" | "desc") => void;
}

export const useNewStore = create<NewsStore>((set) => ({
  searchTerm: "",
  date: "all",
  sortBy: "title",
  currentPage: 1,
  totalPages: 5,
  orderBy: "desc",
  limit: 4,
  totalCount: 0,

  // Функция для обновления поискового термина
  setSearchTerm: (term: string) => {
    set({ searchTerm: term, currentPage: 1 }); // Сбросить на первую страницу при изменении поиска
  },

  setDate: (date: string) => {
    set({ date: date, currentPage: 1 });
  },

  // Функция для изменения сортировки
  setSortBy: (sortBy: "views" | "createdAt" | "title") => {
    set({ sortBy });
  },

  setOrderBy: (orderBy: "asc" | "desc") => {
    set({ orderBy });
  },

  // Функция для изменения текущей страницы
  setCurrentPage: (page: number) => {
    set({ currentPage: page });
  },

  setTotalCount: (count: number) => {
    set({ totalCount: count });
  },
}));
