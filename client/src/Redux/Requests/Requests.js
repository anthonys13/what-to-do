import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
});

export async function requestLists() {
    try {
        const response = await axiosInstance.get('/lists');
        return response.data

    }
    catch (err) {
        console.error(err);
    }
}

export async function axiosDeleteLists(id) {
    try {
        const response = await axiosInstance.delete(`/lists/${id}`);
        return response.data

    }
    catch (err) {
        console.error(err);
    }
}

export async function axiosDeleteCards(id) {
    try {
        const response = await axiosInstance.delete(`/cards/${id}`);
        return response.data

    }
    catch (err) {
        console.error(err);
    }
}
