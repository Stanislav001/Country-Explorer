
import { request } from "../helpers/request";
import * as SecureStore from 'expo-secure-store';

export async function registerUser(values) {
    await request.post(`/register`, {
        username: values.username,
        email: values.email,
        password: values.password
    });

    let result = await loginUser(values);

    return result;
}

export async function loginUser(values) {
    try {
        const res = await request.post(`/login`, {
            email: values.email,
            password: values.password,
        });
        await SecureStore.setItemAsync('token', res.data.token);

        return res;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('An error occurred while logging in.');
        }
    }
}

export async function getUserData(token) {
    let result = await request.get(`/users`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => res.data)
        .catch(err => err.response.data);
    return result;
}