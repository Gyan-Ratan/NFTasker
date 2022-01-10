import axios from 'axios';
const instance = axios({
    baseURL: 'https://api.onec.in/api/v1/naas/',
    method: 'post'

});
export default instance;