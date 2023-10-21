import { useQuery } from "react-query";
import countryService from "../services/countryService";

export const useGetCountries = (config) => {
    return useQuery(["fetch-countries"], () => countryService.getCountries().then((res) => res.countries), config);
};

export const useGetCountry = (id, config) => {
    return useQuery(["fetch-country", id], () => countryService.getCountry(id).then((res) => res.country), config);
};