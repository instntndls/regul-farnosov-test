export default defineNuxtRouteMiddleware((to) => {
  // Редирект с главной страницы на /products
  if (to.path === '/') {
    return navigateTo('/products');
  }
});
