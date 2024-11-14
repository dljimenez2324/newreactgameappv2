import { useQuery } from "@tanstack/react-query"
import { ScreenShots } from "../entities/ScreenShots"
import APIClient from "../services/apiClient"

const useScreenShots = (gameId: number) => {
    const apiClient = new APIClient<ScreenShots>(`/games/${gameId}/screenshots`)

    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getall
    })
}

export default useScreenShots