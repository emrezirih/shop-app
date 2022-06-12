import axios, { AxiosResponse } from "axios";

export const getProducts = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
        try {
            axios.get('http://5e394071aad22200149625f8.mockapi.io/products')
                .then(response => {
                    resolve(response.data);
                });
        } catch (error) {
            reject(error);
        }
    });
};

export const getDeals = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
        try {
            axios.get('http://5e394071aad22200149625f8.mockapi.io/hotdeals')
                .then(response => {
                    resolve(response.data);
                });
        } catch (error) {
            reject(error);
        }
    });
};