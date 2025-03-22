import { defineStore } from 'pinia';
import { useCookie } from '#app';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        // Токен авторизации
        token: useCookie<string | null>('token', {
            maxAge: 86400 // 1 день
        })
    }),

    actions: {
        // Авторизация
        async login(login: string, password: string) {
            try {
                // Вызываем API для авторизации
                const response = await $fetch<{ token: string }>('/api/login', {
                    method: 'POST',
                    body: { login, password }
                });

                // Сохраняем токен
                this.token = response.token;
                return true;

            } catch (error) {
                console.error('Login failed:', error);
                return false;
            }
        },

        // Выход из системы
        logout() {
            this.token = null;
        }
    }
});