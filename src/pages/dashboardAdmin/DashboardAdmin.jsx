import React from "react";
import { Row, Col, Card, Button, Space } from "antd";
import { useState } from "react";
import Gap from "../../components/gap/Gap";
import "./dashboardAdmin.css";
import { useGetDashboard } from "./hooks/useDashboard";
import { Link } from "react-router-dom";

const DashboardAdmin = () => {
  const [size, setSize] = useState("small");
  const [sort, setSort] = useState("asc");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("1");
  const [limit, setLimit] = useState("50");
  const [type, setType] = useState("All");

  const [isLoadingData, dashboardData, getDashboardData] = useGetDashboard();

  const handleSetType = React.useCallback((newType) => {
    setType(newType);
  }, []);

  React.useEffect(() => {
    getDashboardData(sort, type, search, page, limit);
  }, [sort, type, search, page, limit]);

  return (
    <div className="content-dashboard">
      {/* heading */}
      <Row>
        <Col span={12}>
          <div>
            <Button className="button-view2">
              <Link
                to={`/dashboard-overview/All`}
                onClick={() => handleSetType("All")}
              >
                View to edit
              </Link>
            </Button>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Button className="button-view2">
              <Link
                to={`/dashboard-overview/Complaint`}
                onClick={() => handleSetType("Complaint")}
              >
                View to edit
              </Link>
            </Button>
          </div>
        </Col>
      </Row>

      {/* kotak konten */}
      <Row>
        {/* KOLOM 1 */}
        <Col span={12}>
          <Card
            className="card-shadow"
            style={{
              width: 420,
            }}
          >
            <div className="recently-added">Recently Added</div>
            <Gap height={20} />

            {isLoadingData ? (
              <p>Loading data...</p>
            ) : (
              dashboardData?.complaints?.slice(0, 10).map((item) => (
                <div key={item.id}>
                  <div id="judul-komplain">
                    <b>{item.name}</b>
                    <Space wrap>
                      <Button
                        className="status1"
                        size={size}
                        type="primary"
                        shape="round"
                      >
                        <span className="status-text">{item.type}</span>
                      </Button>
                      <Button className="status2" size={size} shape="round">
                        <span className="status-text">{item.status}</span>
                      </Button>
                    </Space>
                    <div className="isi-komplain">{item.description}</div>
                  </div>
                  <Gap height={5} />
                </div>
              ))
            )}
          </Card>
        </Col>

        {/* KOLOM 2 */}
        <Col span={12}>
          {/* kotak complain */}
          {/* <Button className="button-view2">View to edit</Button> */}
          <Row>
            <Col>
              <Card
                className="card-shadow"
                style={{
                  width: 443,
                  height: 291,
                }}
              >
                {isLoadingData ? (
                  <p>Loading data...</p>
                ) : (
                  dashboardData?.complaints
                    ?.filter((item) => item.type === "Complaint")
                    .slice(0, 5)
                    .map((item) => (
                      <div key={item.id}>
                        <div id="judul-komplain">
                          <b>{item.name}</b>
                          <Space wrap>
                            <Button
                              className="status1"
                              size={size}
                              type="primary"
                              shape="round"
                            >
                              <span className="status-text">{item.type}</span>
                            </Button>
                            <Button
                              className="status2"
                              size={size}
                              shape="round"
                            >
                              <span className="status-text">{item.status}</span>
                            </Button>
                          </Space>
                          <div className="isi-komplain">{item.description}</div>
                        </div>
                        <Gap height={5} />
                      </div>
                    ))
                )}
              </Card>
            </Col>
          </Row>
          <Gap height={40} />

          {/* kotak aspirasi */}
          <Button className="button-view3">
            <Link
              to={`/dashboard-overview/Aspiration`}
              onClick={() => handleSetType("Aspiration")}
            >
              View to edit
            </Link>
          </Button>
          <Row>
            <Col>
              <Card
                className="card-shadow"
                hoverable
                style={{
                  width: 443,
                  height: 291,
                  color: "#19345E",
                }}
              >
                {isLoadingData ? (
                  <p>Loading data...</p>
                ) : (
                  dashboardData?.complaints
                    ?.filter((item) => item.type === "Aspiration")
                    .slice(0, 4)
                    .map((item) => (
                      <div key={item.id}>
                        <div id="judul-komplain">
                          <b>{item.name}</b>
                          <Space wrap>
                            <Button
                              className="status1-aspirasi"
                              size={size}
                              type="primary"
                              shape="round"
                            >
                              <span className="status-text">{item.type}</span>
                            </Button>
                            <Button
                              className="status2"
                              size={size}
                              shape="round"
                            >
                              <span className="status-text">{item.status}</span>
                            </Button>
                          </Space>
                          <div className="isi-komplain">{item.description}</div>
                        </div>
                        <Gap height={5} />
                      </div>
                    ))
                )}
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardAdmin;
