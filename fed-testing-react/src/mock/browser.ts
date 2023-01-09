import { setupWorker } from "msw";
import { handlers } from "./handlers";

// 设置一个worker
export const worker = setupWorker(...handlers);
