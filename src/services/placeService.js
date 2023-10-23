import { request } from "../helpers/request";

const placeService = {
    getPlaces: async () => {
        try {
            const response = await request.get('/places');
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            throw error;
        }
    },
    getRandomHotels: async () => {
        try {
            const response = await request.get('/places?random=true');
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            throw error;
        }
    },
    getPlace: async (id) => {
        try {
            const response = await request.get(`/places/${id}`);
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            throw error;
        }
    },
    searchPlaces: async (searchKey) => {
        if (searchKey) {
            try {
                const response = await request.get(`/places/search/${searchKey}`);

                if (response.status === 200) {
                    return response.data?.results;
                } else {
                    throw new Error('Something went wrong');
                }
            } catch (error) {
                throw error;
            }
        }
    },
}

export default placeService;