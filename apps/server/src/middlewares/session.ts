import RedisStore from 'koa-redis';
import KoaSession from 'koa-generic-session';
import config from '../config';

const {
  redisOptions,
  sessionCookieMaxAge,
} = config;

const sessionOptions = {
  key: 'session',
  store: RedisStore(redisOptions) as any as KoaSession.SessionStore,
  ttl: sessionCookieMaxAge,
  rolling: true,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: null,
    overwrite: true,
    signed: true,
  },
};

export default () => KoaSession(sessionOptions);
