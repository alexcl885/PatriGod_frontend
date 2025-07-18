/**
 * Obtiene el token JWT almacenado en el `localStorage`.
 *
 * @returns {string|null} El token si existe, o `null` si no está presente.
 */
export const getToken = () => localStorage.getItem('token');

/**
 * Almacena el token JWT en el `localStorage`.
 * 
 * Este método se suele llamar después de hacer login, para guardar el token
 * y usarlo en futuras peticiones HTTP autenticadas.
 *
 * @param {string} token - El token JWT a guardar.
 */
export const setTokenLocal = (token) => {
  localStorage.setItem('token', token);
};

/**
 * Elimina el token JWT del `localStorage`.
 * 
 * Este método se suele usar durante el logout o cuando el token ha expirado,
 * para asegurar que el usuario ya no esté autenticado.
 */
export const clearToken = () => {
  localStorage.removeItem('token');
};