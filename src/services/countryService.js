import { request } from "../helpers/request";

const countryService = {
    getCountries: async () => {
        try {
            const response = await request.get('/countries');
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            throw error;
        }
    },
    getCountry: async (id) => {
        try {
            const response = await request.get(`/countries/${id}`);
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            throw error;
        }
    }
}

export default countryService;