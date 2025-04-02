import { useEffect, useState } from 'react';
import request from '../utils/request';
import useAuth from '../hooks/useAuth';

const baseURL = 'http://localhost:3030/data/orders';

export const useCreateOrder = () => {
    const { options } = useAuth();

    const create = (order) => {
        return request.post(baseURL, order, options);
    };

    return { create };
};

export const useAllOrders = () => {

    const { options } = useAuth();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        request.get(baseURL, null, options).then(setOrders);
    }, []);

    return { orders };
};

export const useOrder = (orderId) => {
    const [order, setOrder] = useState({});

    useEffect(() => {
        request.get(`${baseURL}/${orderId}`).then(setOrder);
    }, [orderId]);

    return { order };
};

export const useDeleteOrder = () => {

    const { options } = useAuth();

    const deleteOrder = async (orderId) => {
        await request.delete(`${baseURL}/${orderId}`, null, options);
    };

    return { deleteOrder };
};

export const useUpdateOrder = () => {

    const { options } = useAuth();

    const update = async (orderId, order) => {
        await request.put(`${baseURL}/${orderId}`, { ...order, _id: orderId }, options);
    };

    return { update };
};

