import ReactDOM from "react-dom/client";
import "@/index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { fetchChannelAPI } from "@/apis/list";

// api接口测试
fetchChannelAPI().then((res) => {
  console.log(res.data.data.channels);
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
