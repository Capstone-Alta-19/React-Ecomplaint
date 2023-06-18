import React from "react";
import { Row, Col, Typography } from "antd";
import "./homePage4.css";
import { Gembok, Pesan } from "../../../assets";

const HomePage4 = () => {
  return (
    <div className="privasi">
      <h1 className="title-privasi">
        Privasi kalian adalah prioritas COMPLAINZ
      </h1>
      <Row justify="center" className="contentMaster">
        <Col>
          <Row align="middle">
            <Col>
              <img height={168} src={Gembok} alt="gembok" />
            </Col>
            <Col className="content-privasi">
              <h1 className="titleContentPriv">Tetap Anonim</h1>
              <h2 className="paragrafContentPriv">
                Tidak ada yang mengetahui data kalian
              </h2>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row align="middle">
            <Col>
              <img height={168} src={Pesan} alt="gembok" />
            </Col>
            <Col className="content-privasi">
              <h1 className="titleContentPriv">Tidak Berbagi </h1>
              <h2 className="paragrafContentPriv">
                Laporan tidak bisa di share jika bersifat privat/rahasia
              </h2>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage4;
