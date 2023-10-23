import { request } from "../helpers/request";

export async function createPaymentIntent(data) {
    try {
        const response = await request.post(`/payments/intents`, {
            amount: data?.amount,
        });

        return response.data;
    } catch (error) {
        console.error('Error creating payment intent:', error);
        throw error;
    }
}
