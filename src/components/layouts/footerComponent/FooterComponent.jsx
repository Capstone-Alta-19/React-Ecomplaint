import React from "react";
import { Footer } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import Gap from "../../gap/Gap";
import { EcomplainzWhite, GmailIcon, WAIcon } from "../../../assets";
import "./footerCoponent.css";

const FooterComponent = () => {
  return (
    <Footer className="allfooter">
      <Gap height={150} />

      <Row className="rowFooter">
        <Col className="col1-footer">
          <img src={EcomplainzWhite} alt="Logo Ecomplainz" width={350} />
          <Gap height={50} />

          <p className="footer-desc">
            Complainz adalah sebuah aplikasi yang dirancang untuk memudahkan
            mahasiswa dalam memberikan laporan dan aspirasi terkait dengan
            keadaan di kampus. Dengan menggunakan aplikasi ini, pengguna dapat
            dengan mudah membuat laporan terkait masalah kampus seperti
            fasilitas yang rusak, kurangnya fasilitas, perilaku tidak etis dari
            staf atau dosen, atau hal-hal lainnya yang mempengaruhi kualitas
            hidup mahasiswa di kampus.
          </p>
        </Col>

        <Col>
          <p className="contact-Title">Contact Us</p>
          <Gap height={25} />

          <div className="gmail-footer">
            <img src={GmailIcon} width={45} height={45} />
            <p>complainzyuk@mail.co.id</p>
          </div>
          <Gap height={25} />

          <div className="wa-footer">
            <img src={WAIcon} width={45} height={45}></img>
            <p>+6282257665673</p>
          </div>
        </Col>
      </Row>
      <Gap height={100} />
    </Footer>
  );
};

export default FooterComponent;
