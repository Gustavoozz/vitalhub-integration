import axios from 'axios';

// declarar a porta da API
const portaApi = '4466';

// declarar o ip da máquina
<<<<<<< HEAD
const ipHenrique = "172.16.39.98"

// definir a url padrão;
const apiUrlLocal = `http://${ipHenrique}:${portaApi}/api`
=======
const ipGu = "192.168.19.136"

// definir a url padrão;
const apiUrlLocal = `http://${ipGu}:${portaApi}/api`
>>>>>>> gustavo

// trazer a configuração do axios
const api = axios.create({
    baseURL: apiUrlLocal
})

export default api;