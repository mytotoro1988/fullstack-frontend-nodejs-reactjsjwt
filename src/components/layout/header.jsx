import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    label: "Home Page",
    key: "home",
    icon: <MailOutlined />,
  },

  {
    label: "Users",
    key: "users",
    icon: <MailOutlined />,
  },
  {
    label: "Welcome",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        label: "Đăng nhập",
        key: "login",
      },
      {
        label: "Đăng xuất",
        key: "logout",
      },
    ],
  },
];
const Header = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
