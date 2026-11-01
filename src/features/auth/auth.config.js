// Демо-авторизация на клиенте: переменные VITE_* видны в коде сайта, это НЕ настоящая защита.
// Для реального проекта проверку логина нужно делать на сервере.
const ADMIN_LOGIN = import.meta.env.VITE_ADMIN_LOGIN || 'admin';
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin';

export const checkCredentials = (login, password) =>
  login === ADMIN_LOGIN && password === ADMIN_PASSWORD;
