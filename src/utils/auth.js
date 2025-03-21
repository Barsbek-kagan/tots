// src/utils/auth.js

// Получение данных пользователя из localStorage
export const getUser = () => {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return null;
  }
};

// Сохранение данных пользователя в localStorage
export const setUser = user => {
  try {
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.error('Error saving user to localStorage:', error);
  }
};

// Удаление данных пользователя из localStorage
export const removeUser = () => {
  try {
    localStorage.removeItem('user');
  } catch (error) {
    console.error('Error removing user from localStorage:', error);
  }
};

// Проверка, авторизован ли пользователь
export const isAuthenticated = () => {
  return !!getUser();
};
