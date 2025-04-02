import { useContext, useEffect, useState } from 'react';
import request from '../utils/request';
import { userContext } from '../contexts/userContext';

const baseURL = 'http://localhost:3030/data/orders';

export default {
    _create(order) {
        return request.post(baseURL, order);
    },
    async _getAll() {
        const result = await request.get(baseURL);
        const orders = Object.values(result);
        return orders;
    },
    async _getOne(id) {
        const order = await request.get(`${baseURL}/${id}`);
        return order;
    },
    async _update(id, order) {
        return request.put(`${baseURL}/${id}`, { ...order, _id: id });
    },
    async _delete(id) {
        return request.delete(`${baseURL}/${id}`);
    },
};

export const useCreateOrder = () => {
    const { accessToken } = useContext(userContext);

    const options = {
        headers: { 'X-Authorization': accessToken },
    };

    const create = (order) => {
        return request.post(baseURL, order, options);
    };

    return { create };
};

export const useAllOrders = () => {
    const { _id, accessToken } = useContext(userContext);

    const options = {
        headers: { 'X-Authorization': accessToken },
    };

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        request.get(baseURL, null, options)
        .then(setOrders)
    }, []);

    return { orders };
};
