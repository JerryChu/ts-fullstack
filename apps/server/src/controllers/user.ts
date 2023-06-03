import Router, { RouterContext } from 'koa-router';

import UserService from '../services/user';

class UserController {   
  init() {
    const router = new Router();
    router.get('/test', this.test);
    return router;
  }

  test = async (ctx: RouterContext) => {
    ctx.response.body = 'user';
  };
}

const controller = new UserController().init();
export default controller;
