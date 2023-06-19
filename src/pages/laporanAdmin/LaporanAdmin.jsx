import React, { useState } from "react";
import "./laporan.css";
import { Col, Row, Input, Select, Table, Space, Tag, Modal } from "antd";
import { data_table } from "./constant";
import { SearchOutlined } from "@ant-design/icons";

const onSearch = (value) => console.log(value);

const LaporanAdmin = () => {
  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "no",
      align: "center",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      align: "center",
      render: (_, { type }) => (
        <>
          <Tag
            color="#FAFF1E"
            style={{ color: "#3C486B", borderRadius: "20px" }}
          >
            {type}
          </Tag>
        </>
      ),
    },
    {
      title: "Categories",
      dataIndex: "categories",
      key: "categories",
      align: "center",
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "Isi",
      dataIndex: "isi",
      key: "isi",
      align: "center",
    },
    {
      title: "Details",
      key: "operation",
      fixed: "right",
      render: () => <a onClick={showModal}>View Details</a>,
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (_, { status }) => (
        <>
          <Tag color="#3C486B" style={{ borderRadius: "20px" }}>
            {status}
          </Tag>
        </>
      ),
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Row justify="space-between">
        <div className="boxStyle">
          <div className="centeredTextStyle">Total Laporan </div>
          <div className="centeredTextStyletotal">20</div>
        </div>

        <div className="boxStyle">
          <div className="centeredTextStyle">Pengaduan</div>
        </div>

        <div className="boxStyle">
          <div className="centeredTextStyle">Aspirasi</div>
        </div>
      </Row>
      <Row justify="space-between" style={{ marginLeft: "20px" }}>
        <Select
          className="inputOption"
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
          className="search"
          prefix={<SearchOutlined />}
          placeholder="input search text"
          onSearch={onSearch}
        />
      </Row>
      <Table
        
        columns={columns}
        dataSource={data_table}
        style={{ marginLeft: "20px",}}
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default LaporanAdmin;
