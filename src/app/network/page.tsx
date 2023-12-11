"use client";
import React from "react";
import { Tabs, Button } from "antd";
import MenuLayout from "@/layout/menuLayout";
import { useRouter } from "next/navigation";
import { LeftOutlined } from "@ant-design/icons";
import Ingress from "@/app/network/ingress/page";
import Service from "@/app/network/service/page";

const Network = () => {
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
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Service",
              key: "1",
              children: <Service />,
            },
            {
              label: "Ingress",
              key: "2",
              children: <Ingress />,
            },
          ]}
        ></Tabs>
      </div>
    </MenuLayout>
  );
};
export default Network;
