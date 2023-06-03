import Koa from 'koa';

import initMiddlewares from './middlewares';
import initControllers from './controllers';

async function bootstrap() {
  const app = new Koa();
  app.keys = ['demo'];
  
  await initMiddlewares(app);
  await initControllers(app);

  const port = 3333;

  app.on('error', (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    switch (error.code) {
      case 'EACCES':
        console.error(`${port} requires elevated privileges`);
        process.exit(1);
      case 'EADDRINUSE':
        console.error(`${port} is already in use`);
        process.exit(1);
      default:
        throw error;
    }
  });

  app.on('listening', () => {
    console.log('Listening on port: %d', port);
  });

  app.listen(port);
}

bootstrap();
