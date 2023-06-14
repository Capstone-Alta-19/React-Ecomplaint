import React from 'react';
import { Row, Col, Card, Image, Button, Space } from "antd";
import { useState } from "react";
import Gap from '../../components/gap/Gap';
import './dashboardAdmin.css';

const DashboardAdmin = () => {
  const [size, setSize] = useState("small");
  return (
    <>
      <div>
        {/* heading */}
        <Row>
          <Col span={12}>
            <div className="overview">
              <b>Overview</b>
              <Button className="button-view">View to edit</Button>
            </div>
          </Col>

          <Col span={12}>
            <div>
              <Button className="button-view2">View to edit</Button>
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
              
              {/* KOMPLAIN - 1 */}
              <p id="judul-komplain">
                <b>diddonm</b>
                <Space wrap>
                  <Button
                    className="status1"
                    size={size}
                    type="primary"
                    shape="round"> Complain</Button>
                  <Button className="status2" size={size} shape="round">
                    Selesai
                  </Button>
                </Space>
                <div className="isi-komplain">
                  “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                </div>
              </p>
              <Gap height={1} />

              {/* KOMPLAIN - 2 */}
              <p id="judul-komplain">
                <b>zricharzn</b>
                <Space wrap>
                  <Button
                    className="status1"
                    size={size}
                    type="primary"
                    shape="round"
                  >
                    Complain
                  </Button>
                  <Button className="status2" size={size} shape="round">
                    Selesai
                  </Button>
                </Space>
                <div className="isi-komplain">
                  “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                </div>
              </p>
              <Gap height={1} />

              {/* KOMPLAIN - 3 */}
              <p id="judul-komplain">
                <b>acurrieri</b>
                <Space wrap>
                  <Button
                    className="status1"
                    size={size}
                    type="primary"
                    shape="round"
                  >
                    Complain
                  </Button>
                  <Button className="status2" size={size} shape="round">
                    Selesai
                  </Button>
                </Space>
                <div className="isi-komplain">
                  “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                </div>
              </p>
              <Gap height={1} />

              {/* KOMPLAIN - 4 */}
              <p id="judul-komplain">
                <b>fvareyg</b>
                <Space wrap>
                  <Button
                    className="status1"
                    size={size}
                    type="primary"
                    shape="round"
                  >
                    Complain
                  </Button>
                  <Button className="status2" size={size} shape="round">
                    Selesai
                  </Button>
                </Space>
                <div className="isi-komplain">
                  “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                </div>
              </p>
              <Gap height={1} />

              {/* KOMPLAIN - 5 */}
              <p id="judul-komplain">
                <b>tdessantd</b>
                <Space wrap>
                  <Button
                    className="status1"
                    size={size}
                    type="primary"
                    shape="round"
                  >
                    Complain
                  </Button>
                  <Button className="status2" size={size} shape="round">
                    Selesai
                  </Button>
                </Space>
                <div className="isi-komplain">
                  “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                </div>
              </p>
              <Gap height={1} />

              {/* KOMPLAIN - 6 */}
              <p id="judul-komplain">
                <b>acurrieri</b>
                <Space wrap>
                  <Button
                    className="status1"
                    size={size}
                    type="primary"
                    shape="round"
                  >
                    Complain
                  </Button>
                  <Button className="status2" size={size} shape="round">
                    Selesai
                  </Button>
                </Space>
                <div className="isi-komplain">
                  “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                </div>
              </p>
              <Gap height={1} />

              {/* KOMPLAIN - 7 */}
              <p id="judul-komplain">
                <b>tstrettonp</b>
                <Space wrap>
                  <Button
                    className="status1"
                    size={size}
                    type="primary"
                    shape="round"
                  >
                    Complain
                  </Button>
                  <Button className="status2" size={size} shape="round">
                    Selesai
                  </Button>
                </Space>
                <div className="isi-komplain">
                  “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                </div>
              </p>
              <Gap height={1} />

              {/* KOMPLAIN - 8 */}
              <p id="judul-komplain">
                <b>reclusivevitamins</b>
                <Space wrap>
                  <Button
                    className="status1"
                    size={size}
                    type="primary"
                    shape="round"
                  >
                    Complain
                  </Button>
                  <Button className="status2" size={size} shape="round">
                    Selesai
                  </Button>
                </Space>
                <div className="isi-komplain">
                  “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                </div>
              </p>
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
                  {/* KOMPLAIN - 1 */}
                  <p id="judul-komplain">
                    <b>User1</b>
                    <Space wrap>
                      <Button
                        className="status1"
                        size={size}
                        type="primary"
                        shape="round"
                      >
                        Complain
                      </Button>
                      <Button className="status2" size={size} shape="round">
                        Selesai
                      </Button>
                    </Space>
                    <div className="isi-komplain">
                      “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                    </div>
                  </p>
                  <Gap height={10} />

                  {/* KOMPLAIN - 2 */}
                  <p id="judul-komplain">
                    <b>User1</b>
                    <Space wrap>
                      <Button
                        className="status1"
                        size={size}
                        type="primary"
                        shape="round"
                      >
                        Complain
                      </Button>
                      <Button className="status2" size={size} shape="round">
                        Selesai
                      </Button>
                    </Space>
                    <div className="isi-komplain">
                      “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                    </div>
                  </p>
                  <Gap height={10} />

                  {/* KOMPLAIN - 3 */}
                  <p id="judul-komplain">
                    <b>User1</b>
                    <Space wrap>
                      <Button
                        className="status1"
                        size={size}
                        type="primary"
                        shape="round"
                      >
                        Complain
                      </Button>
                      <Button className="status2" size={size} shape="round">
                        Selesai
                      </Button>
                    </Space>
                    <div className="isi-komplain">
                      “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                    </div>
                  </p>
                </Card>
              </Col>
            </Row>
            <Gap height={40} />

            {/* kotak aspirasi */}
            <Button className="button-view3">View to edit</Button>
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
                  {/* KOMPLAIN - 1 */}
                  <p id="judul-komplain">
                    <b>User1</b>
                    <Space wrap>
                      <Button
                        className="status1-aspirasi"
                        size={size}
                        type="primary"
                        shape="round"
                      >
                        Aspirasi
                      </Button>
                      <Button className="status2" size={size} shape="round">
                        Selesai
                      </Button>
                    </Space>
                    <div className="isi-komplain">
                      “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                    </div>
                  </p>
                  <Gap height={10} />

                  {/* KOMPLAIN - 2 */}
                  <p id="judul-komplain">
                    <b>User1</b>
                    <Space wrap>
                      <Button
                        className="status1-aspirasi"
                        size={size}
                        type="primary"
                        shape="round"
                      >
                        Aspirasi
                      </Button>
                      <Button className="status2" size={size} shape="round">
                        Selesai
                      </Button>
                    </Space>
                    <div className="isi-komplain">
                      “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                    </div>
                  </p>
                  <Gap height={10} />

                  {/* KOMPLAIN - 3 */}
                  <p id="judul-komplain">
                    <b>User1</b>
                    <Space wrap>
                      <Button
                        className="status1-aspirasi"
                        size={size}
                        type="primary"
                        shape="round"
                      >
                        Aspirasi
                      </Button>
                      <Button className="status2" size={size} shape="round">
                        Selesai
                      </Button>
                    </Space>
                    <div className="isi-komplain">
                      “Jorem ipsum dolor sit amet, consectetur adipiscing elit.”
                    </div>
                  </p>
                </Card>
              </Col>
            </Row>
          </Col>

        </Row>
      </div>
    </>
  );
}

export default DashboardAdmin;
