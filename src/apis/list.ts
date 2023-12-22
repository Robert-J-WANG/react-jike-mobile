import { http } from "@/utils";
// import { ResType } from "@/apis/sharedType";

//1. 定义通用的泛型参数:传递不同的T，定义不同的data类型
// type ResType<T> = {
//   data: T;
//   message: string;
// };

/* --------------------- channel数据部分 -------------------- */
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

/* ----------------------- 文章列表数据部分 ----------------------- */
// 定义文章数据对象类型
type ListItem = {
  art_id: string;
  title: string;
  aut_id: string;
  comm_count: number;
  pubdate: string;
  aut_name: string;
  is_top: 0 | 1;
  cover: {
    type: string;
    images: string[];
  };
};

export type ListRes = {
  results: ListItem[];
  pre_timestamp: string;
};

// 请求参数类型
type ParmasType = {
  channel_id: string;
  timestamp: string;
};

// 定义获取文章列表的API
export const fetchListAPI = (params: ParmasType) => {
  return http.request<ResType<ListRes>>({
    url: "articles",
    params,
  });
};
