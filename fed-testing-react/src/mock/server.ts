import {setupServer} from 'msw/node';
import { handlers } from './handlers';

// 设置一个服务器
export const server = setupServer(...handlers)