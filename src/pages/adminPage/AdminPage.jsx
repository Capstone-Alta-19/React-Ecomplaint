import React from "react";
import "./adminPage.css";
import { EcomplainzWhite } from "../../assets";
import { Button, Form, Input } from "antd";
import { useLogin } from "./hooks/useAuth";
import Gap from "../../components/gap/Gap";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

const AdminPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { Text } = Typography;

  //API LOGIN
  const [isLoadingLogin, login] = useLogin();

  const onFinish = (values) => {
    login(values, () => {
      navigate("/dashboard");
    });
  };

  return (
    <div className="layout-admin">
      <div className="content-admin">
        <div className="form-admin">
          <Gap height={80} />
          <img src={EcomplainzWhite} alt="Ecomplain Icon" />
          <Gap height={100} />

          <Form name="login-admin" form={form} onFinish={onFinish}>
            <Text className="input-label">Username</Text>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input className="form-table" placeholder="Masukkan Username" />
            </Form.Item>
            <Gap height={15} />

            <Text className="input-label">Password</Text>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                className="form-table"
                placeholder="Masukkan Password"
              />
            </Form.Item>
            <Gap height={20} />

            <Form.Item>
              <Button
                loading={isLoadingLogin}
                type="primary"
                htmlType="submit"
                className="form-button"
              >
                <p>Masuk</p>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
