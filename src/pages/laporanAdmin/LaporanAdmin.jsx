import React, { useEffect, useState } from "react";
import "./laporan.css";
import { Col, Row, Input, Select, Table, Space, Tag, Modal } from "antd";
import { data_table } from "./constant";
import { SearchOutlined } from "@ant-design/icons";
import {
  useGetDashboardTotal,
  useGetLaporan,
  useGetLaporanById,
} from "./hooks/useAdminLaporan";
import { useParams } from "react-router-dom";

const LaporanAdmin = () => {
  const [sort, setSort] = useState("desc");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState("");
  const { type } = useParams();

  const [isLoadingData, laporanData, getLaporanData] = useGetLaporan();
  const [
    isLoadingDashboardTotalData,
    dashboardTotalData,
    getDashboardTotalData,
  ] = useGetDashboardTotal();
  const [isLoadingLaporanById, laporanById, getLaporanById] =
    useGetLaporanById();
  console.log({ laporanById });
  console.log({ laporanData });
  console.log({ dashboardTotalData });
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
              style={{
                color: "#3C486B",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              {type}
            </Tag>
          ) : (
            <Tag
              color="#A189FF"
              style={{
                color: "#3C486B",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
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
      render: (_, record) => (
        <a onClick={() => showModal(record.id)}>View Details</a>
      ),
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (_, { status }) => (
        <>
          <Tag
            color="#3C486B"
            style={{ borderRadius: "20px", fontWeight: "bold" }}
          >
            {status}
          </Tag>
        </>
      ),
    },
  ];

  useEffect(() => {
    const page = "1";

    getLaporanData(sort, type, search, page, limit);
    getDashboardTotalData();
    getLaporanById();
  }, [type, sort, search, limit]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLaporan, setSelectedLaporan] = useState(null);

  const showModal = (id) => {
    getLaporanById(id);
    const laporan = laporanData?.complaints.find(
      (laporan) => laporan.id === id
    );
    setSelectedLaporan(laporan);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedLaporan(null);
  };

  return (
    <>
      <Row justify="space-between">
        <div className="boxStyle">
          <div className="centeredTextStyle">
            Total Laporan : {""}
            {dashboardTotalData?.total.total}
          </div>
        </div>

        <div className="boxStyle">
          <div className="centeredTextStyle">
            Pengaduan : {""} {dashboardTotalData?.total.complaint}
          </div>
        </div>

        <div className="boxStyle">
          <div className="centeredTextStyle">
            Aspirasi : {""} {dashboardTotalData?.total.aspiration}
          </div>
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
        {selectedLaporan && (
          <>
            <p>From : {selectedLaporan.full_name}</p>
            <p>
              Type :{" "}
              {selectedLaporan.type === "Complaint" ? (
            <Tag
              color="#FAFF1E"
              style={{
                color: "#3C486B",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              {selectedLaporan.type}
            </Tag>
          ) : (
            <Tag
              color="#A189FF"
              style={{
                color: "#3C486B",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              {selectedLaporan.type}
            </Tag>
          )}
            </p>
            <p>Categories : {selectedLaporan.category}</p>
            <p>Tanggal : {selectedLaporan.created_at}</p>
            <p>Isi : {selectedLaporan.description}</p>
            <p>Attachment : {selectedLaporan.photo_url}</p>
          </>
        )}
      </Modal>
    </>
  );
};

export default LaporanAdmin;
