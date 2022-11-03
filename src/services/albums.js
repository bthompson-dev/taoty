import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/albums';

const getAll = (headers) => {
    const request = axios.get(baseUrl, {headers: headers});
    return request.then(response => response.data)
}

const getKeys = () => {
    return axios.get(baseUrl + '/keys')
    .then(response => response.data)
}

export {getAll, getKeys} ;