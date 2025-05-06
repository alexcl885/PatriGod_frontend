export const getToken = () => localStorage.getItem('token');


export const setTokenLocal = (token) => {
  localStorage.setItem('token', token);
};

export const clearToken = () => {
  localStorage.removeItem('token');
};