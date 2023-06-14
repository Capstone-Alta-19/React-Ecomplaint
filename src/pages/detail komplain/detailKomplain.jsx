
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
import Gap from "../../components/gap/Gap";
import { SearchOutlined } from "@ant-design/icons";

import React from "react";
import "./style.css";
import Search from "antd/es/input/Search";
import { back } from "../../assets";
import EditButtons from "../../components/Buttons/EditButtons";

const DetailKomplain = () => {
  const TABLE_COLUMNS = [
    {
      title: "No.",
      dataIndex: "avatar",
      key: "avatar",
      
    },
    {
      title: "Type",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Categories",
      dataIndex: "productCategory",
      key: "productCategory",
    },
    {
      title: "Tanggal",
      dataIndex: "productFresh",
      key: "productFresh",
    },
    {
      title: "Isi",
      dataIndex: "productPrice",
      key: "productPrice",
    },
    {
      title: "Status",
      dataIndex: "action",
      render: () =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <EditButtons></EditButtons>
          </Space>
        ) : null,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>

            <EditButtons></EditButtons>

          </Space>
        ) : null,
    },
  ];
  return (
    <div className="body">
      

      <div className="body2">
        <Space className="space-back">
          <img src={back}></img>

          <h1>Overview</h1>
        </Space>
        <br></br>
        <br></br>
        <div className="searchbar">
          <Row justify="space-between">
          
            <Select
              className="searchbar-filter"
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

   
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search"
              allowClear
              className="search-item"
            />
            </Row >
        </div>
      

        <br></br>
        <Table className="table-one" columns={TABLE_COLUMNS}></Table>

        <Row className="save" align="end">
          
          <Col>
            <Button className="SaveButton">Export</Button>
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default DetailKomplain;
