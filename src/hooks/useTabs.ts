import { ChannelItem, fetchChannelAPI } from "@/apis/list";
import { useState, useEffect } from "react";

export const useTabs = () => {
  // 1. 创建状态变量，并使用泛型ChannelItem[]来限定useState返回值的类型
  const [channels, setChannels] = useState<ChannelItem[]>([]);

  // 2.  调用api接口获取真实数据
  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await fetchChannelAPI();
        // 3.  保存数据到状态变量中
        setChannels(res.data.data.channels);
      } catch (error) {
        throw new Error("fetch channel API error: " + error);
      }
    };
    getChannels();
  }, []);

  return { channels };
};
