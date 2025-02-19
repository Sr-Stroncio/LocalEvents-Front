import axios from 'axios';

const api = axios.create({
    baseURL: 'https://yeray.informaticamajada.es/',
    withCredentials: true,
});

export default api;


// Ejemplo de configuración
// api.get('/usuarios')
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));