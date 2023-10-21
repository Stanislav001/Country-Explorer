import { request } from "../helpers/request";

const hotelService = {
    getHotels: async () => {
        try {
            const response = await request.get('/hotels');
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            throw error;
        }
    },
    getHotel: async (id) => {
        try {
            const response = await request.get(`/hotels/${id}`);
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            throw error;
        }
    },
    getHotelRooms: async (id) => {
        try {
            const response = await request.get(`/hotels/rooms/${id}`);
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

export default hotelService;