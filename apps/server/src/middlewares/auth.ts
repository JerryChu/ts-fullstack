import { RouterContext } from 'koa-router';
import { ResponseCode } from 'shared-model';

import { responseWithCode } from '../utils/response';
import UserRole, { UserRoleType } from '../models/user_role';
import { toPlainObject } from '../utils/data';
import { RolePermissionType } from '../models/role_permission';

const whiteList = [
  '/api/auth/register',
  '/api/auth/login',
  '/api/auth/logout',
  '/api/auth/user',
];

export default () => {
  return async (ctx: RouterContext, next: () => Promise<any>) => {
    const { path } = ctx;
    // console.log('ctx: ', ctx);

    if (whiteList.includes(path)) {
      return await next();
    }

    const { user } = ctx.session;
    console.log('current user: ', user);
    if (!user) { 
      responseWithCode(ctx, ResponseCode.NO_AUTH);
      return;
    };

    // /api/product -> product
    const requestResource = path.split('/')[2];
    if (!requestResource) {
      responseWithCode(ctx, ResponseCode.PARAM_ERROR, 'invalid request url');
      return;
    }
    console.log('Request operation: ', ctx.method, requestResource);
    
    // 一个用户会有多个角色（role），一个角色会有多个权限（permission）
    const { id } = user;
    const result = await UserRole.findByUserId(id);
    const userRoles = toPlainObject(result);
    // 确定用户在特定资源（resource）的所有操作权限（operation）
    const operations = userRoles.map((role: UserRoleType) => {
      const { role_permissions: permissions } = role;
      return permissions.filter(({ resource_code: resource }) => requestResource === resource)
        .map(({ operation }: RolePermissionType) => operation.split(','))
        .reduce((accumulator: string[], curValue: string[]) => accumulator.concat(curValue), []);
    }).reduce((accumulator: string[], curValue: string[]) => accumulator.concat(curValue), []);
    console.log('Allowed operations: ', operations, requestResource);

    // 判断用户是否有请求权限
    if (!operations.includes(ctx.method)) {
      responseWithCode(ctx, ResponseCode.NO_AUTH);
      return;
    }
    
    await next();
  };
};