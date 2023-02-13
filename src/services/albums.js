import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/albums';

const getAll = (headers) => {
    const request = axios.get(baseUrl, {headers: headers});
    return request.then(response => response.data)
}

const getGenres = () => {
    return axios.get(baseUrl + '/genres')
    .then(response => response.data)
}

const getYears = () => {
    return axios.get(baseUrl + '/years')
    .then(response => response.data)
}

export {getAll, getGenres, getYears} ;