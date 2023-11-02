
import { request } from "../helpers/request";

export async function bookHotel(hotelId, roomId, checkInDate, checkOutDate, authToken) {
    try {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        };

        const bookingData = {
            hotelId,
            roomId,
            checkInDate,
            checkOutDate,
        };

        const response = await request.post(`/book`, bookingData, {
            headers,
        });

        response.data.status = response.status;

        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getBookingHotels(authToken) {
    try {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        };

        const response = await request.get(`/book`, {
            headers,
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}