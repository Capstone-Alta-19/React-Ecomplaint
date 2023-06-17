import React from "react";
import "./tambahAdmin.css";
import { Button, Form, Input } from "antd";
import { Useralt } from "../../assets";
import Gap from "../../components/gap/Gap";
import { Row, Col } from "antd";

const TambahAdmin = () => {
  return (
    <>
      <div className="container-judul">
        <div>
          <Row className="judulteks">
            <Col span={6}>
              <img src={Useralt} />
            </Col>
            <Col span={12}>
              <div className="coladmin">Tambah Admin</div>
            </Col>
          </Row>
        </div>

        <Gap height={70} />
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
          <Form.Item label="Input Name" name="inputnama">
            <Input placeholder="input Name" />
          </Form.Item>

          <Form.Item label="Role" name="role">
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "30%",
                backgroundColor: "#F7F2FA",
                color: "black",
              }}
            >
              admin
            </Button>
          </Form.Item>

          <Form.Item label="Input user name" name="username">
            <Input placeholder="Input user name" />
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
