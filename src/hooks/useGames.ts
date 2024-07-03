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
const useGames = (gameQuery:GameQuery) => useData<Game>('/games', {params:{genres:gameQuery.genre?.id, parent_platforms:gameQuery.platform?.id, ordering:gameQuery.sortOrder, search:gameQuery.searchText}}, [gameQuery])

export default useGames

// // this was in the useGames before
//     // useStates to help us update our UI with our games or data
//     const [games, setGames] = useState<Game[]>([])
//     const [error, setError] = useState('')
//     const [isLoading, setIsLoading] = useState(false);
 
//     // Create a helper function to getch our data
//     //  const fetchGames = () => {
//     // }
    
//     /// useeffect to fetch our data
    
//     useEffect(() => {
        
//         // we need an instance of AbortController() to help us unsubscribe to the api, we will save it to a variable   essentially this will help us unplug from our api
//         const controller = new AbortController();

//         setIsLoading(true);

//         apiClient
//         .get<FetchGameResponse>('/games', {signal: controller.signal})  // the signal ... sends in parameter to the endpoint that we want to cancel subscription 
//         .then(response => {
//             setGames(response.data.results)
//             setIsLoading(false)
//         })
//         .catch((error) => {
//             if (error instanceof CanceledError) return
//             setIsLoading(true)
//             setError(error.message);
//             setIsLoading(false)
//         });

//         // notice this return is the cleanup function where we unplug from the api
//         return () => controller.abort(); // this will cancel the subscription (or stop using the api or unplug from the api after we're done)
//         // fetchGames();
       
//      }, [])

//      return {games, error, isLoading}