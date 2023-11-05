
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

export async function sendEmail(email) {
    try {
        const response = await request.post('/send-email', {
            email: email,
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        throw error;
    }
}

export async function checkToken(email, code) {
    try {
        const response = await request.post('/verify-code', {
            email,
            code
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        throw error;
    }
}

export async function changePassword(email, newPassword) {
    try {
        const response = await request.post('/change-password', {
            email,
            newPassword
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        throw error;
    }
}