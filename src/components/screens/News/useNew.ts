import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { INewResponse } from "@/types/new.interface";
import { useDebounce } from "@/hooks/useDebounce";
import { NewService } from "@/services/new.service";
import { useNewStore } from "@/store/news";

export const useNew = () => {
  const searchTerm = useNewStore((state) => state.searchTerm);
  const limit = useNewStore((state) => state.limit);
  const page = useNewStore((state) => state.currentPage);
  const sort = useNewStore((state) => state.sortBy);
  const order = useNewStore((state) => state.orderBy);
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { data, isLoading, isError, error } = useQuery<INewResponse>({
    queryKey: ["new", debouncedSearch, limit, page, sort, order],
    queryFn: () =>
      NewService.getNews(debouncedSearch, limit, page, sort, order),
  });

  return useMemo(
    () => ({
      data,
      isLoading,
      isError,
      error,
      searchTerm,
    }),
    [isLoading, error, isError, data],
  );
};
