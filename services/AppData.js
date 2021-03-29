import axios from 'axios';

const API_URL = 'http://192.168.0.27:8080/'

class AppDataService{
    cadastrarPessoa(pessoa) {
        return axios.post(`${API_URL}pessoas`, pessoa)
    }
}

export default new AppDataService();