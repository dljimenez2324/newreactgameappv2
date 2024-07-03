import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { AxiosRequestConfig, CanceledError } from "axios"

// NOTICE TO GENERALIZE THE DATA WE WILL USE T AND DELETE INTERFACES AND PASS IN PARAMETERS INSTEAD   ENDPOINT 
// // create the shape of the interface of the parent platform
// export interface Platform {
//     id: number;
//     name: string;
//     slug: string;
// }

// // help us shape our data in the form of our interfaces (type)
// export interface Game {
//     id: number;
//     name: string;
//     background_image: string;
//     parent_platforms: {platform: Platform}[];
// }

export interface FetchResponse<T> {
    count: number
    results: T[]
}


const useData = <T> (endpoint: string, requestConfig?: AxiosRequestConfig, deps?:any[]) => {

    // useStates to help us update our UI with our games or data
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false);
 
    // Create a helper function to getch our data
    //  const fetchGames = () => {
    // }
    
    /// useeffect to fetch our data
    
    useEffect(() => {
        
        // we need an instance of AbortController() to help us unsubscribe to the api, we will save it to a variable   essentially this will help us unplug from our api
        const controller = new AbortController();

        setIsLoading(true);

        apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig })  // the signal ... sends in parameter to the endpoint that we want to cancel subscription 
        .then(response => {
            setIsLoading(false)
            setData(response.data.results)
        })
        .catch((error) => {
            if (error instanceof CanceledError) return
            // otherwise see below
            setIsLoading(true)
            setError(error.message);
            setIsLoading(false)
        });

        // notice this return is the cleanup function where we unplug from the api
        return () => controller.abort(); // this will cancel the subscription (or stop using the api or unplug from the api after we're done)
        // fetchGames();
       
     },deps ? [...deps] : [] );

     return {data, error, isLoading}
}

export default useData