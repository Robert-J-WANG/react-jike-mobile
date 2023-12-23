import { useDetails } from "@/hooks/useDetails";
import { NavBar } from "antd-mobile";

const Detail = () => {
  const { detail, goBack } = useDetails();

  // 设置未获取数据之前加载项，可防止返回值时带标签的字符串的渲染时的类型错误
  if (!detail) {
    return <div>Loading...</div>;
  }
  // 获取数据之后渲染
  return (
    <>
      <NavBar onBack={goBack}>{detail?.aut_name}</NavBar>
      {/* 关于返回值时带标签的字符串的渲染 */}
      {/* content: "<p>22222</p>" */}
      <div dangerouslySetInnerHTML={{ __html: detail?.content }}></div>
    </>
  );
};
export default Detail;
