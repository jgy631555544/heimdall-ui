"use client";
import React, { useState } from "react";
import { BarsOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [getItem("角色列表", "1", <BarsOutlined />)];

const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme={"light"}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: "32px",
            margin: "16px",
            borderRadius: "6px",
            textAlign: "center",
            lineHeight: "32px",
          }}
        >
          施耐德电气
        </div>
        <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Content style={{ margin: "10px", background: "#fff" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MenuLayout;
