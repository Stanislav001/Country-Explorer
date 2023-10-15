import useDataFetch from './useDataFetch';

const fetchPlaces = () => {
    const { data, isLoading, error, refetch } = useDataFetch('/places');

    return { places: data?.places, isLoading, error, refetch };
}

export default fetchPlaces;