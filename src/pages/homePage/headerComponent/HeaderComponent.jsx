import React, { useState } from "react";
import "./headerComponent.css";
import { EComplain } from "../../../assets";
import { Select, Col, Row, Modal, Button } from "antd";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
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
      <div className="headerLayout">
        <Row justify={"space-between"}>
          <Col span={12}>
            <Link to="/">
              <img src={EComplain} alt="E-Complain" className="LogoImage" />
            </Link>
          </Col>
          <Col>
            <div className="headerMenu">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/homepagebantuan">
                <p>Bantuan</p>
              </Link>
              <Link to="/aboutus">
                <p>About Us</p>
              </Link>

              <Select
                placeholder="Pilih Bahasa"
                onChange={showModal}
                bordered={false}
                options={[
                  {
                    value: "bahasa",
                    label: "Bahasa",
                  },
                  {
                    value: "english",
                    label: "English",
                  },
                ]}
              />
              <div>
                <Modal
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  width={1000}
                >
                  <h1 style={{ fontSize: "4rem" }}>On Construction</h1>
                </Modal>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HeaderComponent;
