"use client";
import React from "react";
import { Button, Input, Layout, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import MenuLayout from "@/layout/menuLayout";
const { Header, Content, Footer, Sider } = Layout;
import Link from "next/link";

interface DataType {
  key: string;
  name: string;
  image: string;
  created: string;
  updated: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "角色名称",
    dataIndex: "name",
    render: (text) => <div>{text}</div>,
  },
  {
    title: "镜像",
    dataIndex: "image",
    render: (text) => <div>{text}</div>,
  },
  {
    title: "创建时间",
    dataIndex: "created",
    render: (text) => <div>{text}</div>,
  },
  {
    title: "更新时间",
    dataIndex: "updated",
    render: (text) => <div>{text}</div>,
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Link href="/network">
        <Button>详情</Button>
      </Link>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "pop-core-apphost",
    image:
      "se-ds-registry.cn-hangzhou.cr.aliyuncs.com/se-rem-test/pop-core-apphost:dev-v1.0.7993",
    created: "2021-08-31 11:11:11",
    updated: "2021-12-31 12:12:12",
  },
  {
    key: "2",
    name: "pop-core-mobilehost",
    image:
      "se-ds-registry.cn-hangzhou.cr.aliyuncs.com/se-rem-test/pop-core-mobilehost:dev-v1.0.7993",
    created: "2021-08-31 13:13:13",
    updated: "2021-12-31 14:14:14",
  },
  {
    key: "3",
    name: "pop-core-webhost",
    image:
      "se-ds-registry.cn-hangzhou.cr.aliyuncs.com/se-rem-test/pop-core-webhost:dev-v1.0.7993",
    created: "2021-08-31 15:15:15",
    updated: "2021-12-31 16:16:16",
  },
  {
    key: "4",
    name: "pop-ui-webui",
    image:
      "se-ds-registry.cn-hangzhou.cr.aliyuncs.com/se-rem-test/puma-staticserver:release-v1.0.224",
    created: "2021-08-31 17:17:17",
    updated: "2021-12-31 18:18:18",
  },
];

const Service = () => (
  <MenuLayout>
    <div style={{ margin: "10px" }}>
      <div
        style={{
          display: "flex",
          margin: "10px 0",
        }}
      >
        <Input.Search placeholder="搜索尚未实现" style={{ width: "300px" }} />
      </div>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  </MenuLayout>
);
export default Service;
