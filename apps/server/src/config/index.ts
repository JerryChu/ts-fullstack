import merge from 'lodash.merge';

const config = {
  // 默认配置
  default: {
    sessionCookieMaxAge: 2 * 60 * 60 * 1000,

    homepagePath: '/',
    loginPath: '/login.html',
    loginWhiteList: {
      '/500.html': ['get'],
      '/api/health': ['get'],
      '/api/csrf/script': ['get'],
      '/api/login': ['post'],
      '/api/login/github': ['get'],
      '/api/login/github/callback': ['get'],
    },

    githubStrategyOptions: {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:9000/api/login/github/callback',
    },

    db: {
      dialect: 'mysql',
      port: 3306,
      timezone: '+08:00',
      benchmark: true,
      define: {
        underscored: true,
      },
    },

    redisOptions: {
      host: 'localhost',
      port: 6379,
    },
  },

  // 本地配置
  development: {
    db: {
      host: 'localhost',
      user: 'root',
      password: 'LVoHNoJBnQoyA6',
      database: 'demo',
      logging: console.log,
    },
  },

  // 测试配置
  test: {
    db: {
      host: '127.0.0.1',
      user: 'root',
      password: 'LVoHNoJBnQoyA6',
      database: 'demo',
    },
  },

  // 部署配置
  production: {
    sessionCookieMaxAge: 3 * 24 * 60 * 60 * 1000,

    githubStrategyOptions: {
      callbackURL: 'http://localhost:9090/api/login/github/callback',
    },

    db: {
      database: 'main',
    },
  },
};

export default merge(
  {},
  config.default,
  config[process.env.NODE_ENV || 'development']
);
