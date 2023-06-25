import React, { useEffect, useState } from "react";
import "./pengaturanAdmin.css";
import { Button, Form, Input } from "antd";
import { UseUpdateAdmin, useGetAdmin } from "./hooks/usePengaturanAdmin";
import Gap from "../../components/gap/Gap";
// import { useParams } from "react-router-dom";

const PengaturanAdmin = () => {
  const [isLoading, data, getAdmin] = useGetAdmin();
  const [isLoadingUpdateAdmin, updateAdmin] = UseUpdateAdmin();

  const [body, rowData, setRowData] = useState();
  // console.log(data);

  const isEdit = (values) => {
    console.log({ values });
  };

  const onEdit = (values) => {
    // const id = rowData.id;
    console.log(values);
    updateAdmin(values, () => {
      getAdmin();
    });
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <>
      <div className="container-center">
        <Gap height={30} />
        <Form
          className="formpengaturanadmin"
          autoComplete="off"
          layout="horizontal"
          onFinish={isEdit ? onEdit : onAdd}
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
          // initialValues={{ namepengaturan: data?.admin.name }}
          fields={[
            {
              name: ["name"],
              value: data?.admin.name,
            },
            {
              name: ["username"],
              value: data?.admin.username,
            },
          ]}
        >
          <Form.Item
            label="Nama"
            name="name"
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

          <div className="gantipasswd">Ganti Password</div>
          <Gap height={15} />
          <Form.Item
            label="Password Lama"
            name="old_password"
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
            name="new_password"
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
            name="confirm_password"
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
              // loading={isLoadingUpdateAdmin}
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
