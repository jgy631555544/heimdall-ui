import { Form, Modal, Select } from "antd";

const ServiceConfig = ({
  isVisible,
  onOk,
  onCancel,
}: {
  isVisible: boolean;
  onOk: () => void;
  onCancel: () => void;
}) => {
  return (
    <Modal title="更新配置" open={isVisible} onOk={onOk} onCancel={onCancel}>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
        <Form.Item label="服务名称" name="gatewayType">
          <Select>
            <Select.Option key={"1"} value="type1">
              pop-core-webhost
            </Select.Option>
            <Select.Option key={"2"} value="type2">
              pop-core-mobilehost
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="端口" name="endpoint">
          <Select>
            <Select.Option key={"1"} value="80">
              80
            </Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ServiceConfig;
