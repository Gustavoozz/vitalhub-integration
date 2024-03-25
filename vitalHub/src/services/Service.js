import axios from 'axios';

// declarar a porta da API
const portaApi = '4466';

// declarar o ip da máquina
const ipHenrique = "172.16.39.98"

// definir a url padrão;
const apiUrlLocal = `http://${ipHenrique}:${portaApi}/api`

// trazer a configuração do axios
const api = axios.create({
    baseURL: apiUrlLocal
})

export default api;