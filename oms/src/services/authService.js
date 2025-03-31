import request from "../utils/request";

const baseURL = 'http://localhost:3030/users/login';

export default {
    async login(email, password) {
        const user = await request.post(baseURL, {email, password});
        return user;
    },
};