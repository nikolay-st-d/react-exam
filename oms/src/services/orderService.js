import request from "../utils/request";

const baseURL = 'http://localhost:3030/jsonstore/orders';

export default {
    create(order) {
        return request.post(baseURL, order);
    },
    async getAll() {
        const result = await request.get(baseURL);
        const orders = Object.values(result);
        return orders;
    },
    async getOne(id) {
        const order = await request.get(`${baseURL}/${id}`);
        return order;
    },
    async update(id, order) {
        return request.put(`${baseURL}/${id}`, order);
    },
    async delete(id) {
        return request.delete(`${baseURL}/${id}`);
    }
};