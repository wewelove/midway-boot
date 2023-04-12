import { MidwayConfig } from '@midwayjs/core';

export default {
  midwayLogger: {
    default: {
      dir: '/home/app/logs', // 日志根目录
      maxSize: '10m', // 日志切割
      maxFiles: '7d', // 日志清理
    },
    clients: {
      coreLogger: {
        level: 'warn',
        consoleLevel: 'warn',
      },
      appLogger: {
        level: 'warn',
        consoleLevel: 'warn',
      },
    },
  },
} as MidwayConfig;
