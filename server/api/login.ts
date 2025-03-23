import type { H3Event } from 'h3';
import { sendError } from 'h3';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export default async (event: H3Event) => {
  const body = await readBody(event);
  const { login, password } = body;

  if (login === 'admin' && password === 'secret') {
    const token = jwt.sign({ login }, SECRET_KEY, { expiresIn: '1h' });

    // Возвращаем токен в теле ответа
    return { token };
  } else {
    sendError(
      event,
      createError({ statusCode: 401, statusMessage: 'Неверные учетные данные' })
    );
  }
};
