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
