import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { UseUpdateAdmin, useGetAdmin } from "./hooks/usePengaturanAdmin";
import Gap from "../../components/gap/Gap";
import styles from "./pengaturanAdmin.module.css";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";

const PengaturanAdmin = () => {
  const [isLoading, data, getAdmin] = useGetAdmin();
  const [isLoadingUpdateAdmin, updateAdmin] = UseUpdateAdmin();
  const isEdit = (values) => {};

  const onEdit = (values) => {
    updateAdmin(values, () => {
      getAdmin();
    });
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className={styles.pengaturan}>
          <Form
            className={styles.form}
            autoComplete="off"
            layout="horizontal"
            onFinish={isEdit ? onEdit : onAdd}
            name="basic"
            colon={false}
            style={{
              width: "800px",
            }}
            labelAlign="left"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 14,
            }}
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
                  message: "Please input your nama!",
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

            <Gap height={15} />
            <div className={styles.password}>Ganti Password</div>
            <Gap height={30} />

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
                loading={isLoadingUpdateAdmin}
                style={{
                  width: "75%",
                  backgroundColor: "#3C486B",
                }}
              >
                SIMPAN
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
};

export default PengaturanAdmin;
