import React from "react";
import "./pengaturanPage.css";
import { Button, Form, Input } from "antd";

const PengaturanPage = () => {
  return (
    <>
      <div className="container-center">
        <Form
          autoComplete="off"
          layout="horizontal"
          name="basic"
          colon={false}
          style={{
            width: "500px",
          }}
          labelAlign="left"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 14,
          }}
        >
          <Form.Item
            label="Nama"
            name="nama"
            rules={[
              {
                required: true,
                message: "Please input your Nama!",
              },
            ]}
          >
            <Input placeholder="Admin 1" />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Admin1Complaintz" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
                type: "email",
              },
            ]}
          >
            <Input placeholder="Admin1Complaintz@mail.com" />
          </Form.Item>

          <div className="gantipassword">Ganti Password</div>

          <Form.Item
            label="Password Lama"
            name="passwordlama"
            rules={[
              {
                required: true,
                message: "Please input your passwordlama!",
              },
            ]}
          >
            <Input.Password placeholder="***************" />
          </Form.Item>
          <Form.Item
            label="Password Baru"
            name="passwordbaru"
            rules={[
              {
                required: true,
                message: "Please input your passwordbaru!",
              },
            ]}
          >
            <Input.Password placeholder="*********" />
          </Form.Item>
          <Form.Item
            label="Konfirmasi Password Baru"
            name="konfirmasipassword"
            rules={[
              {
                required: true,
                message: "Please input your passwordbaru!",
              },
            ]}
          >
            <Input.Password placeholder="*********" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 5,
              span: 14,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              direction="vertical"
              style={{
                width: "100%",
                backgroundColor: "#3C486B",
              }}
            >
              SIMPAN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default PengaturanPage;
