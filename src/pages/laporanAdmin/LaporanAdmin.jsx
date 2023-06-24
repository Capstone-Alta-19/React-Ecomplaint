import React, { useEffect, useState } from "react";
import "./laporan.css";
import {
  Col,
  Row,
  Input,
  Select,
  Table,
  Space,
  Tag,
  Modal,
  Form,
  Button,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  useGetDashboardTotal,
  useGetLaporan,
  useGetLaporanById,
  usePostFeedbackLaporan,
} from "./hooks/useAdminLaporan";
import { useParams } from "react-router-dom";

const LaporanAdmin = () => {
  const { TextArea } = Input;

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

  const [isloadingFeedbackLaporan, FeedbackLaporanData, postFeedBackLaporan] =
    usePostFeedbackLaporan();
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
      render: (record) => (
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
  }, [type, sort, search, limit]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLaporan, setSelectedLaporan] = useState(null);

  const showModal = (id) => {
    getLaporanById(id);
    setSelectedLaporan(laporanById?.complaint);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedLaporan(null);
  };

  const handleFeedback = (values) => {
    const id = selectedLaporan?.id;
    const page = "1";

    postFeedBackLaporan(
      id,
      values,
      () => {
        getLaporanData(sort, type, search, page, limit);
      },
      [sort, type, search, limit]
    );
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
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedLaporan && (
          <Form
            className="formDetailData"
            onFinish={handleFeedback}
            layout="horizontal"
            labelAlign="left"
            labelCol={{
              span: 6,
            }}
            // wrapperCol={{
            //   span: 10,
            // }}
            colon={false}
          >
            <Form.Item label="From">{selectedLaporan.full_name}</Form.Item>
            <Form.Item label="Type">
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
            </Form.Item>
            <Form.Item label="Categories">{selectedLaporan.category}</Form.Item>
            <Form.Item label="Tanggal">{selectedLaporan.created_at}</Form.Item>
            <Form.Item label="Isi">{selectedLaporan.description}</Form.Item>
            <Form.Item label="Attachment">
              <img src={selectedLaporan.photo_url} style={{ maxWidth: 300 }} />
            </Form.Item>
            <Form.Item
              label="Balasan"
              name="description"
              // onSubmit={onFeedback}
              rules={[
                {
                  // required: true,
                  message: "Please Input Your Name!",
                },
              ]}
            >
              <TextArea
                className="inputFeedback"
                placeholder="Balas..."
                autoSize={{
                  minRows: 6,
                  maxRows: 10,
                }}
              />
            </Form.Item>
            <Row justify="end">
              <Button
                type="primary"
                htmlType="submit"
                className="buttonFeedback"
              >
                Kirim
              </Button>
            </Row>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default LaporanAdmin;
