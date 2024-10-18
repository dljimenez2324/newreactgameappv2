// import { useEffect, useState } from "react"
// import apiClient from "../services/apiClient"
// import { CanceledError } from "axios"
// import { Genre } from "./useGenres";
import useData from "./useData";
import { GameQuery } from "../App";

// create the shape of the interface of the parent platform
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// help us shape our data in the form of our interfaces (type)
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number
}

export interface FetchGameResponse {
    count: number
    results: Game []
}

// to do a one liner we dont need the curly braces
// const useGames = (gameQuery:GameQuery) => useData<Game>('/games', {params:{genres:gameQuery.genre?.id, parent_platforms:gameQuery.platform?.id, ordering:gameQuery.sortOrder, search:gameQuery.searchText}}, [gameQuery])
    const useGames = () => 


export default useGames

