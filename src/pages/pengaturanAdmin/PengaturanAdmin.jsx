import React, { useEffect, useState } from "react";
import "./pengaturanAdmin.css";
import { Button, Form, Input } from "antd";
import { useGetAdmin } from "./hooks/usePengaturanAdmin";
import Gap from "../../components/gap/Gap";
// import { useParams } from "react-router-dom";

const PengaturanAdmin = () => {
  const [body] = useState();
  const [getAdmin] = useGetAdmin();

  const [rowData, setRowData] = useState();

  const onEdit = (values) => {
    console.log({ values });
    const id = rowData.id;

    updateBiodata(id, values, () => {
      getAdmin();
      handleCancel();
    });
  };

  // useEffect(() => {
  //
  //   useGetAdmin();
  // }, []);

  return (
    <>
      <div className="container-center">
        <Gap height={30} />
        <Form
          className="formpengaturanadmin"
          autoComplete="off"
          layout="horizontal"
          onFinish={onEdit}
          name="basic"
          colon={false}
          style={{
            width: "807px",
            height: "500px",
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
            <Input />
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
            <Input />
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
            <Input />
          </Form.Item>

          <div className="gantipasswd">Ganti Password</div>
          <Gap height={15} />
          <Form.Item
            label="Password Lama"
            name="passwordlama"
            rules={[
              {
                required: true,
                message: "Please input your password lama!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Password Baru"
            name="passwordbaru"
            rules={[
              {
                required: true,
                message: "Please input your password baru!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Konfirmasi Password Baru"
            name="konfirmasipassword"
            rules={[
              {
                required: true,
                message: "Please input your password baru!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Gap height={30} />
          <Form.Item
            wrapperCol={{
              offset: 7,
              span: 14,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              direction="vertical"
              style={{
                width: "80%",
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

export default PengaturanAdmin;
