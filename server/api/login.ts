// server/api/login.ts
import { H3Event, sendError } from 'h3';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export default async (event: H3Event) => {
    const body = await readBody(event);
    const { login, password } = body;

    if (login === 'admin' && password === 'secret') {
        const token = jwt.sign({ login }, SECRET_KEY, { expiresIn: '1h' });

        // Устанавливаем cookie с токеном
        setCookie(event, 'token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });

        return { message: 'Авторизация успешна' };
    } else {
        sendError(event, createError({ statusCode: 401, statusMessage: 'Неверные учетные данные' }));
    }
};
