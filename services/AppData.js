import axios from 'axios';

const API_URL = 'http://localhost:8080/'

class AppDataService(pessoa) {
    return axios.post(`${API_URL}pessoas`, pessoa)
}

export default new AppDataService();