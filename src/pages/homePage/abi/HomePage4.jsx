import React from "react";
import { Row, Col, Typography } from "antd";
import "./homePage4.css";
import { Gembok, Pesan } from "../../../assets";
import Gap from "../../../components/gap/Gap";

const HomePage4 = () => {
  return (
    <>
      <Gap height={100} />
      <div>
        <h1 className="head-privasi">
          Privasi kalian adalah prioritas COMPLAINZ
        </h1>
      </div>
      <Gap height={120} />

      <Row justify={"center"}>
        <img height={150} src={Gembok} alt="Gembok" />
        <Col className="content-privasi">
          <h1 className="titlePriv">Tetap Anonim</h1>
          <h2 className="parafPriv">Tidak ada yang mengetahui data kalian</h2>
        </Col>

        <Gap width={120} />
        <img height={150} src={Pesan} alt="Pesan" />
        <Col className="content-privasi">
          <h1 className="titlePriv">Tidak Berbagi </h1>
          <h2 className="parafPriv">
            Laporan tidak bisa di share jika bersifat privat/ rahasia
          </h2>
        </Col>
      </Row>
    </>
  );
};

export default HomePage4;
