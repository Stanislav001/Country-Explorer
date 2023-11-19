import { useQuery } from "react-query";
import { getBookingHotels, getMonthlyExpenses } from "../services/userService";

export const useGetBookingData = (authToken, config) => {
  return useQuery(["fetch-booking-hotels"], () => getBookingHotels(authToken));
};

export const useGetMonthlyExpenses = (authToken, selectedDuration) => {
  return useQuery(["fetch-getMonthly-expenses", selectedDuration], () =>
    getMonthlyExpenses(authToken, selectedDuration)
  );
};
