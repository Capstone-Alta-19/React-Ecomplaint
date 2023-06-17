import React from "react";
import "./adminPage.css";
import { EcomplainzWhite } from "../../assets";
import { Button, Form, Input } from "antd";
import { useLogin } from "./hooks/useAuth";
import Gap from "../../components/gap/Gap";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    localStorage.setItem("token", true);
    navigate("/dashboard");
    console.log(values);
  };

  //API LOGIN
  const [isLoadingLogin, login] = useLogin();

  return (
    <div className="container-center">
      <div className="content-admin">
        <img src={EcomplainzWhite} alt="Ecomplain Icon" />
        <div>
          <Form
            name="login-admin"
            form={form}
            onFinish={onFinish}
            className="form-style"
            placeholder=""
          >
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
            <Gap height={10} />

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
            <Gap height={10} />

            <Form.Item>
              <Button type="primary" htmlType="submit" className="form-button">
                Masuk
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
