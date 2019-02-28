---
title: 一个基础的todomvc包
---
## TodoMVC App Template
## 实现步骤

- 克隆地址

  ```
  https://github.com/tastejs/todomvc-app-template
  ```

- 在本地创建文件夹然后Git bash克隆项目到本地

- 安装依赖

  ```shell
  npm install
  ```

- 去掉不必要的部分

  ```shell
  # 这是去掉页面中的侧边栏部分
  npm uninstall todomvc-common -S
  ```

  去掉index.html中的对应样式和js文件

  ```
  <!--<link rel="stylesheet" href="node_modules/todomvc-common/base.css">-->
  <!--<script src="node_modules/todomvc-common/base.js"></script>-->
  ```

