const baseURL = 'http://localhost:3030/jsonstore/orders';

export default {
    async create(order) {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        })

        const result = await response.json();

        return result;
    }
};
