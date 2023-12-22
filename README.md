## React + TypeScript + Vite

### 1. 项目环境创建

1. 安装vite工具，并创建项目

    ```bash
    yarn create vite
    ```

2. 设置项目名称

    ```bash
    ? Project name: › react-jike-mobile  // 项目名称
    ```

3. 选择react框架

    ```bash
    ? Select a framework: › - Use arrow-keys. Return to submit.
        Vanilla
        Vue
    ❯   React
        Preact
        Lit
        Svelte
        Solid
        Qwik
        Others
    ```

4. 选择开发语言环境ts

    ```
    ? Select a variant: › - Use arrow-keys. Return to submit.
    ❯   TypeScript
        TypeScript + SWC
        JavaScript
        JavaScript + SWC
    ```

5. 进入项目文件夹，并运行安装包依赖

    ```
    cd react-jike-mobile
    ```

    ```
    yarn 
    ```

6. 运行项目，测试是否安装成功

    ```
    yarn dev
    ```

7. 整理文件结构，生成空白页面

    - 删除src下的部分文件，只保留App.tsx, index.css, main.tsx, cite-env.d.ts

    - 清理App.tsx的内容

        ```
        function App() {
          return <>this is an app</>;
        }
        export default App;
        ```

    - 清理main.tsx的内容（删除严格模式）

        ```tsx
        import ReactDOM from "react-dom/client";
        import App from "./App.tsx";
        import "./index.css";
        
        ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
        ```



### 2. 安装antDesignMobile组件库

1. [ant Design Mobile](https://mobile.ant.design/zh)是ant Design家族里专门针对移动端的组件库

2. 查看文档，安装并使用

    - 安装

        ```
        yarn add antd-mobile
        ```

    - 直接引入组件即可，antd-mobile 会自动为你加载 css 样式文件

        ```
        import { Button } from 'antd-mobile'
        ```

    - 在 App中测试一下

        ```tsx
        import { Button } from "antd-mobile";
        function App() {
          return (
            <>
              <p>this is an app</p>
              <Button>this is a button</Button>
            </>
          );
        }
        export default App;
        ```

3. 在文档中搜索Button 按钮，探索更多属性的使用

    ```tsx
    import { Button } from "antd-mobile";
    function App() {
      return (
        <>
          <p>this is an app</p>
          <Button color="success" fill="outline">  {/* 鼠标放置到Button时，ts会自动提示属性和属性值 */}
            this is a button
          </Button>
        </>
      );
    }
    export default App;
    ```



### 3. 配置路径别名

1. 使用场景：项目中各个模块之间的相互导入导出，可以通过@别名路径来做路径的简化。经过配置@相当于src目录。

2. 比如：

    - 配置之前的路径

        ```tsx
        import Detail from ' .. /pages/Detail '
        ```

    - 配置之后的路径

        ```tsx
        import Detail from '@/pages/Detail '
        ```

3. 步骤：

    - 让Vite做路径解析（真实的路劲转换）

        - vite.config.ts中添加配置对象

            ```ts
            import { defineConfig } from "vite";
            import react from "@vitejs/plugin-react";
             // 引入path对象
            import path from "path";
            
            // https://vitejs.dev/config/
            export default defineConfig({
              plugins: [react()],
            
              // 配置路径别名
              resolve: {
                alias: {
                  "@": path.resolve(__dirname, "src"),
                },
              },
            });
            ```

        - 如果你是刚创建的TypeScript项目，有可能会遇到`找不到模块“path”或其相应的类型声明`的错误提示，安装`@types/node`即可

            ```bash
            yarn add @types/node -D
            ```

    - 让VSCode做智能路径提示（开发者体验）

        -  tsconfig.json中添加配置项

            ```json
            {
              "compilerOptions": {
               ...
                "skipLibCheck": true,
            
                // 别名路径的配置项
                "baseUrl": ".",
                "paths": {
                  "@/*": ["src/*"]
                },
            
                /* Bundler mode */
                "moduleResolution": "bundler",
                "allowImportingTsExtensions": true,
               ...
              }
            ```

4. 测试配置是否成功

    -  修改main.ts的路径

        ```tsx
        import ReactDOM from "react-dom/client";
        import App from "@/App"; // 使用路径别名
        import "@/index.css"; // 使用路径别名
        
        ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
        ```

    - 键入@之后会有自定提示的引用文件



### 4. 配置基础路由

1. 安装路由包

    ```bash
    yarn add react-router-dom  
    ```

2. 创建基础page组件，用来匹配路由

    - src文件下创建pages文件夹，并创建Home和Detail页面组件

    - Home组件文件夹下创建index组件界面

        ```tsx
        const Home = () => {
          return (
            <>
              <p>this is Home</p>
            </>
          );
        };
        export default Home;
        ```

    - Detail组件文件夹下创建index组件界面

        ```tsx
        const Detail = () => {
          return (
            <>
              <p>this is Detail</p>
            </>
          );
        };
        export default Detail;
        ```

3. 创建路由表文件

    -  src文件下创建router文件夹，并创建index.tsx路由文件( 注意：这里是tsx格式，ts或js的话，类型报错)

    - index.ts文件中配置路由： 使用**createBrowserRouter**方法创建router实例并导出，createBrowserRouter方法插入配置数组对象（一个一个路由对象）

        ```ts
        import { createBrowserRouter } from "react-router-dom";
        import Home from "@/pages/Home";
        import Detail from "@/pages/Detail/index";
        
        const router = createBrowserRouter([
          {
            path: "/",
            element: "<Home/>",
          },
          {
            path: "/detail",
            element: "<Detail/>",
          },
        ]);
        
        export { router };
        ```

4. Main.ts文件中导入路由表

    - 引入RouterProvider，并传入router对象

        ```tsx
        import ReactDOM from "react-dom/client";
        // import App from "@/App";
        import "@/index.css";
        
        
        import { RouterProvider } from "react-router-dom";
        import { router } from "@/router";
        
        ReactDOM.createRoot(document.getElementById("root")!).render(
          <RouterProvider router={router} /> // 这里替换掉App组件
        );
        ```

5. 测试配置是否成功
    - http://localhost:5173/
    - http://localhost:5173/detail







​		
