import hotelService from "../services/hotelService";
import { useQuery, useInfiniteQuery } from "react-query";

export const useGetHotels = (config) => {
    return useQuery(["fetch-hotels"], () => hotelService.getHotels().then((res) => res.hotels), config);
};

export const useGetLimitHotels = (config) => {
    return useQuery(["fetch-limit-hotels"], () => hotelService.getLimitHotels().then((res) => res.hotels), config);
};

export const useGetHotel = (id, token, config) => {
    return useQuery(["fetch-hotel", id], () => hotelService.getHotel(id, token).then((res) => res.hotel), config);
};

export const useGetHotelRooms = (id, config) => {
    return useQuery(["fetch-hotel-rooms", id], () => hotelService.getHotelRooms(id).then((res) => res.rooms), config);
};

export const useGetReviews = (id, config) => {
    return useQuery(["fetch-reviews"], () => hotelService.getHotelReviews(id).then((res) => res.reviews), config);
};

export const useGetFavoriteHotels = (token, config) => {
    return useQuery(["fetch-favorite-hotels"], () => hotelService.getFavoriteHotels(token).then((res) => res), config);
};