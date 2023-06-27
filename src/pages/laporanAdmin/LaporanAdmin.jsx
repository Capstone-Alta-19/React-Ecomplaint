import React, { useEffect, useState } from "react";
import { Row, Input, Select, Table, Tag, Modal, Form, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  useGetDashboardTotal,
  useGetLaporan,
  useGetLaporanById,
  usePostFeedbackLaporan,
} from "./hooks/useAdminLaporan";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import styles from "./laporanAdmin.module.css";
import Gap from "../../components/gap/Gap";

const LaporanAdmin = () => {
  const { TextArea } = Input;
  const [sort, setSort] = useState("desc");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState("100");
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

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLaporan, setSelectedLaporan] = useState(null);

  const showModal = (id) => {
    getLaporanById(id);
    if (laporanById) {
      setSelectedLaporan(laporanById?.complaint);
      setIsModalOpen(true);
    }
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

  useEffect(() => {
    const page = "1";

    getLaporanData(sort, type, search, page, limit);
    getDashboardTotalData();
  }, [type, sort, search, limit]);

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <h1 className={styles.head}>Laporan</h1>
        {isLoadingDashboardTotalData ? (
          <LoadingComponent />
        ) : (
          <Row justify="space-between">
            <div className={styles.box}>
              <div className={styles.center}>
                Total Laporan : {""}
                {dashboardTotalData?.total.total}
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.center}>
                Pengaduan : {""} {dashboardTotalData?.total.complaint}
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.center}>
                Aspirasi : {""} {dashboardTotalData?.total.aspiration}
              </div>
            </div>
          </Row>
        )}

        <Gap height={25} />
        <Row justify="space-between">
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
            className={styles.search}
            prefix={<SearchOutlined />}
            placeholder="Search"
            onChange={handleSearch}
          />
        </Row>

        <Gap height={25} />
        <Table
          rowKey="id"
          columns={columns}
          dataSource={laporanData?.complaints}
        />

        <Modal footer={null} open={isModalOpen} onCancel={handleCancel}>
          {selectedLaporan && (
            <Form
              className={styles.form}
              onFinish={handleFeedback}
              layout="horizontal"
              labelAlign="left"
              labelCol={{
                span: 6,
              }}
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
              <Form.Item label="Categories">
                {selectedLaporan.category}
              </Form.Item>
              <Form.Item label="Tanggal">
                {selectedLaporan.created_at}
              </Form.Item>
              <Form.Item label="Isi">{selectedLaporan.description}</Form.Item>
              <Form.Item label="Attachment">
                {!selectedLaporan.photo_url ? (
                  <video
                    src={selectedLaporan.video_url}
                    style={{ maxWidth: 300 }}
                  />
                ) : (
                  <img
                    src={selectedLaporan.photo_url}
                    style={{ maxWidth: 300 }}
                  />
                )}
              </Form.Item>
              <Form.Item
                label="Balasan"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please Input Your Name!",
                  },
                ]}
              >
                <TextArea
                  className={styles.input}
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
                  className={styles.button}
                >
                  Kirim
                </Button>
              </Row>
            </Form>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default LaporanAdmin;
