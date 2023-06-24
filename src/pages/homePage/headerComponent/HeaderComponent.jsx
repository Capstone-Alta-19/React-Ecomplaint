import React from "react";
import "./headerComponent.css";
import { EComplain } from "../../../assets";
import { Select } from "antd";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
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
              <Link to="#">
                <p>About Us</p>
              </Link>
              <Select
                placeholder="Pilih Bahasa"
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
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HeaderComponent;
