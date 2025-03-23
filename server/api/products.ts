import { createError, defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  // Извлекаем токен из заголовков авторизации
  const authHeader = event.req.headers['authorization'];

  // Проверяем наличие токена в заголовке
  if (!authHeader) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Authorization header is missing',
    });
  }

  const token = authHeader.split(' ')[1];

  // Если токен пустой, выбрасываем ошибку
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Token is missing',
    });
  }

  // Возвращаем список продуктов
  return [
    {
      id: 1,
      image:
        '/_nuxt/assets/images/Img-1.png',
      views: Math.floor(Math.random() * 1000),
      days: Math.floor(Math.random() * 10),
      price: 450500,
      title: 'Сlavia Nord Grand сценическое цифровое пианино',
      status: 'promoted',
      category: 'Гробы',
    },
    {
      id: 2,
      image:
        '/_nuxt/assets/images/Img-2.png',
      views: Math.floor(Math.random() * 1000),
      days: Math.floor(Math.random() * 10),
      price: 3285000,
      title: 'Hyundai Sonata 2.0 AT, 2023, 30 км',
      status: 'promote',
      category: 'Урны',
    },
    {
      id: 3,
      image:
        '/_nuxt/assets/images/Img-3.png',
      views: Math.floor(Math.random() * 1000),
      days: Math.floor(Math.random() * 10),
      price: 4800000,
      title: '2-к. квартира, 46 м², 1/5 эт.',
      status: 'promote',
      category: 'Тапки',
    },
    {
      id: 4,
      image:
        '/_nuxt/assets/images/Img-4.png',
      views: Math.floor(Math.random() * 1000),
      days: Math.floor(Math.random() * 10),
      price: 7500,
      unit: 'шт',
      title: 'Старые барабаны',
      status: 'promote',
      category: 'Покрывало',
    },
    {
      id: 5,
      image:
        '/_nuxt/assets/images/Img-5.png',
      views: Math.floor(Math.random() * 1000),
      days: Math.floor(Math.random() * 10),
      price: 7500,
      title: 'DMX сплиттер RJ45 to 4x XLR Stairville',
      status: 'promote',
      category: 'Гробы',
    },
    {
      id: 6,
      image:
        '/_nuxt/assets/images/Img-6.png',
      views: Math.floor(Math.random() * 1000),
      days: Math.floor(Math.random() * 10),
      price: 217500,
      title: 'Мотоцикл Honda',
      status: 'promote',
      category: 'Урны',
    },
    {
      id: 7,
      image: '/_nuxt/assets/images/Img-8.png',
      views: Math.floor(Math.random() * 1000),
      days: Math.floor(Math.random() * 10),
      price: 17900,
      title: 'Иж Юпитер 5',
      status: 'promote',
      category: 'Тапки',
    },
    {
      id: 8,
      image:
        '/_nuxt/assets/images/Img-8.png',
      views: Math.floor(Math.random() * 1000),
      days: Math.floor(Math.random() * 10),
      price: 7500,
      title: 'Пылесос кёрхер с водяным мешком для сбора пыли',
      status: 'hidden',
      category: 'Покрывало',
    },
  ];
});
