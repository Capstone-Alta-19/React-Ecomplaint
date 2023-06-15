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
          <Col span={12}>
            <div className="headerMenu">
              <a href="/">
                <p>Home</p>
              </a>
              <a href="/homepagebantuan">
                <p>Bantuan</p>
              </a>
              <a href="#">
                <p>About Us</p>
              </a>
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
