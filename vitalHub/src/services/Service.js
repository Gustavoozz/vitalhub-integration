import axios from 'axios';

// declarar a porta da API
const portaApi = '4466';

// declarar o ip da máquina
const ipHenrique = "192.168.21.132"

// definir a url padrão;
const apiUrlLocal = `http://${ipHenrique}:${portaApi}/api`

// trazer a configuração do axios
const api = axios.create({
    baseURL: apiUrlLocal
})

export default api;