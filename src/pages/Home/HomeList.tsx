import { Image, InfiniteScroll, List } from "antd-mobile";
import { useLists } from "@/hooks/useLists";

// 定义params参数类型
type ParmasType = {
  channelID: string;
};
export const HomeList = (params: ParmasType) => {
  // 解构出params参数
  const { channelID } = params;

  // 调用自定义hook，并解构出所需的数据和方法
  const { articleList, hasMore, loadMore, goToDetail } = useLists(channelID);
  return (
    <>
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
            // 点击跳转路由，并携带参数id
            onClick={() => goToDetail(item.art_id)}
          >
            {item.title}
          </List.Item>
        ))}
      </List>
      {/* 添加无限滚动页面的组件 */}
      <InfiniteScroll
        // 触发无限滚动的回调函数
        loadMore={loadMore}
        // 是否继续无限滚动的开关
        hasMore={hasMore}
        // 距离页面底部多少时触发？可选，默认是250px
        threshold={10}
      />
    </>
  );
};
