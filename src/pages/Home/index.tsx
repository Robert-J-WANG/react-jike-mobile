import { useTabs } from "@/hooks/useTabs";
import "@/pages/Home/index.css";
import { Tabs } from "antd-mobile";
import { HomeList } from "./HomeList";
const Home = () => {
  // 组件中调用自定义hook函数，消费其返回的数据和方法
  const { channels } = useTabs();
  return (
    <>
      <div className="tabContainer">
        {/* tab标签布局区域 */}
        <Tabs defaultActiveKey="0">
          {/* 动态渲染数据到组件中 */}
          {channels.map((item) => (
            <Tabs.Tab title={item.name} key={item.id}>
              {/* list组件 */}

              <HomeList
                //把channelID传递过去，数值item.id转换为字符串
                channelID={"" + item.id}
              />
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </>
  );
};
export default Home;
