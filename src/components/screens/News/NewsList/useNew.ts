import { ChangeEvent, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { useDebounce } from "@/hooks/useDebounce";
import { NewService } from "@/services/new.service";
import { INew } from "@/types/new.interface";

export const useNew = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 500);

  const {
    data: news,
    isLoading,
    isError,
  } = useQuery<INew[]>({
    queryKey: ["new", "gdfsgs"],
    queryFn: () => NewService.getNews("gdfsgs"),
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return useMemo(
    () => ({
      handleSearch,
      news,
      isLoading,
      isError,
      searchTerm,
    }),
    [searchTerm, isLoading, isError],
  );
};
