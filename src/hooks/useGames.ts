import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAMES } from "../constants";
import APIClient, { FetchResponse } from "../services/apiClient";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient("/games");

// create the shape of the interface of the parent platform
//// but now its moved to apiclient

// export interface Platform {
//     id: number;
//     name: string;
//     slug: string;
// }

// help us shape our data in the form of our interfaces (type)
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// export interface FetchGameResponse<T> {
//   count: number;
//   results: T[];
// }

// to do a one liner we dont need the curly braces
// const useGames = (gameQuery:GameQuery) => useData<Game>('/games', {params:{genres:gameQuery.genre?.id, parent_platforms:gameQuery.platform?.id, ordering:gameQuery.sortOrder, search:gameQuery.searchText}}, [gameQuery])

const useGames = () => {

  const gameQuery = useGameQueryStore(s => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery], // notice that because CACHE_KEY_GAMES is an array but we need to pass in the parameter gameQuery so we have , gamequery
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getall({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    // staleTime: 24 * 60 * 60 * 1000 // 24 hours before refresh data
    staleTime: ms("24h"),

    // () =>
    // apiClient
    //     .get<FetchGameResponse<Game>>('/games', {params:{genres:gameQuery.genre?.id, parent_platforms:gameQuery.platform?.id, ordering:gameQuery.sortOrder, search:gameQuery.searchText}})
    //     .then(res => res.data)
  });
};

export default useGames;
