import Router from 'koa-router';
import authController from './auth';
import userController from './user';
import roleController from './role';
import productController from './product';

const initControllers = async (app) => {
  const router = new Router();
  router.use('/api/auth', authController.routes());
  router.use('/api/user', userController.routes());
  router.use('/api/role', roleController.routes());
  router.use('/api/product', productController.routes());
  app.use(router.routes());
};

export default initControllers;