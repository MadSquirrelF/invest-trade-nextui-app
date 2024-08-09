import axios from "axios";

import { INew } from "@/types/new.interface";

export const NewService = {
  async getNews(searchTerm: string) {
    const { data: news } = await axios.get<INew[]>(
      "http://localhost:1418/api/news",
      {
        params: {
          _limit: 1,
          _page: 1,
          _sort: "",
          _order: "desc",
          _serchTerm: searchTerm,
        },
      },
    );

    return news;
  },
};
