import React, { useEffect, useState } from "react";
import "./laporan.css";
import { Col, Row, Input, Select, Table, Space, Tag, Modal } from "antd";
import { data_table } from "./constant";
import { SearchOutlined } from "@ant-design/icons";
import { useGetDasboardTotal, useGetLaporan } from "./hooks/useAdminLaporan";
import { useParams } from "react-router-dom";

// const onSearch = (value) => console.log(value);

const LaporanAdmin = () => {
  const [sort, setSort] = useState("desc");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState("");
  const { type } = useParams();
  const [body, setBody]  = useState();

  const [isLoadingData, laporanData, getLaporanData] = useGetLaporan();
  const [
    isLoadingDashboardTotalData,
    dashboardTotalData,
    getDashboardTotalData,
  ] = useGetDasboardTotal();
  console.log({ laporanData });
  console.log({body})
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      align: "center",
      render: (_, { type }) => (
        <>
          {type === "Complaint" ? (
            <Tag
              color="#FAFF1E"
              style={{ color: "#3C486B", borderRadius: "20px" }}
            >
              {type}
            </Tag>
          ) : (
            <Tag color="green" style={{ color: "green", borderRadius: "20px" }}>
              {type}
            </Tag>
          )}
        </>
      ),
    },
    {
      title: "Categories",
      dataIndex: "category",
      key: "categoty",
      align: "center",
    },
    {
      title: "Tanggal",
      dataIndex: "created_at",
      key: "created_at",
      align: "center",
    },
    {
      title: "Isi",
      dataIndex: "description",
      key: "description",
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

  useEffect(() => {
    const page = "1";

    getLaporanData(sort, type, search, page, limit);
    getDashboardTotalData(body);
  }, [type, sort, search, limit, body]);

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
          <div className="centeredTextStyle">
            Total Laporan : {dashboardTotalData?.total}
          </div>
          {/* <div className="centeredTextStyletotal">20</div> */}
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
              value: "asc",
              label: "Ascending",
            },
            {
              value: "desc",
              label: "Descending",
            },
          ]}
          onChange={(value) => {
            setSort(value);
          }}
        ></Select>

        <Input
          className="search"
          prefix={<SearchOutlined />}
          placeholder="input search text"
          // onSearch={onSearch}
        />
      </Row>
      <Table
        columns={columns}
        dataSource={laporanData?.complaints}
        style={{ marginLeft: "20px" }}
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
