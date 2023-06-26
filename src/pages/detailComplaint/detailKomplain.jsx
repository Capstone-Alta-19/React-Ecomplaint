import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Select,
  Space,
  Table,
  Tag,
} from "antd";

import { SearchOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import "./style.css";
import Search from "antd/es/input/Search";
import { back } from "../../assets";

import {
  useDeleteDashboard,
  useGetCSV,
  useGetDashboard,
  useUpdateDashboard,
} from "./hooks/useDashboard";
import { Link, useParams } from "react-router-dom";
import { INITIAL_TABLE_DATA } from "./constants";
import CheckableTag from "antd/es/tag/CheckableTag";
import { CSVDownload, CSVLink } from "react-csv";

const DetailKomplain = () => {
  const [sort, setSort] = useState("desc");
  const [search, setSearch] = useState("");
  const [rowData, setRowData] = useState();
  const [formBio] = Form.useForm();

  const [limit, setlimit] = useState("100");
  const { type } = useParams();
  const [isLoadingCSVData, dataCSV, getCSVData] = useGetCSV();
  const [isLoadingUpdateData, updateDashboardData] = useUpdateDashboard();
  const [isLoadingDeleteData, deleteDashboardData] = useDeleteDashboard();
  const [isLoadingData, dashboardData, getDashboardData] = useGetDashboard();
  const [isLoadingDeta, dashboardDeta, getDashboardUtils] = useGetDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLaporan, setSelectedLaporan] = useState(null);

  const TABLE_COLUMNS = [
    {
      title: "No.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
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
      key: "category",
    },
    {
      title: "Tanggal",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Isi",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (stats) => (
        <>
          <Tag
            color="#3C486B"
            style={{ borderRadius: "20px", fontWeight: "bold" }}
          >
            {stats}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: 1,
      fixed: "right",
      render: (_, record) => <a onClick={() => handleEdit(record)}>Edit</a>,
    },
  ];
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
    getDashboardData(status);
  };
  const onEdit = (values) => {
    const id = rowData?.id;
    console.log(id);
    const page = "1";

    updateDashboardData(id, values, () => {
      handleCancel();
    });
  };
  const onDelete = () => {
    const letid = rowData?.id;
    const page = "1";

    deleteDashboardData(letid, () => {
      getDashboardData(sort, type, search, page, limit);
    });
  };

  const handleEdit = (rowData) => {
    console.log({ rowData });
    setRowData(rowData);
    setIsModalOpen(true);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  useEffect(() => {
    const page = "1";

    getDashboardData(sort, type, search, page, limit);
    getCSVData(sort, type, search, limit);
  }, [type, sort, search]);

  return (
    <div className="body">
      <div className="body2">
        <Link
          to="/dashboard"
          style={{
            color: "black",
          }}
        >
          <Space className="space-back">
            <img src={back}></img>

            <h1>Overview</h1>
          </Space>
        </Link>
        <br></br>
        <br></br>
        <div className="searchbar">
          <Row justify="space-between">
            <Select
              className="searchbar-filter"
              placeholder="Recently Added"
              options={[
                {
                  value: "desc",
                  label: "descending",
                },
                {
                  value: "asc",
                  label: "ascending",
                },
              ]}
              onChange={(value) => {
                setSort(value);
              }}
            ></Select>

            <Input
              prefix={<SearchOutlined />}
              placeholder="Search"
              allowClear
              className="search-item"
              onChange={handleSearch}
            />
          </Row>
        </div>

        <br></br>
        <Table
          className="table-one"
          rowKey={dashboardData?.complaints.id}
          key={dashboardData?.complaints.id}
          dataSource={dashboardData?.complaints}
          columns={TABLE_COLUMNS}
        ></Table>

        <Row className="save" align="end">
          <Col>
            <Button className="SaveButton">
              <CSVLink
                data={dataCSV ? dataCSV : INITIAL_TABLE_DATA}
                filename="AllContent.csv"
                target="_self"
              >
                Export
              </CSVLink>
            </Button>
          </Col>
        </Row>
      </div>
      <Modal
        title="Edit Status"
        onCancel={handleCancel}
        open={isModalOpen}
        footer={null}
      >
        <Form
          onFinish={onEdit}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="Vertical"
          form={formBio}
          fields={[
            {
              name: "status",
              value: rowData?.status,
            },
            {
              name: "type",
              value: rowData?.type,
            },
          ]}
        >
          <Form.Item label="Status" name="status">
            <Select
              placeholder="Stats"
              options={[
                {
                  value: "Pending",
                  label: "Pending",
                },
                {
                  value: "Proccess",
                  label: "Proccess",
                },
                {
                  value: "Resolved",
                  label: "Resolved",
                },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item label="Type" name="type">
            <Select
              placeholder="Type"
              options={[
                {
                  value: "Complaint",
                  label: "Complaint",
                },
                {
                  value: "Aspiration",
                  label: "Aspiration",
                },
              ]}
            ></Select>
          </Form.Item>
          <Row justify={"space-between"}>
            <Button danger onClick={onDelete}>
              Hapus
            </Button>
            <Button htmlType="submit">Simpan</Button>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default DetailKomplain;
