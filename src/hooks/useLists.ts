import { ListRes, fetchListAPI } from "@/apis/list";
import { useEffect, useState } from "react";

export const useLists = (channelID: string) => {
  /* ------------------- 调用API接口，获取真实数据 ------------------- */
  const [articleList, setArticleList] = useState<ListRes>({
    results: [],
    pre_timestamp: "" + new Date().getTime(),
  });

  useEffect(() => {
    const getArticleList = async () => {
      try {
        const res = await fetchListAPI({
          channel_id: channelID, // 使用params参数
          timestamp: "" + new Date().getTime,
        });
        setArticleList({
          results: res.data.data.results,
          pre_timestamp: res.data.data.pre_timestamp,
        });
      } catch (error) {
        throw new Error("fetchListAPI error");
      }
    };
    getArticleList();
  }, [channelID]);

  /* --------------------- 无限滚动页面加载的逻辑 -------------------- */
  const [hasMore, setHasMore] = useState(true);

  // 注意：loadMore是异步函数，需要加async字段
  const loadMore = async () => {
    /* ----------------------- 页面无限滚动的逻辑 ---------------------- */
    // 2. 发起下一次请求，加载下一页数据
    try {
      const res = await fetchListAPI({
        channel_id: channelID,
        // 需要上次请求的时间戳来进行下次请求
        timestamp: articleList.pre_timestamp,
      });
      setArticleList({
        // 3. 把老数据和新数据拼接处理 ： [ ...oldList, ...newList ]
        results: [...articleList.results, ...res.data.data.results],
        pre_timestamp: res.data.data.pre_timestamp,
      });
      // 4. 更新停止监听边界值 ： hasMore
      if (res.data.data.results.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      throw new Error("fetchListAPI error");
    }
  };

  return { articleList, hasMore, loadMore };
};
