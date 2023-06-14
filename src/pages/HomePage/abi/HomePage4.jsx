import React from "react";
import { Row, Col, Typography } from "antd";
import "./homePage4.css";
import { Gembok, Pesan } from "../../../assets";

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <>
      <Title level={1}>
        Privasi Kalian adalah <br /> privasi COMPLAINZ
      </Title>
      <Row justify="center">
        <Col>
          <Row align="middle">
            <Col xs={24} md={12}>
              <img height={168} src={Gembok} alt="gembok" />
            </Col>
            <Col xs={24} md={12}>
              <Title level={1}>Tetap Anonim</Title>
              <Paragraph>
                Laporan tidak bisa di share jika bersifat privat/rahasia
              </Paragraph>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row align="middle">
            <Col xs={24} md={12}>
              <img height={168} src={Pesan} alt="gembok" />
            </Col>
            <Col xs={24} md={12}>
              <Title level={1}>Tetap Anonim</Title>
              <Paragraph>
                Laporan tidak bisa di share jika bersifat privat/rahasia
              </Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
