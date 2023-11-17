import { useQuery } from "react-query";
import { getBookingHotels } from "../services/userService";

export const useGetBookingData = (authToken, config) => {
    return useQuery(["fetch-booking-hotels"], () => getBookingHotels(authToken));
};