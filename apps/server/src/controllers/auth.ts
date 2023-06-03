import crypto from 'crypto'
import Router, { RouterContext } from 'koa-router';
import { ResponseCode } from 'shared-model';

import userService from '../services/user';
import { responseWithCode, responseOK } from '../utils/response';
import { toPlainObject } from '../utils/data';

type RequestBody = {
  name: string;
  password: string;
  role_id: string;
}

class AuthController {
  init() {
    const router = new Router();
    router.post('/register', this.register);
    router.post('/login', this.login);
    router.post('/logout', this.logout);
    router.get('/user', this.loginUser);
    return router;
  }

  register = async (ctx: RouterContext) => {
    const { name, password, role_id } = ctx.request.body as RequestBody;
    const user = await userService.findByName(name);
    if (user) {
      responseWithCode(ctx, ResponseCode.ALREADY_REGISTERED)
      return;
    }

    // 使用随机数作为唯一标识
    const code = crypto.randomUUID();
    const result = await userService.create({ name, password, code });
    
    // 为用户设置角色
    const newUser = toPlainObject(result);
    const { id } = newUser;
    await userService.setRole({ user_id: id, role_id });
    responseOK(ctx);
  };

  login = async (ctx: RouterContext) => {
    const { name, password } = ctx.request.body as RequestBody;
    // 是否已注册
    const user = await userService.findByName(name);
    if (!user) {
      responseWithCode(ctx, ResponseCode.NO_USER);
      return;
    }
    // 校验密码
    const { password: savedPassword } = toPlainObject(user);
    if (savedPassword !== password) {
      responseWithCode(ctx, ResponseCode.NO_USER);
      return;
    }

    ctx.session.user = toPlainObject(user);
    responseOK(ctx, user);
  };

  logout = async (ctx: RouterContext) => {
    ctx.session = null;
    ctx.redirect('/');
  };

  loginUser = async (ctx: RouterContext) => {
    if (!ctx.session.user) {
      responseWithCode(ctx, ResponseCode.NO_USER)
      return;
    }

    responseOK(ctx, ctx.session.user);
  };
}

const controller = new AuthController().init();
export default controller;
