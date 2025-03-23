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

  // Возвращаем данные
  return {
    averageRating: 4.5, // Средний рейтинг
    totalReviews: 120, // Общее количество отзывов
  };
});
