import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // Инициализация с localStorage
    token: import.meta.client ? localStorage.getItem('token') : null,
  }),

  actions: {
    // Авторизация
    async login(login: string, password: string) {
      try {
        // Вызываем API для авторизации
        const response = await $fetch<{ token: string }>('/api/login', {
          method: 'POST',
          body: { login, password },
        });

        // Сохраняем токен в localStorage
        if (import.meta.client) {
          localStorage.setItem('token', response.token);
        }

        // Обновляем состояние в Pinia
        this.token = response.token;
        return true;
      } catch (error) {
        console.error('Login failed:', error);
        return false;
      }
    },

    // Выход из системы
    logout() {
      // Удаляем токен из localStorage и сбрасываем состояние
      if (import.meta.client) {
        localStorage.removeItem('token');
      }
      this.token = null;
    },
  },
});
