import bodyparser from 'koa-bodyparser';
import json from 'koa-json';
import logger from 'koa-logger';
import compress from 'koa-compress';
import cors from '@koa/cors';
import htmlMinifier from 'koa-html-minifier';
import helmet from 'koa-helmet';
import cacheControl from 'koa-ctx-cache-control';

import session from './session';
import auth from './auth';

const initMiddlewares = async (app) => {
  app.use(bodyparser({}));
  app.use(json({}));
  app.use(logger());
  app.use(compress());
  app.use(cors({
    credentials: true,
  }));
  app.use(htmlMinifier({
    collapseWhitespace: true,
  }));
  app.use(helmet());
  cacheControl(app);

  // custom middlewares
  app.use(session());
  app.use(auth());
};

export default initMiddlewares;
