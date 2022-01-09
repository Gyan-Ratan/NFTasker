import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://api.onec.in/api/v1/naas/'
});
export default instance;