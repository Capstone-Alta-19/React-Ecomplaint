import React from "react";
import "./laporan.css";
import { Col, Row, Input, Select, Table, Space, Tag } from "antd";
import { data_table } from "./constant";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Search } = Input;

const onSearch = (value) => console.log(value);

const columns = [
  {
    title: "No",
    width: 30,
    dataIndex: "key",
    key: "no",
    align: "center",
  },
  {
    title: "Type",
    width: 100,
    dataIndex: "type",
    key: "type",
    align: "center",
    render: (_, { type }) => (
      <>
        <Tag color="#FAFF1E" style={{color: "#3C486B", borderRadius: "20px"}}>
          {type}
        </Tag>
      </>
    ),
  },
  {
    title: "Categories",
    width: 100,
    dataIndex: "categories",
    key: "categories",
    align: "center",
  },
  {
    title: "Tanggal",
    width: 100,
    dataIndex: "tanggal",
    key: "tanggal",
    align: "center",
  },
  {
    title: "Isi",
    width: 100,
    dataIndex: "isi",
    key: "isi",
    align: "center",
  },
  {
    title: "Details",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>View Details</a>,
    align: "center",
  },
  {
    title: "Status",
    width: 100,
    dataIndex: "status",
    key: "status",
    align: "center",
    render: (_, { status }) => (
      <>
        <Tag color="#3C486B" style={{height: 30, borderRadius: "20px"}}>
          {status}
        </Tag>
      </>
    ),
  },
];

const Laporan = () => {
  return (
    <>
      <Row justify="space-between">
        <Col span={8}>
          <div className="boxStyle">
            <div className="centeredTextStyle">
              Total Laporan <br />
              <br />
            </div>
            <div className="centeredTextStyle">20</div>
          </div>
        </Col>
        <Col span={8}>
          <div className="boxStyle">
            <div className="centeredTextStyle">
              Pengaduan <br />
              <br />
            </div>
            <div className="centeredTextStyle">10</div>
          </div>
        </Col>
        <Col span={8}>
          <div className="boxStyle">
            <div className="centeredTextStyle">
              Aspirasi
              <br />
              <br />
            </div>
            <div className="centeredTextStyle">10</div>
          </div>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={8}>
          <Select defaultValue="option1" className="inputOption">
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
        </Col>
        <Col span={8}>
          <Input
            className="search"
            prefix={<SearchOutlined />}
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={data_table}
        scroll={{
          x: 1300,
        }}
      />
    </>
  );
};

export default Laporan;
