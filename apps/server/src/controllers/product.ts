import Router, { RouterContext } from 'koa-router';
import { Op } from 'sequelize';
import _ from 'lodash';
import { ResponseCode } from 'shared-model';

import productService from '../services/product';
import { responseWithCode, responseOK } from '../utils/response';

type RequestBody = {
  name: string;
  price: number;
};

class ProductController {   
  init() {
    const router = new Router();
    router.get('/', this.getAll);
    router.get('/:id', this.get);
    router.put('/:id', this.put);
    router.delete('/:id', this.delete);
    router.post('/', this.post);
    return router;
  }

  getAll = async (ctx: RouterContext) => {
    const { page = 0, count = 0, name = '' } = ctx.query;

    const where = {} as any;
    if (!_.isEmpty(name)) {
      where.name = {
        [Op.like]: `%${_.trim(name as string)}%`,
      }
    }

    const result = await productService.findAll(Number(page), Number(count), where);
    responseOK(ctx, result); 
  }

  get = async (ctx: RouterContext) => {
    const { id } = ctx.params;
    const result = await productService.findById(id);

    if (_.isEmpty(result)) {
      responseWithCode(ctx, ResponseCode.PARAM_ERROR, 'invalid id');
      return;
    }

    responseOK(ctx, result);
  };

  put = async (ctx: RouterContext) => {
    const { id } = ctx.params;
    const { name = '', price = 0 } = ctx.request.body;
    const result = await productService.modify(id, { name: String(name), price: Number(price) });
    
    if (_.isEmpty(result)) {
      responseWithCode(ctx, ResponseCode.PARAM_ERROR, 'invalid id');
      return;
    }

    responseOK(ctx, result);
  };

  delete = async (ctx: RouterContext) => {
    const { id } = ctx.params;
    const result = await productService.remove(id);
    responseOK(ctx, result);
  };

  post = async (ctx: RouterContext) => {
    const { name, price } = ctx.request.body as RequestBody;
    console.log(name, price);
    const { id } = ctx.session.user;
    const result = await productService.create({ name, price, user_id: id });
    responseOK(ctx, result);
  };
}

const controller = new ProductController().init();
export default controller;
