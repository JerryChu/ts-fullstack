export enum ResponseCode {
  OK = 200, // 成功
  NO_AUTH = 460, // 无权限
  NO_USER = 461, // 无效用户 
  ALREADY_REGISTERED = 462, // 重复注册
  INVALID_SESSION = 463, // 无效session
  LOGIN_FAIL = 464, // 登录失败
  PARAM_ERROR = 465, // 参数错误
  SERVER_ERROR = 500, // 服务器错误
};

export const responseConfig = {
  [ResponseCode.OK]: {
    msg: 'ok',
  },
  [ResponseCode.NO_AUTH]: {
    msg: 'not allowed',
  },
  [ResponseCode.NO_USER]: {
    msg: 'user not registered or wrong password',
  },
  [ResponseCode.ALREADY_REGISTERED]: {
    msg: 'already registered',
  },
  [ResponseCode.INVALID_SESSION]: {
    msg: 'session outdated',
  },
  [ResponseCode.LOGIN_FAIL]: {
    msg: 'login fail',
  },
  [ResponseCode.PARAM_ERROR]: {
    msg: 'invalid request params',
  },
  [ResponseCode.SERVER_ERROR]: {
    msg: 'server error',
  },
};
