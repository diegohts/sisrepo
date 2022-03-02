import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export const getRepositories = async(userId, query) => {
    let url = `/users/${userId}/repositories/`

    if(query !== '') {
        url += `?q=${query}`;
    }
    // http://localhost:8000/users/ID/repositories/?q=xxx

    return api.get(url);
};