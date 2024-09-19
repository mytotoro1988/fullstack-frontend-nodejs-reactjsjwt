import React, { useEffect, useState } from "react";
import { getUser } from "../util/api";
import { Table } from "antd";
const UserPage = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await getUser();
      setUser(res.data);
    };
    fetchHelloWorld();
  }, []);

  const dataSource = user;

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];
  return (
    <div>
      UserPage
      <div className="p-5">
        <Table
          bordered
          rowKey="_id"
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default UserPage;
