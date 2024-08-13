import axios from "axios";

import { INewResponse } from "@/types/new.interface";

export const NewService = {
  async getNews(
    searchTerm: string,
    limit: number,
    page: number,
    sort: string,
    order: string,
  ) {
    const { data: news } = await axios.get<INewResponse>(
      "http://localhost:1418/api/news",
      {
        params: {
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          _searchTerm: searchTerm,
        },
      },
    );

    return news;
  },
};
