import React from "react";
import { Col, Row } from "antd";
import Gap from "../../../components/gap/Gap";
import { EcomplainzWhite, GmailIcon, WAIcon } from "../../../assets/index";
import "./footerCoponent.css";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="allfooter">
      <Gap height={150} />

      <Row className="rowFooter">
        <Col className="col1-footer">
          <Link to={"/"}>
            <img src={EcomplainzWhite} alt="Logo Ecomplainz" width={350} />
          </Link>
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
          <Gap height={10} />

          <div className="wa-footer">
            <img src={WAIcon} width={80} />
            <p>+6282257665673</p>
          </div>
        </Col>
      </Row>
      <Gap height={100} />
    </div>
  );
};

export default FooterComponent;
