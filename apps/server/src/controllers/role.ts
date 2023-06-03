import Router, { RouterContext } from 'koa-router';
import RoleService from '../services/role';
import { responseOK } from '../utils/response';

class RoleController {   
  init() {
    const router = new Router();
    router.get('/all', this.findAll);
    return router;
  }

  findAll = async (ctx: RouterContext) => {
    const roles = await RoleService.findAll();
    responseOK(ctx, roles); 
  };
}

const controller = new RoleController().init();
export default controller;
