import useDataFetch from "./useDataFetch";

const fetchCountries = () => {
    const { data, isLoading, error, refetch } = useDataFetch('/countries');

    return { countries: data?.countries, isLoading, error, refetch };
}

export default fetchCountries;