import axios from 'axios';
import { getToken } from './auth';
/**
 * Creo una instancia personalizada de Axios con configuración por defecto.
 * 
 * Esta instancia se utiliza para realizar peticiones HTTP a la API del backend
 * ubicada en `http://localhost:8080/api`. Se establecen los headers por defecto:
 * - `Content-Type`: para indicar que los datos se envían en formato JSON.
 * - `Accept`: para indicar que se espera recibir datos en formato JSON.
 */
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Accept':'application/json'
  },
  baseURL: 'http://localhost:8080/api',
});
/**
 * Interceptor de solicitudes de Axios.
 * 
 * Este interceptor se ejecuta **antes de enviar cada solicitud** al servidor.
 * Su objetivo es:
 * - Obtener el token JWT almacenado (usando la función `getToken()`).
 * - Si el token existe, lo añade al header de autorización como `Bearer <token>`.
 * 
 * De esta manera, todas las peticiones realizadas con esta instancia de Axios
 * llevarán automáticamente el token para acceder a rutas protegidas.
 */
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {        
      config.headers.Authorization = `Bearer ${token}`;
      // console.log('---===================================---');
      // console.log(config.headers);
      // console.log('---===================================---');
  }
  return config;
});

export default api;