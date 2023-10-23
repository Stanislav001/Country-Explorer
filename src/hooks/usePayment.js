import { useQuery } from "react-query";
import paymentService from "../services/paymentService";

export const useMakePayment = (config) => {
    return useQuery(["create-payment"], () => paymentService.createPaymentIntent().then((res) => res), config);
};
