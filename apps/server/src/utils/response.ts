import { RouterContext } from 'koa-router';
import { ResponseCode, responseConfig } from 'shared-model';

/**
 * 成功返回对象
 * @param ctx context
 * @param data 额外数据
 */
export function responseOK(ctx: RouterContext, data: any = {}) {
  return responseWithCode(ctx, ResponseCode.OK, data);
}

/**
 * 服务器错误返回对象
 * @param ctx context
 * @param data 额外数据
 */
export function responseServerError(ctx: RouterContext, data: any = {}) {
  return responseWithCode(ctx, ResponseCode.SERVER_ERROR, data);
}

/**
 * 按 reponse 类型生成返回对象
 * @param ctx context
 * @param code response 错误码
 * @param data 额外数据
 */
export function responseWithCode(ctx: RouterContext, code: ResponseCode, data: any = {}) {
  const { msg } = responseConfig[code];
  const ret = code === ResponseCode.OK ? 0 : code;
  ctx.body = { ret, msg, data };
  ctx.status = code;
}