import { createError, defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  // Извлекаем токен из заголовков авторизации
  const authHeader = event.req.headers['authorization'];

  // Проверяем наличие токена
  if (!authHeader) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Authorization header is missing',
    });
  }

  const token = authHeader.split(' ')[1];

  // Если токен отсутствует, выбрасываем ошибку
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Token is missing',
    });
  }

  // Данные компании
  return {
    name: 'Наследие',
    logo: '/_nuxt/assets/images/company.png',
    description:
      'Описание вашей компании, которое будет отображаться на сайте.',
  };
});
