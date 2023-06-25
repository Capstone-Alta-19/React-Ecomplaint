import React, { useEffect, useState } from "react";
import "./tambahAdmin.css";
import { Button, Form, Input, Radio } from "antd";
import { User } from "../../assets";
import Gap from "../../components/gap/Gap";
import { Row, Col } from "antd";
import { usePostAdmin } from "./hooks/useTambahAdmin";

const TambahAdmin = () => {
  const [isLoadingCreateBiodata, createAdmin] = usePostAdmin();

  const onAdd = (values) => {
    console.log(values);
    createAdmin(values, () => {});
  };

  return (
    <>
      <div className="container-judul">
        <div>
          <Row className="judulteks">
            <Col span={3}>
              <img src={User} />
            </Col>
            <Col span={10}>
              <div className="coladmin">Tambah Admin</div>
            </Col>
          </Row>
        </div>

        <Gap height={50} />
        <Form
          autoComplete="off"
          className="formtambahAdmin"
          layout="horizontal"
          onFinish={onAdd}
          name="basic"
          colon={false}
          style={{
            width: "600px",
          }}
          labelAlign="left"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 14,
          }}
        >
          <Form.Item label="Input Name" name="name">
            <Input placeholder="input Name" />
          </Form.Item>

          <Form.Item label="Role" name="role">
            <Radio.Group>
              <Radio value="Admin">Admin</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Input user name" name="username">
            <Input placeholder="Input User name" />
          </Form.Item>

          <Form.Item label="Input Password" name="password">
            <Input.Password placeholder="Input Password" />
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
              className="buttonTambahAdmin"
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

export default TambahAdmin;
