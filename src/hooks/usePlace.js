import { useQuery } from "react-query";
import placeService from "../services/placeService";

export const useGetPlaces = (config) => {
    return useQuery(["fetch-places"], () => placeService.getPlaces().then((res) => res.places), { cacheTime: 0 });
};

export const useGetRandomPlaces = (config) => {
    return useQuery(["fetch-random-places"], () => placeService.getRandomHotels().then((res) => res.places), { cacheTime: 0 });
};

export const useGetPlace = (id, config) => {
    return useQuery(["fetch-place", id], () => placeService.getPlace(id).then((res) => res.place), { cacheTime: 0 });
};

export const useSearchPlaces = (searchKey, config) => {
    return useQuery(['search-places', searchKey], () => placeService.searchPlaces(searchKey), { cacheTime: 0 });
};