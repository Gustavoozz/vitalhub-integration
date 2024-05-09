import axios from 'axios';

// declarar a porta da API
const portaApi = '4466';

// declarar o ip da máquina
<<<<<<< HEAD
const ipHenrique = "192.168.21.132"
=======
<<<<<<< HEAD
const ipHenrique = "172.16.39.98"
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978

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