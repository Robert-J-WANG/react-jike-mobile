import { Image, List } from "antd-mobile";
import { useEffect, useState } from "react";
import { ListRes, fetchListAPI } from "@/apis/list";

// 定义params参数类型
type ParmasType = {
  channelID: string;
};
export const HomeList = (params: ParmasType) => {
  // 解构出params参数
  const { channelID } = params;

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
  }, []);
  return (
    <List header="文章列表">
      {articleList.results.map((item) => (
        <List.Item
          key={item.art_id}
          prefix={
            <Image
              src={item.cover.images?.[0]}
              style={{ borderRadius: 20 }}
              fit="cover"
              width={40}
              height={40}
            />
          }
          description={item.pubdate}
        >
          {item.title}
        </List.Item>
      ))}
    </List>
  );
};
