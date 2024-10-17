import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const items = [
  {
    label: <Link to="/">Home Page</Link>,
    key: "home",
    icon: <MailOutlined />,
  },

  {
    label: <Link to="/test">Test</Link>,
    key: "test",
    icon: <MailOutlined />,
  },
  {
    label: <Link to="/test2">Test2</Link>,
    key: "test2",
    icon: <MailOutlined />,
  },
  {
    label: <Link to="/user">Users</Link>,
    key: "user",
    icon: <MailOutlined />,
  },
  {
    label: "Welcome",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        label: <Link to="login">Đăng nhập</Link>,
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
