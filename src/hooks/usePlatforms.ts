// import useData, { FetchResponse } from "./useData";
// import apiClient, { FetchResponse } from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constants";
import APIClient, { FetchResponse } from "../services/apiClient";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient('/platforms/lists/parents');

// const usePlatform = () => useData<Platform>('/platforms/lists/parents')
    const usePlatform = () => useQuery<FetchResponse<Platform>>({
        queryKey: CACHE_KEY_PLATFORMS,
        queryFn: () => apiClient.getall({}),
        // staleTime: 24 * 60 * 60 * 1000, // every 24 hour refresh data
        staleTime: ms('24h') // 24 hours

    });

export default usePlatform