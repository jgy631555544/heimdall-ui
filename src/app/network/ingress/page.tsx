import { Button, Table } from "antd";
import React from "react";
import { ColumnsType } from "antd/es/table";
import ServiceConfig from "@/app/network/ingress/components/serviceConfig";

interface DataType {
  name: string;
  gatewayType: string;
  rules: string[];
  endpoint: string;
  createdAt: string;
}

const data: DataType[] = [
  {
    name: "ingress-pop-core-apphost",
    gatewayType: "Nginx",
    rules: ["t-fmapp.cn.energymost.net  =>  pop-core-apphost"],
    endpoint: "172.26.197.120",
    createdAt: "May 17, 2021, 21:03:31",
  },
  {
    name: "ingress-pop-core-mobile-e",
    gatewayType: "Nginx",
    rules: [
      "mobiletest.fm.energymost.com/  =>  pop-core-mobilehost",
      "mobile-to.fm.energymost.com/  =>  pop-core-mobilehost",
    ],
    endpoint: "172.26.197.120",
    createdAt: "May 21, 2021, 16:57:17",
  },
  {
    name: "ingress-pop-core-mobilehost",
    gatewayType: "Nginx",
    rules: ["t-fmmobile.cn.energymost.net  =>  pop-core-mobilehost"],
    endpoint: "172.26.197.120",
    createdAt: "May 17, 2021, 21:03:34",
  },
  {
    name: "ingress-pop-core-webhost",
    gatewayType: "Nginx",
    rules: ["t-fmweb.cn.energymost.net  =>  pop-core-webhost"],
    endpoint: "172.26.197.120",
    createdAt: "May 17, 2021, 21:03:32",
  },
  {
    name: "ingress-pop-core-webhost-e",
    gatewayType: "Nginx",
    rules: [
      "web-api-to.fm.energymost.com/  =>  pop-core-webhost",
      "box-file-test.fm.energymost.com/  =>  pop-core-webhost",
    ],
    endpoint: "172.26.197.120",
    createdAt: "May 21, 2021, 16:58:41",
  },
  {
    name: "ingress-pop-ticket-gateway-app",
    gatewayType: "Nginx",
    rules: ["pop-ticket-api-to.energymost.com/  =>  pop-ticket-gateway-app"],
    endpoint: "172.26.197.120",
    createdAt: "Jan 19, 2022, 14:04:53",
  },
  {
    name: "ingress-pop-ui-webui",
    gatewayType: "Nginx",
    rules: ["*.fm.energymost.com/  =>  pop-ui-webui"],
    endpoint: "172.26.197.120",
    createdAt: "May 21, 2021, 15:40:23",
  },
  {
    name: "ingress-popticket-app",
    gatewayType: "Nginx",
    rules: ["f-ticket.cn.energymost.net  =>  popticket-app"],
    endpoint: "172.26.197.120",
    createdAt: "Jan 10, 2022, 10:12:16",
  },
];

const Ingress = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log("点击确定");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    console.log("点击取消");
    setIsModalVisible(false);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "名称",
      dataIndex: "name",
      render: (text: string) => <div>{text}</div>,
    },
    {
      title: "网关类型",
      dataIndex: "gatewayType",
      render: (text: string) => <div>{text}</div>,
    },
    {
      title: "规则",
      dataIndex: "rules",
      render: (rules: string[]) => {
        return (
          <>
            {rules.map((text, index) => (
              <div key={index}>{text}</div>
            ))}
          </>
        );
      },
    },
    {
      title: "端点",
      dataIndex: "endpoint",
      render: (text: string) => <div>{text}</div>,
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      render: (text: string) => <div>{text}</div>,
    },
    {
      title: "操作",
      key: "action",
      render: () => <Button onClick={showModal}>更新</Button>,
    },
  ];
  return (
    <div style={{ margin: "10px" }}>
      <Table pagination={false} columns={columns} dataSource={data} />
      <ServiceConfig
        isVisible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};
export default Ingress;
