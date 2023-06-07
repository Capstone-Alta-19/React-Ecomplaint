import React from "react";
import { Row, Col, Typography } from "antd";
import "./homePage4.css";
import Gap from "../../../components/gap/Gap";

const { Title, Paragraph } = Typography;

const HomePage4 = () => {
  return (
    <div className="homePage">
      <Row justify="end" className="section">
        <Col xs={24} sm={24} md={18} lg={12}>
          <div className="content-1">
            <Title level={2} style={{ fontWeight: "bold" }}>
              Apakah identitas pelapor aman?
            </Title>
            <Paragraph>
              Identitas Pelapor dijaga keamanannya, anda bisa mengeluarkan keluh
              kesah tanpa rasa <br /> khawatir. Anda bisa memilih apakah
              identitas andaakan dirahasiakan atau <br /> dipublikasikan.
            </Paragraph>
          </div>
        </Col>
      </Row>
      <Gap height={50} />
      <Row justify="left" className="section">
        <Col xs={24} sm={24} md={18} lg={12}>
          <div className="content-2">
            <Title level={2} style={{ fontWeight: "bold" }}>
              Kenapa Laporan ditolak?
            </Title>
            <Paragraph>
              Anda mungkin menyalahi salah satu aturan untuk menyampaikan
              laporan. Salah satunya Berkata kasar, Menyampaikan berita hoax,
              atau permasalahan yang fiktif.
            </Paragraph>
          </div>
        </Col>
      </Row>
      <Gap height={50} />
      <Row justify="end" className="section">
        <Col xs={24} sm={24} md={18} lg={12}>
          <div className="content-1">
            <Title level={2} style={{ fontWeight: "bold" }}>
              Bagaimana cara mengetahui Proses laporan?
            </Title>
            <Paragraph>
              Pada aplikasi Complainz, anda dapat melihat secara detail proses
              dan progres laporan <br /> anda, tanpa perlu merasa bingung.
            </Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage4;
