import { Button } from "antd-mobile";
function App() {
  return (
    <>
      <p>this is an app</p>
      <Button color="success" fill="outline">
        {/* 鼠标放置到Button时，ts会自动提示属性和属性值 */}
        this is a button
      </Button>
    </>
  );
}
export default App;
