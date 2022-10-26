import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/albums';

const getAll = (headers) => {
    console.log('headers: ',headers)
    const request = axios.get(baseUrl, {headers: headers});
    return request.then(response => response.data)
}

export default getAll;