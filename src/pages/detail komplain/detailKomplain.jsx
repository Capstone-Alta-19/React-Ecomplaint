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

import { SearchOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import "./style.css";
import Search from "antd/es/input/Search";
import { back } from "../../assets";

import { useGetDashboard } from "./hooks/useDashboard";
import { useParams } from "react-router-dom";
import { INITIAL_TABLE_DATA } from "./constants";

const DetailKomplain = () => {
  const [sort, setSort] = useState("desc");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState("")

  console.log({ sort });
  const { type } = useParams();
  const [isLoadingData, dashboardData, getDashboardData] = useGetDashboard();
  console.log({ dashboardData });
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
      render: () =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
           
          </Space>
        ) : null,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
           
          </Space>
        ) : null,
    },
  ];
  useEffect(() => {
    const page = "1";
    const limit = "10"
    getDashboardData(sort, type, search, page, limit);
  }, [type, sort, search, ]);

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
            <Button className="SaveButton">Export</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DetailKomplain;
