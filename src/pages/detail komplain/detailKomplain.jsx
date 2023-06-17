import {
  Button,
  Card,
  Col,
  Dropdown,
  Input,
  Row,
  Select,
  Space,
  Table,
} from "antd";

import React from "react";
import "./style.css";
import Search from "antd/es/input/Search";
import { back } from "../../assets";

const DetailKomplain = () => {
  const TABLE_COLUMNS = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Product Category",
      dataIndex: "productCategory",
      key: "productCategory",
    },
    {
      title: "Product Freshness",
      dataIndex: "productFresh",
      key: "productFresh",
    },
    {
      title: "Product Price",
      dataIndex: "productPrice",
      key: "productPrice",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <a>Edit</a>
            <Popconfirm title="Sure to delete?" arrow={false}>
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];
  return (
    <div>
      <Row className="table-overview">
        <Col span={1}></Col>
        <Col span={2}>
          <Space></Space>
        </Col>
      </Row>

      <Row align="center">
        <Col span={10}>
          <Space>
            <img src={back}></img>

            <h1>Overview</h1>
          </Space>
          <br></br>
          <Space>
            <Select
              placeholder="Recently Added"
              options={[
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            ></Select>
            <Search placeholder="Search" allowClear></Search>
          </Space>
          <br></br>
          <Table></Table>
          <Row align="end">
            <Col>
              <Space>
                <Button type="primary" primary>
                  Save
                </Button>
                <Button>Save As</Button>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DetailKomplain;
