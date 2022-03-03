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

export const createRepository = async (userId, repositoryUrl) => {
    const repositoryName = getRepositoryName(repositoryUrl);

    const url = `/users/${userId}/repositories/`;

    return api.post(url, { name: repositoryName, url: repositoryUrl });
}

export const destroyRepository = async (userId, id) => {
    const url = `/users/${userId}/repositories/${id}`;

    api.delete(url);
} 

const getRepositoryName = (url) => {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)/;

    const match = url.match(regex);

    console.log('Match: ', match);

    if(match[2]) {
        const values = match[2].split('/');

        console.log('Values: ', values);

        return `${values[1]}/${values[2]}`;
    }
}