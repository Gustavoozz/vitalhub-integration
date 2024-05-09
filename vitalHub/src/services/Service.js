import axios from 'axios';

// declarar a porta da API
const portaApi = '4466';

// declarar o ip da máquina
<<<<<<< HEAD
<<<<<<< HEAD
const ipGu = "172.16.39.131"
=======
<<<<<<< HEAD
const ipHenrique = "172.16.39.98"
=======
>>>>>>> develop

const ipGu = "192.168.19.136"
>>>>>>> origin/develop

// definir a url padrão;
const apiUrlLocal = `http://${ipGu}:${portaApi}/api`

// trazer a configuração do axios
const api = axios.create({
    baseURL: apiUrlLocal
})

export default api;