import { ChannelItem, fetchChannelAPI } from "@/apis/list";
import "@/pages/Home/index.css";
import { Tabs } from "antd-mobile";
import { useEffect, useState } from "react";
const Home = () => {
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
  return (
    <>
      <div className="tabContainer">
        {/* tab标签布局区域 */}
        <Tabs defaultActiveKey="1">
          {/* 4. 动态渲染数据到组件中 */}
          {channels.map((item) => (
            <Tabs.Tab title={item.name} key={item.id}>
              {/* list组件 */}
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </>
  );
};
export default Home;
