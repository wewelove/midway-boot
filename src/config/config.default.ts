import { MidwayConfig } from '@midwayjs/core';
import { User } from '../entity/user';
console.log(process.env.MYSQL_USERNAME);
export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1656642815846_4983',
  app: {
    security: {
      prefix: '/api',
      ignore: ['/api/login'],
    },
  },
  koa: {
    port: 7001,
  },
  // ORM 和数据库配置
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: 3306,
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
        logging: false,
        entities: [User],
      },
    },
  },
  // redis 配置
  redis: {
    client: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD,
      db: process.env.REDIS_DB,
    },
  },
  // jwt 配置
  jwt: {
    secret: 'setscrew',
    expiresIn: 60 * 60 * 24,
  },
  // swagger 配置
  swagger: {
    title: 'midway-boot',
    description: 'Midway 脚手架',
    auth: {
      authType: 'bearer',
    },
  },
  // 跨域设置
  cors: {
    allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
    credentials: true,
    origin: (req: any) => req.headers.origin,
  },
  // 日志配置
  midwayLogger: {
    clients: {
      coreLogger: {
        level: 'debug',
        consoleLevel: 'debug',
      },
      appLogger: {
        level: 'debug',
        consoleLevel: 'debug',
      },
    },
  },
} as MidwayConfig;
