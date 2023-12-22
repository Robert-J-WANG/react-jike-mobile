/// <reference types="vite/client" />

// api接口响应参数的泛型（公共部分）
type ResType<T> = {
  data: T;
  message: string;
};
