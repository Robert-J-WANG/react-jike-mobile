import { http } from "@/utils";
// import { ResType } from "@/apis/sharedType";

//1. 定义通用的泛型参数:传递不同的T，定义不同的data类型
// type ResType<T> = {
//   data: T;
//   message: string;
// };

//定义具体的接口数据类型（channel的类型）
export type ChannelItem = {
  id: number;
  name: string;
};

//2. channels的类型
type ChannelRes = {
  channels: ChannelItem[];
};

// 定义请求频道列表的api,并传入数据类型(组合上面的 1 和 2 类型)
export const fetchChannelAPI = () => {
  return http.request<ResType<ChannelRes>>({
    url: "/channels",
  });
};
