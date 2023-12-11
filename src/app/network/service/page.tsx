import {Input, Table} from "antd";
import React from "react";
import {ColumnsType} from "antd/es/table";
interface DataType {
    name: string;
    namespace: string;
    labels: string;
    type: string;
    clusterIp: string;
    internalEndpoint: string;
    externalEndpoint: string | null;
    createdAt: string;
}

const data: DataType[] = [
    {
        name: "pop-core-apphost",
        namespace: "to",
        labels: "app:pop-core-apphost",
        type: "ClusterIP",
        clusterIp: "172.26.208.92",
        internalEndpoint: "pop-core-apphost:80 TCP",
        externalEndpoint: null,
        createdAt: "May 17, 2021, 21:03:31 UTC+8"
    },
    {
        name: "pop-core-mobilehost",
        namespace: "to",
        labels: "app:pop-core-mobilehost",
        type: "ClusterIP",
        clusterIp: "172.26.210.11",
        internalEndpoint: "pop-core-mobilehost:80 TCP",
        externalEndpoint: null,
        createdAt: "May 17, 2021, 21:03:34 UTC+8"
    },
    {
        name: "pop-core-webhost",
        namespace: "to",
        labels: "app:pop-core-webhost",
        type: "ClusterIP",
        clusterIp: "172.26.209.52",
        internalEndpoint: "pop-core-webhost:80 TCP",
        externalEndpoint: null,
        createdAt: "May 17, 2021, 21:03:32 UTC+8"
    },
    {
        name: "pop-ticket-gateway-app",
        namespace: "to",
        labels: "app:pop-ticket-gateway-app",
        type: "ClusterIP",
        clusterIp: "172.26.208.93",
        internalEndpoint: "pop-ticket-gateway-app:80 TCP",
        externalEndpoint: null,
        createdAt: "Jan 19, 2022, 14:04:53 UTC+8"
    },
    {
        name: "pop-ui-webui",
        namespace: "to",
        labels: "app:pop-ui-webui",
        type: "ClusterIP",
        clusterIp: "172.26.211.108",
        internalEndpoint: "pop-ui-webui:80 TCP",
        externalEndpoint: null,
        createdAt: "May 17, 2021, 21:01:24 UTC+8"
    },
    {
        name: "popticket-app",
        namespace: "to",
        labels: "app:popticket-app",
        type: "ClusterIP",
        clusterIp: "172.26.208.14",
        internalEndpoint: "popticket-app:80 TCP",
        externalEndpoint: null,
        createdAt: "Jan 10, 2022, 10:12:16 UTC+8"
    }
];

const columns: ColumnsType<DataType> = [
    {
        title: "名称", // "Role Name"
        dataIndex: 'name',
        render: (text: string) => <div>{text}</div>,
    },
    {
        title: "命名空间", // "Namespace"
        dataIndex: 'namespace',
        render: (text: string) => <div>{text}</div>,
    },
    {
        title: "标签", // "Labels"
        dataIndex: 'labels',
        render: (text: string) => <div>{text}</div>,
    },
    {
        title: "类型", // "Type"
        dataIndex: 'type',
        render: (text: string) => <div>{text}</div>,
    },
    {
        title: "集群IP", // "Cluster IP"
        dataIndex: 'clusterIp',
        render: (text: string) => <div>{text}</div>,
    },
    {
        title: "内部端点", // "Internal Endpoint"
        dataIndex: 'internalEndpoint',
        render: (text: string) => <div>{text}</div>,
    },
    {
        title: "外部端点", // "External Endpoint"
        dataIndex: 'externalEndpoint',
        render: (text: string | null) => <div>{text ?? '-'}</div>,
    },
    {
        title: "创建时间", // "Created At"
        dataIndex: 'createdAt',
        render: (text: string) => <div>{text}</div>,
    }
];
const Service = () => (
      <div style={{ margin: "10px" }}>
        <Table pagination={false} columns={columns} dataSource={data} />
      </div>
);
export default Service;
