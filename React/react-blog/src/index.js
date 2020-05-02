import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import zhCH from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import App from "./Router";
import "./index.css";
moment.locale("zh-cn");

ReactDOM.render(
  <ConfigProvider locale={zhCH}>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
