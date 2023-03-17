import axios from 'axios';

const BASE_URL = 'https://turkmenexpress.com.tm/api/administrator/';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json",
        // "Authorization": `Bearer ${token}`
    }
});

const loginPost = async (username, password) => {
    const res = await axios.post('https://turkmenexpress.com.tm/api/users/login/', { username, password });
    return res.data;
}
export { axiosInstance, loginPost } 