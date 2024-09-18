import React from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { login } from "../util/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { email, password } = values;
    const res = await login(email, password);
    console.log(res);
    if (res) {
      notification.success({
        message: "Login Successful",
        description: "Success",
      });
      navigate("/");
    } else {
      notification.error({
        message: "Login Error",
        description: "Error",
      });
    }
  };
  return (
    <div style={{ margin: "50px" }}>
      <h1 className=" font-bold text-2xl ">Đăng nhập</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginPage;
