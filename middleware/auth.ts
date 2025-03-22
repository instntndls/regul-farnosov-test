import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
    const router = useRouter();
    const authStore = useAuthStore();

    if (!authStore.token && to.path === '/products') {
        return router.push('/login');
    }
});