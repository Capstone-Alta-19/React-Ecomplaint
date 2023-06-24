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
import { useParams } from "react-router-dom";
import { INITIAL_TABLE_DATA } from "./constants";
import CheckableTag from "antd/es/tag/CheckableTag";
import { CSVDownload, CSVLink } from "react-csv";
import { data_table } from "../laporanAdmin/constant";

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
    const id = rowData?.id
   
    updateDashboardData(id,values, () => {
      console.log(values)
      getDashboardData()
      handleCancel();
    });
 
  };

  const handleDelete = (row_id) => {
    deleteDashboardData(row_id, () => {
      getDashboardData();
    });
  };
  const handleEdit = (rowData) => {
    console.log({ rowData });
    setRowData(rowData);
    setIsModalOpen(true);
  };
  useEffect(() => {
    const page = "1";

    getDashboardData(sort, type, search, page, limit, );
    getCSVData(sort, type, search, limit);
  }, [type, sort, search]);

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
            />
          </Row>
        </div>

        <br></br>
        <Table
          className="table-one"
          dataSource={dashboardData?.complaints}
          columns={TABLE_COLUMNS}
        ></Table>

        <Row className="save" align="end">
          <Col>
            <Button className="SaveButton">
              <CSVLink
                data={dataCSV ? dataCSV : data_table}
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
                  value: "Process",
                  label: "Proccess",
                },
                {
                  value: "Resolved",
                  label: "Resolved",
                },
              ]}
             
            ></Select>
          </Form.Item>
          <Form.Item
            label="Type"
            name="type"

          >
           <Select
             
             placeholder="Stats"
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
            <Button danger>Hapus</Button>
            <Button htmlType="submit">Simpan</Button>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default DetailKomplain;
