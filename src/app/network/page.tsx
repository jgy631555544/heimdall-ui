"use client";
import React from "react";
import { Tabs, List, Button } from "antd";
import MenuLayout from "@/layout/menuLayout";
import { useRouter } from "next/navigation";
const { TabPane } = Tabs;
import { LeftOutlined } from "@ant-design/icons";

const Service = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <MenuLayout>
      <div style={{ margin: "10px" }}>
        <Button icon={<LeftOutlined />} onClick={goBack}>
          Go Back
        </Button>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Service" key="1">
            <List
            // List properties and data for Service
            />
          </TabPane>
          <TabPane tab="Ingress" key="2">
            <List
            // List properties and data for Ingress
            />
          </TabPane>
        </Tabs>
      </div>
    </MenuLayout>
  );
};
export default Service;
