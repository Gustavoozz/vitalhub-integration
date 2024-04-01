import axios from 'axios';

// declarar a porta da API
const portaApi = '4466';

// declarar o ip da máquina
const ipGu = "172.16.39.102"

// definir a url padrão;
const apiUrlLocal = `http://${ipGu}:${portaApi}/api`

// trazer a configuração do axios
const api = axios.create({
    baseURL: apiUrlLocal
})

export default api;