import { request } from "../helpers/request";

const reviewService = {
    getReviews: async (page, perPage) => {
        try {
            const response = await request.get('/reviews', {
                params: {
                    page: page,
                    perPage: perPage,
                },
            });

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            throw error;
        }
    },

    addReview: async (hotelName, review, rating, hotelId, token) => {
        try {
            const response = await request.post('/reviews', {
                title: hotelName,
                review: review,
                rating: rating,
                hotelId: hotelId
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            throw error;
        }
    },
}

export default reviewService;